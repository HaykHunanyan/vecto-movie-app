import React from 'react';
import './VideoPlayerWrapper.scss'
import ReactPlayer from 'react-player';
interface VideoPlayerProps {
    videoUrl: string;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({videoUrl}) => {

  return (
    <div className='video_content'>
        <ReactPlayer 
            url={videoUrl}
            playing={true} 
            loop={true} 
            controls={false}
        />
    </div>
  );
};

export default VideoPlayer;
