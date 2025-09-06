import { useDispatch, useSelector } from "react-redux";
import { deleteVideo, setCurrentVideo } from "./videoSlice";

const VideoList = () => {
  const videos = useSelector((state) => state.videos?.list);
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl">
      {/* Title */}
      <h2 className="text-2xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        📺 Video Library
      </h2>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              <th className="p-4">Name</th>
              <th className="p-4">Description</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {videos?.length > 0 ? (
              videos?.map((video, index) => (
                <tr
                  key={video.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  } hover:bg-indigo-50 transition`}
                >
                  <td className="p-4 font-medium text-gray-800">
                    {video?.name}
                  </td>
                  <td className="p-4 text-gray-600">{video?.description}</td>
                  <td className="p-4 text-center space-x-2 space-y-2">
                    <button
                      onClick={() => dispatch(setCurrentVideo(video?.url))}
                      className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition"
                    >
                     Watch
                    </button>
                    <button
                      onClick={() => dispatch(deleteVideo(video?.id))}
                      className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition"
                    >
                     Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-center p-6 text-gray-500 italic"
                >
                  No videos available. Add some to get started 🎬
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VideoList;
