import "../App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [showDownload, setShowDownload] = useState(true);

  useEffect(() => {
    const updateProgress = () => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowButton(true);
          setShowDownload(false);
        }, 40000); // 40 segundos de retraso adicional para mostrar el botón
      }
    };

    const interval = setInterval(updateProgress, 100);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <div className="content-inicial">
      <img src="/src/assets/img/logo.png" alt="" />
      {showDownload && (
        <div className="progress">
          <div className="bar" style={{ "--progress": `${progress}%` }}></div>
        </div>
      )}
      {showButton && (
        <Link to="/map" className="play-button">
          <img src="/src/assets/img/button_play.png" alt="" />
        </Link>
      )}
    </div>
  );
};

export default Home;
