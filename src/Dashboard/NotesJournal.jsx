import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NotesJournal = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");

  // Load notes from localStorage (only once on mount)
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add new note
  const addNote = () => {
    const text = noteInput.trim();
    if (!text) return;

    const newNote = {
      id: Date.now(),
      content: text,
      createdAt: new Date().toLocaleString(),
    };

    setNotes([newNote, ...notes]);
    setNoteInput("");
  };

  // Delete note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-300/20 p-6 rounded-2xl shadow-md"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        📝 Travel Notes Journal
      </h2>

      {/* Input Box */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Write your note..."
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          className="flex-1 border border-blue-900 p-3 rounded-xl focus:ring-2 bg-blue-100 focus:ring-blue-400 outline-none"
        />
        <button
          onClick={addNote}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition font-medium"
        >
          Add
        </button>
      </div>

      {/* Notes List */}
      {notes.length === 0 ? (
        <p className="text-gray-500 text-sm text-center">
          No notes yet. Add your travel memories!
        </p>
      ) : (
        <ul className="space-y-3">
          <AnimatePresence>
            {notes.map((note) => (
              <motion.li
                key={note.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-3 rounded-xl bg-gray-50 shadow-sm flex justify-between items-start hover:shadow-md transition"
              >
                <div>
                  <p className="text-gray-700">{note.content}</p>
                  <span className="text-gray-400 text-xs">
                    {note.createdAt}
                  </span>
                </div>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="text-red-500 font-bold hover:text-red-600 transition"
                >
                  ✕
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </motion.div>
  );
};

export default NotesJournal;
