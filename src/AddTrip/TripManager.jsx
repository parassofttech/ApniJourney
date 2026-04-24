// src/components/TripManager.jsx
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  FilePlus,
  CreditCard,
  UploadCloud,
  Play,
  Download,
  CircleStop,
} from "lucide-react";


/* --- tiny IndexedDB wrapper --- */
const DB_NAME = "travel_dashboard_db_v1";
const DB_STORE = "travel_store";

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE, { keyPath: "id" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbPut(item) {
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(DB_STORE, "readwrite");
    tx.objectStore(DB_STORE).put(item);
    tx.oncomplete = () => res(true);
    tx.onerror = () => rej(tx.error);
  });
}

async function idbGetAll() {
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(DB_STORE, "readonly");
    const req = tx.objectStore(DB_STORE).getAll();
    req.onsuccess = () => res(req.result);
    req.onerror = () => rej(req.error);
  });
}

async function idbDelete(id) {
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(DB_STORE, "readwrite");
    tx.objectStore(DB_STORE).delete(id);
    tx.oncomplete = () => res(true);
    tx.onerror = () => rej(tx.error);
  });
}

/* --- helper to convert file -> base64 dataURL --- */
function fileToDataUrl(file) {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => res(reader.result);
    reader.onerror = rej;
    reader.readAsDataURL(file);
  });
}

/* --- default structures --- */
const blankTrip = () => ({
  id: `trip_${Date.now()}`,
  title: "",
  destination: "",
  startDate: "",
  endDate: "",
  notes: "",
  expenses: [], // {id, label, amount, date, notes}
  documents: [], // {id, name, type, dataUrl}
  routes: [], // array of {id, recordedAt, points: [{lat,lng,ts}]}
  createdAt: new Date().toISOString(),
});

export default function TripManager() {
  const [trips, setTrips] = useState([]);
  const [activeTripId, setActiveTripId] = useState(null);
  const [editingTrip, setEditingTrip] = useState(blankTrip());
  const [tab, setTab] = useState("trips"); // trips | details | expenses | docs | routes | backup
  const [message, setMessage] = useState("");
  const watchIdRef = useRef(null);
  const currentRouteRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);

  /* load all trips from idb on mount */
  useEffect(() => {
    (async () => {
      try {
        const all = await idbGetAll();
        // filter store only trip items (we store trips by id keys)
        const savedTrips = (all || [])
          .filter(Boolean)
          .sort((a, b) => b.createdAt?.localeCompare(a.createdAt));
        setTrips(savedTrips);
        if (savedTrips.length > 0) setActiveTripId(savedTrips[0].id);
      } catch (err) {
        console.error("DB load error", err);
        setMessage("Unable to open DB in this browser.");
      }
    })();
  }, []);

  useEffect(() => {
    if (message) {
      const t = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(t);
    }
  }, [message]);

  /* helpers */
  const pickActiveTrip = (id) => {
    setActiveTripId(id);
    const t = trips.find((tr) => tr.id === id);
    setEditingTrip(t ? { ...t } : blankTrip());
    setTab("details");
  };

  const saveTrip = async (trip) => {
    try {
      await idbPut(trip);
      const updated = trips
        .filter((t) => t.id !== trip.id)
        .concat([trip])
        .sort((a, b) => b.createdAt?.localeCompare(a.createdAt));
      setTrips(updated);
      setActiveTripId(trip.id);
      setEditingTrip({ ...trip });
      setMessage("Saved trip locally ✅");
    } catch (err) {
      console.error(err);
      setMessage("Save failed");
    }
  };

  const createNewTrip = () => {
    const t = blankTrip();
    setEditingTrip(t);
    setTab("details");
    setActiveTripId(null);
  };

  const deleteTrip = async (id) => {
    if (!confirm("Delete this trip permanently?")) return;
    try {
      await idbDelete(id);
      const updated = trips.filter((t) => t.id !== id);
      setTrips(updated);
      setActiveTripId(updated[0]?.id || null);
      setMessage("Trip deleted");
    } catch (err) {
      console.error(err);
      setMessage("Delete failed");
    }
  };

  /* Expenses */
  const addExpense = async (expense) => {
    const trip = editingTrip;
    const ex = { id: `ex_${Date.now()}`, ...expense };
    trip.expenses = [...(trip.expenses || []), ex];
    await saveTrip(trip);
  };

  const removeExpense = async (expId) => {
    const trip = editingTrip;
    trip.expenses = (trip.expenses || []).filter((e) => e.id !== expId);
    await saveTrip(trip);
  };

  /* Documents */
  const handleDocumentUpload = async (files) => {
    if (!files?.length) return;
    const trip = editingTrip;
    const arr = [];
    for (const f of files) {
      try {
        const dataUrl = await fileToDataUrl(f);
        arr.push({
          id: `doc_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
          name: f.name,
          type: f.type,
          dataUrl,
        });
      } catch (err) {
        console.error("file convert", err);
      }
    }
    trip.documents = [...(trip.documents || []), ...arr];
    await saveTrip(trip);
  };

  const removeDocument = async (docId) => {
    const trip = editingTrip;
    trip.documents = (trip.documents || []).filter((d) => d.id !== docId);
    await saveTrip(trip);
  };

  /* Routes (geolocation) */
  const startRecordingRoute = () => {
    if (!navigator.geolocation) {
      setMessage("Geolocation not supported in this browser.");
      return;
    }
    if (isRecording) return;
    currentRouteRef.current = {
      id: `route_${Date.now()}`,
      recordedAt: new Date().toISOString(),
      points: [],
    };
    const success = (pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      currentRouteRef.current.points.push({ lat, lng, ts: Date.now() });
    };
    const error = (err) => {
      console.warn("geo err", err);
      setMessage("Unable to get location.");
      stopRecordingRoute();
    };
    const watchId = navigator.geolocation.watchPosition(success, error, {
      enableHighAccuracy: true,
      maximumAge: 2000,
      timeout: 5000,
    });
    watchIdRef.current = watchId;
    setIsRecording(true);
    setMessage("Route recording started — move to collect points.");
  };

  const stopRecordingRoute = async () => {
    if (!isRecording) return;
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
    setIsRecording(false);
    const route = currentRouteRef.current;
    if (!route || !route.points.length) {
      setMessage("No route points recorded.");
      currentRouteRef.current = null;
      return;
    }
    // save into editing trip
    const trip = editingTrip;
    trip.routes = [...(trip.routes || []), route];
    await saveTrip(trip);
    currentRouteRef.current = null;
    setMessage("Route saved to trip.");
  };

  /* Export / Import */
  const exportAll = async () => {
    const all = await idbGetAll();
    const blob = new Blob([JSON.stringify(all, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `trips-backup-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importFile = async (file) => {
    if (!file) return;
    try {
      const txt = await file.text();
      const data = JSON.parse(txt);
      if (!Array.isArray(data)) throw new Error("Invalid file format");
      // write each item
      for (const item of data) {
        if (item && item.id) await idbPut(item);
      }
      const refreshed = await idbGetAll();
      setTrips(refreshed);
      setMessage("Import complete");
    } catch (err) {
      console.error(err);
      setMessage("Import failed");
    }
  };

  /* small UI components inside file for clarity */
  const TripList = () => (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Your Trips</h3>
        <div className="flex gap-2">
          <button
            onClick={createNewTrip}
            className="px-3 py-1 rounded-lg bg-green-500 text-white text-sm"
          >
            + New
          </button>
          <button
            onClick={exportAll}
            className="px-3 py-1 rounded-lg bg-blue-600 text-white text-sm flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>
      <div className="space-y-3">
        {trips.map((t) => (
          <motion.div
            key={t.id}
            whileHover={{ scale: 1.01 }}
            className={`p-3 rounded-lg border ${
              t.id === activeTripId ? "border-blue-400 bg-blue-50" : "bg-white"
            } flex justify-between items-center`}
          >
            <div onClick={() => pickActiveTrip(t.id)} className="cursor-pointer">
              <div className="font-semibold">{t.title || "Untitled trip"}</div>
              <div className="text-xs text-gray-500">
                {t.destination || "Unknown"} · {t.startDate || "—"}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setEditingTrip({ ...t });
                  setTab("details");
                  setActiveTripId(t.id);
                }}
                className="text-sm px-2 py-1 rounded bg-indigo-500 text-white"
              >
                Open
              </button>
              <button
                onClick={() => deleteTrip(t.id)}
                className="text-sm px-2 py-1 rounded bg-red-500 text-white"
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
        {trips.length === 0 && (
          <div className="text-sm text-gray-500">No trips yet — create one!</div>
        )}
      </div>
    </div>
  );

  /* ------------------------------
     TripDetails FIX: use local form state
     to avoid parent re-renders clobbering inputs.
     ------------------------------ */
  const TripDetails = () => {
    // local form mirrors editingTrip to avoid race/overwrite
    const [form, setForm] = useState({
      title: "",
      destination: "",
      startDate: "",
      endDate: "",
      notes: "",
    });

    // sync when editingTrip changes (open existing trip or new blank)
    useEffect(() => {
      setForm({
        title: editingTrip.title || "",
        destination: editingTrip.destination || "",
        startDate: editingTrip.startDate || "",
        endDate: editingTrip.endDate || "",
        notes: editingTrip.notes || "",
      });
    }, [editingTrip?.id]); // only resync when active trip id changes

    const onChange = (e) => {
      const { name, value } = e.target;
      setForm((p) => ({ ...p, [name]: value }));
    };

    const handleSave = async () => {
      // merge local form into editingTrip then save
      const merged = { ...editingTrip, ...form };
      // ensure id & createdAt exist
      if (!merged.id) merged.id = `trip_${Date.now()}`;
      if (!merged.createdAt) merged.createdAt = new Date().toISOString();
      await saveTrip(merged);
    };

    return (
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-3">
          <input
            name="title"
            value={form.title}
            onChange={onChange}
            placeholder="Trip title"
            className="flex-1 p-2 border rounded"
          />
          <input
            name="destination"
            value={form.destination}
            onChange={onChange}
            placeholder="Destination"
            className="w-52 p-2 border rounded"
          />
        </div>

        <div className="flex gap-3">
          <input
            name="startDate"
            value={form.startDate}
            onChange={onChange}
            type="date"
            className="p-2 border rounded"
          />
          <input
            name="endDate"
            value={form.endDate}
            onChange={onChange}
            type="date"
            className="p-2 border rounded"
          />
        </div>

        <textarea
          name="notes"
          value={form.notes}
          onChange={onChange}
          placeholder="Notes / itinerary"
          className="w-full p-2 border rounded h-28"
        />

        <div className="flex gap-2">
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">
            Save
          </button>
          <button
            onClick={() => {
              setEditingTrip(blankTrip());
              setActiveTripId(null);
              setMessage("Cleared form");
            }}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Clear
          </button>
        </div>

        <div className="text-sm text-gray-500 mt-2">
          Tip: All data is stored locally and works offline. Use Export to backup.
        </div>
      </div>
    );
  };

  const ExpensesPanel = () => {
    const [form, setForm] = useState({ label: "", amount: "", date: "" });
    const trip = editingTrip;

    const submit = async (e) => {
      e.preventDefault();
      if (!form.label || !form.amount) return setMessage("Provide label & amount");
      await addExpense({ ...form, amount: Number(form.amount) });
      setForm({ label: "", amount: "", date: "" });
    };

    return (
      <div className="p-4 space-y-4">
        <h4 className="font-semibold">Expenses for "{trip.title || "current"}"</h4>
        <form onSubmit={submit} className="flex gap-2">
          <input
            placeholder="Label"
            value={form.label}
            onChange={(e) => setForm({ ...form, label: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            placeholder="Amount"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            type="number"
            className="p-2 border rounded w-28"
          />
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="p-2 border rounded"
          />
          <button type="submit" className="px-3 bg-green-500 text-white rounded">
            Add
          </button>
        </form>

        <div className="space-y-2">
          {(trip.expenses || []).length === 0 && (
            <div className="text-sm text-gray-500">No expenses</div>
          )}
          {(trip.expenses || []).map((ex) => (
            <div key={ex.id} className="flex justify-between items-center bg-white p-2 rounded shadow-sm">
              <div>
                <div className="font-medium">
                  {ex.label} <span className="text-xs text-gray-400">· {ex.date || "—"}</span>
                </div>
                <div className="text-sm text-gray-600">
                  ₹{ex.amount.toFixed ? ex.amount.toFixed(2) : ex.amount}
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => removeExpense(ex.id)} className="text-sm px-2 py-1 rounded bg-red-500 text-white">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const DocumentsPanel = () => {
    const trip = editingTrip;
    return (
      <div className="p-4 space-y-4">
        <h4 className="font-semibold">Documents / Tickets</h4>

        <div>
          <label className="inline-flex items-center gap-2 px-3 py-2 bg-white border rounded cursor-pointer">
            <UploadCloud className="w-4 h-4" /> Upload files
            <input
              onChange={(e) => handleDocumentUpload(e.target.files)}
              multiple
              type="file"
              accept="image/*,application/pdf"
              className="hidden"
            />
          </label>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {(trip.documents || []).map((doc) => (
            <div key={doc.id} className="bg-white p-2 rounded shadow-sm text-center">
              {doc.type && doc.type.startsWith("image") ? (
                <img src={doc.dataUrl} alt={doc.name} className="h-28 w-full object-cover rounded" />
              ) : (
                <div className="h-28 flex items-center justify-center bg-gray-100 rounded text-xs">{doc.type || "file"}</div>
              )}
              <div className="mt-2 text-xs font-medium">{doc.name}</div>
              <div className="flex gap-2 justify-center mt-2">
                <a href={doc.dataUrl} download={doc.name} className="text-xs px-2 py-1 bg-blue-500 text-white rounded">
                  Download
                </a>
                <button onClick={() => removeDocument(doc.id)} className="text-xs px-2 py-1 bg-red-500 text-white rounded">
                  Remove
                </button>
              </div>
            </div>
          ))}
          {(trip.documents || []).length === 0 && <div className="text-sm text-gray-500">No documents uploaded</div>}
        </div>
      </div>
    );
  };

  const RoutesPanel = () => {
    const trip = editingTrip;
    return (
      <div className="p-4 space-y-4">
        <h4 className="font-semibold">GPS Routes</h4>
        <p className="text-sm text-gray-500">Record your route while travelling. Works offline (saved locally).</p>

        <div className="flex gap-2">
          <button onClick={startRecordingRoute} disabled={isRecording} className={`px-4 py-2 rounded ${isRecording ? "bg-gray-300" : "bg-green-500 text-white"}`}>
            <Play className="inline-block w-4 h-4 mr-2" /> Start
          </button>
          <button onClick={stopRecordingRoute} disabled={!isRecording} className="px-4 py-2 rounded bg-red-500 text-white">
            <CircleStop className="inline-block w-4 h-4 mr-2" /> Stop
          </button>
        </div>

        <div className="space-y-3">
          {(trip.routes || []).length === 0 && <div className="text-sm text-gray-500">No routes recorded</div>}
          {(trip.routes || []).map((r) => (
            <div key={r.id} className="p-3 bg-white rounded shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Recorded: {new Date(r.recordedAt).toLocaleString()}</div>
                  <div className="text-xs text-gray-500">{r.points.length} points</div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const blob = new Blob([JSON.stringify(r.points, null, 2)], { type: "application/json" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = `route-${r.id}.json`;
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                    className="px-3 py-1 rounded bg-blue-600 text-white text-sm"
                  >
                    Export
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const BackupPanel = () => (
    <div className="p-4 space-y-4">
      <h4 className="font-semibold">Backup & Restore</h4>
      <div className="flex gap-2">
        <button onClick={exportAll} className="px-4 py-2 bg-blue-600 text-white rounded">Export All</button>
        <label className="px-4 py-2 bg-white border rounded cursor-pointer">
          Import JSON
          <input onChange={(e) => importFile(e.target.files?.[0])} accept="application/json" type="file" hidden />
        </label>
      </div>
      <div className="text-sm text-gray-500">Export your trips to a file or import a backup. All local (no cloud by default).</div>
    </div>
  );

  return (
    <section className="max-w-6xl mx-auto p-4">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left column - list + nav */}
          <div className="w-full md:w-80 border-r p-3 bg-gray-50">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="font-bold text-lg">Trip Manager</div>
                <div className="text-xs text-gray-500">Offline-ready • Local DB</div>
              </div>
            </div>

            {/* <div className="flex gap-2 mb-3">
              <button onClick={() => setTab("trips")} className={`flex-1 p-2 rounded ${tab === "trips" ? "bg-blue-600 text-white" : "bg-white border"}`}>Trips</button>
              <button onClick={() => setTab("backup")} className={`p-2 rounded ${tab === "backup" ? "bg-blue-600 text-white" : "bg-white border"}`}>Backup</button>
            </div> */}

            <div className="mb-3">
              <TripList />
            </div>

            <div className="mt-3 space-y-2">
              <div className="text-xs text-gray-500">Quick actions</div>
              <div className="flex gap-2">
                <button onClick={() => { setEditingTrip(blankTrip()); setTab("details"); setActiveTripId(null); }} className="flex-1 p-2 rounded bg-green-500 text-white">New Trip</button>
                <button onClick={() => setMessage("Feature: Sync (not implemented)")} className="p-2 rounded bg-gray-200">Sync</button>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-500">
              Note: All files stored locally using IndexedDB. You can export/import JSON backups.
            </div>
          </div>

          {/* Right column - main panels */}
          <div className="flex-1 p-3">
            {/* top controls */}
            <div className="flex items-center justify-between mb-3 gap-2">
              <div className="flex items-center gap-2">
                <button onClick={() => { setTab("details"); setEditingTrip(trips.find((t) => t.id === activeTripId) || editingTrip); }} className={`px-3 py-1 rounded ${tab === "details" ? "bg-indigo-600 text-white" : "bg-white border"}`}>Details</button>
                <button onClick={() => setTab("expenses")} className={`px-3 py-1 rounded ${tab === "expenses" ? "bg-indigo-600 text-white" : "bg-white border"}`}>Expenses</button>
                <button onClick={() => setTab("docs")} className={`px-3 py-1 rounded ${tab === "docs" ? "bg-indigo-600 text-white" : "bg-white border"}`}>Documents</button>
                <button onClick={() => setTab("routes")} className={`px-3 py-1 rounded ${tab === "routes" ? "bg-indigo-600 text-white" : "bg-white border"}`}>Routes</button>
              </div>

              <div className="flex items-center gap-2">
                <div className="text-sm text-gray-600">{message}</div>
                <button onClick={() => exportAll()} className="px-3 py-1 bg-blue-600 text-white rounded">Export all</button>
              </div>
            </div>

            <div className="bg-gray-100 rounded p-2 min-h-[420px]">
              {tab === "trips" && <TripList />}
              {tab === "details" && <TripDetails />}
              {tab === "expenses" && <ExpensesPanel />}
              {tab === "docs" && <DocumentsPanel />}
              {tab === "routes" && <RoutesPanel />}
              {tab === "backup" && <BackupPanel />}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
