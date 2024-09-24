import React from 'react';
import './picture.css';

function Picture() {
  // Function to handle button click
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('https://firebasestorage.googleapis.com/v0/b/amr-database-ce735.appspot.com/o/LinePlots%2FNumber%20of%20Samples%20Containing%20Salmonella.png?alt=media&token=3af3c114-4b3a-418a-a846-40a1d8f53e68')}>Cases of Salmonella</button>
      <button onClick={() => handleButtonClick('https://firebasestorage.googleapis.com/v0/b/amr-database-ce735.appspot.com/o/BarCharts%2FCases%20for%20each%20Pathogen%20Bar%20Chart.png?alt=media&token=8c91f94f-c94d-4453-ac03-3bfb07d23a1b')}>Number of Each Pathogen</button>
      <button onClick={() => handleButtonClick('https://firebasestorage.googleapis.com/v0/b/amr-database-ce735.appspot.com/o/Maps%2FMap%20of%20Total%20Cases_2.png?alt=media&token=254937f1-9078-4205-b5dc-ac88a58544d4')}>Map</button>
      <button onClick={() => handleButtonClick('https://firebasestorage.googleapis.com/v0/b/amr-database-ce735.appspot.com/o/LinePlots%2FNumber%20of%20Samples%20obtained%20from%20Chicken.png?alt=media&token=b61f4d9f-1408-4adb-a74c-b4886730ca35')}>Number of Samples from Chicken</button>
    </div>
  );
}

export default Picture;
