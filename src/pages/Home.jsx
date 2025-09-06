import VideoForm from "../features/videos/VideoForm";
import VideoList from "../features/videos/VideoList";
import VideoPlayer from "../features/videos/VideoPlayer";


const Home = () => {
  return (
    <div className="container mx-auto p-1 md:p-6">
      <VideoPlayer />
      <VideoForm />
      <VideoList />
    </div>
  );
};

export default Home;
