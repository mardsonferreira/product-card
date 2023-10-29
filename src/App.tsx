import React, { useState, useEffect } from "react";
import "./styles/global.css";
import "./app.css";
import Sofa from "./assets/sofa.png";
import Turn from "./assets/360.png";
import Close from "./assets/close.png";
import Image360Viewer from "./components/Image360Viewer";

function App() {
  const [viewMode, setViewMode] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const numberOfImages = 134;

  const toggleViewMode = () => {
    setViewMode((prevViewMode) => !prevViewMode);
  };

  useEffect(() => {
    let imagesUrls = [];

    for (var i = 0; i < numberOfImages; i++) {
      imagesUrls.push(`/images/frame_${i}.png`);
    }

    setImages(imagesUrls);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="content">
        <div className="left">
          <div className="product-images">
            <div className="product-action" onClick={toggleViewMode}>
              {viewMode ? (
                <img src={Close} alt="close" />
              ) : (
                <img src={Turn} alt="360" />
              )}
            </div>
            {viewMode ? (
              <Image360Viewer imageUrls={images} />
            ) : (
              <img className="product-image" src={Sofa} alt="sofa" />
            )}
          </div>
        </div>

        <div className="right">
          <div className="product-info">
            <span>CÓDIGO: 42404</span>

            <span className="product-description"> Sofá Margot II - Rosé</span>

            <span className="product-value">R$ 4.000</span>
          </div>

          <div>
            <button className="product-button">ADICIONAR À CESTA</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
