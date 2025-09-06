import { useSelector } from "react-redux";

const VideoPlayer = () => {
  const currentVideo = useSelector((state) => state.videos?.currentVideo);

  return (
    <div className="w-full mb-10">
      {/* Title Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        🎥 Current Learning Video
      </h2>

      {/* Video Card */}
      <div className="bg-gradient-to-br from-blue-200 via-indigo-100 to-purple-200 rounded-3xl shadow-2xl p-4 md:p-6">
        <div className="w-full h-[450px] md:h-[500px] lg:h-[550px] rounded-3xl overflow-hidden border-4 border-indigo-400 shadow-xl">
          <iframe
            className="w-full h-full rounded-3xl"
            src={currentVideo}
            title="Learning Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Caption */}
        <p className="mt-6 text-center text-indigo-900 font-semibold text-xl">
          🚀 Dive deep into your learning journey!
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
