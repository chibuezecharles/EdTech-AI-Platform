import { useState } from "react";
import { useDispatch } from "react-redux";
import { addVideo } from "./videoSlice";

const VideoForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: "", description: "", url: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.description || !form.url) return;
    dispatch(addVideo(form));
    setForm({ name: "", description: "", url: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8 max-w-4xl mx-auto"
    >
      {/* Form Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        🎬 Add New Video
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Video Name */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-gray-700 mb-2"
          >
            Video Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter video title"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-sm font-semibold text-gray-700 mb-2"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter short description"
            value={form.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />
        </div>

        {/* URL */}
        <div className="flex flex-col">
          <label
            htmlFor="url"
            className="text-sm font-semibold text-gray-700 mb-2"
          >
            YouTube URL
          </label>
          <input
            type="text"
            id="url"
            name="url"
            placeholder="Paste YouTube link"
            value={form.url}
            onChange={handleChange}
            className="border border-gray-300 rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8 text-center">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:opacity-90 transform hover:-translate-y-1 transition duration-300"
        >
          ➕ Add Video
        </button>
      </div>
    </form>
  );
};

export default VideoForm;
