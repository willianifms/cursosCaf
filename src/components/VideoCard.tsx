import React from "react";

interface VideoCardProps {
  title: string;
  src: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, src }) => {
  return (
    <div className="card shadow">
      <video className="card-img-top" controls>
        <source src={src} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default VideoCard;
