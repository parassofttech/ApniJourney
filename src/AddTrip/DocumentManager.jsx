import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FileText, Upload, Trash2, Loader2, Eye } from "lucide-react";

const DocumentManager = () => {
  const [documents, setDocuments] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewDoc, setPreviewDoc] = useState(null);

  // ✅ Fetch all documents
  const fetchDocuments = async () => {
    try {
      const res = await axios.get("https://apnijourney-api.onrender.com/api/documents")
      setDocuments(res.data);
    } catch (error) {
      console.error("Fetch Error:", error.message);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  // ✅ Upload document
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !title) {
      alert("Please provide a title and select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/documents/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setTitle("");
      setFile(null);
      fetchDocuments();
    } catch (error) {
      console.error("Upload Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Delete document
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this document?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/documents/${id}`);
      fetchDocuments();
    } catch (error) {
      console.error("Delete Error:", error.message);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          📂 Travel Document Manager
        </h2>

        {/* Upload Section */}
        <form
          onSubmit={handleUpload}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10"
        >
          <input
            type="text"
            placeholder="Enter document title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 w-full md:w-1/3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="flex items-center gap-2 border border-dashed border-gray-400 px-4 py-2 rounded-xl cursor-pointer hover:bg-gray-50">
            <Upload className="w-5 h-5 text-blue-500" />
            <span className="text-gray-600 text-sm">
              {file ? file.name : "Choose File"}
            </span>
            <input
              type="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium transition"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Upload"}
          </button>
        </form>

        {/* Document List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <motion.div
              key={doc._id || index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <FileText className="text-blue-600 w-6 h-6" />
                <h3 className="text-lg font-semibold text-gray-800">{doc.title}</h3>
              </div>

              <p className="text-gray-500 text-sm mb-3">
                Uploaded on: {new Date(doc.uploadedAt).toLocaleDateString()}
              </p>

              <div className="flex justify-between items-center mt-auto">
                <button
                  onClick={() =>
                    setPreviewDoc(`http://localhost:5000${doc.filePath}`)
                  }
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition"
                >
                  <Eye className="w-4 h-4" /> View
                </button>

                <button
                  onClick={() => handleDelete(doc._id)}
                  className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 transition"
                >
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Preview Modal */}
        {previewDoc && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-11/12 md:w-3/4 lg:w-1/2 relative">
              <button
                onClick={() => setPreviewDoc(null)}
                className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                ✖
              </button>

              <iframe
                src={previewDoc}
                title="Document Preview"
                className="w-full h-[70vh] rounded-lg border border-gray-200"
              ></iframe>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default DocumentManager;
