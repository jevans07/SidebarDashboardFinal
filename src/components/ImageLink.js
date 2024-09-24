// src/components/ImageGallery.js
import React, { useState, useEffect } from "react";
import { storage } from "../firebaseconfig";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const ImageGallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, 'Maps/Map of Total Cases_1.png');
      const imageList = await listAll(storageRef);

      const urls = await Promise.all(
        imageList.items.map((imageRef) => getDownloadURL(imageRef))
      );

      setImageUrls(urls);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Image Gallery</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Firebase ${index}`} 
          style={{ width: "200px", height: "200px", margin: "10px" }} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
