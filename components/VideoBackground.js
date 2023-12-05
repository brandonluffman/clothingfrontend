import React from 'react';

const VideoBackground = () => {
    return (
        <div className="video-background">
            <video autoPlay muted>
                <source src="/twelve34.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                {/* Your content goes here */}
            </div>
            <style jsx>{`
                .video-background {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: -1;
                }

                video {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }

                .content {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0);
                    // background-color: rgba(255, 255, 255, .05);
                    // backdrop-filter: blur(10px);
                    color: #fff;
                    text-align: center;
                    padding: 20px;
                }
            `}</style>
        </div>
    );
};

export default VideoBackground;
