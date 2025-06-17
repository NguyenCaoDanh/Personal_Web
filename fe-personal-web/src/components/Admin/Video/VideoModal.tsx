import React from "react";
interface VideoModalProps{
    videoUrl:string;
    onClose: ()=>void;
}
const VideoModal:React.FC<VideoModalProps>=({videoUrl,onClose})=>{
    return(
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl w-full relative">
                <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl" onClick={onClose}>
                    &times;
                </button>
                <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">🎬 Xem Video</h2>
                <video
                width={400}
                height={300}
                    src={videoUrl}
                    controls
                    autoPlay
                    className="w-full h-auto rounded-lg"
                />
            </div>
        </div>
    )
}
export default VideoModal;