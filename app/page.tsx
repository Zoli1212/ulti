import Image from "next/image";
import VideoPlayer from "./(dashboard)/(routes)/detection/detection/page";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <VideoPlayer />
      
    </main>
  );
}
