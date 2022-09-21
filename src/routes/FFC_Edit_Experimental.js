import React, { useState, useEffect } from "react";

const UploadAndDisplayImage = () => {
  const [images, setImages] = useState([]);
  const [imageURLS, setImageURLs] = useState([]);
  const [imageNames, setImageNames] = useState([]);
  const [deckName, setDeckName] = useState();
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls: any = [];
    images.forEach((image:any) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e: any) {
    setImages([...e.target.files]);
  }

  function onNameChange(e: any) {
    setImageNames([...e.target.value]);
  }

  function onRemoveImage(e) {//breaks the thing
    console.log(e)

    var editarray = images.filter(function(value, index){ 
        return value > 5;//remove the image we don't want
    });

    setImages(editarray);
    // setImageNames([...null]);
    // setImageURLs({...null});
  }

  return (
    <>
      <label >
        Deck Name
      </label><br />
      <input type="text" value={deckName} required onChange={(e)=> setDeckName(e.target.value)} /><br />
      <input type="file" multiple accept="image/*" onChange={onImageChange} /> <br />
      {imageURLS.map((imageSrc) => (
        <>
          <img src={imageSrc} alt="not found" width={"250px"} /> <br />
          <input type="text" required onChange={(e)=> onNameChange} /> <br />
          <button onClick={onRemoveImage}>Remove</button> <br />
          <br />
        </>
      ))}
    </>
  );
};

export default UploadAndDisplayImage;