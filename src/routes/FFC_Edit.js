import React, { useState } from 'react';

export default function FFC_Edit() {
  const [deckName, setDeckName] = useState('');
  const [cardName, setCardName] = useState('');//this is not the correct way to do this
  const [selectedImage, setSelectedImage] = useState('');
  const [uploadData, setUploadData] = useState('');

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    //TODO set up to backend
  }

  return<>
    <form onSubmit={(e) => { handleOnSubmit(e) }}>
      <label >
        Deck Name
      </label><br />
      <input type="text" value={deckName} required onChange={(e)=> setDeckName(e.target.value)} /><br />
      <div>
        {selectedImage && (
          <div>
          <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} /> <br />
          <input type="text" required onChange={(e)=> setCardName(e.target.value)} /> <br />
          <button onClick={()=>setSelectedImage(null)}>Remove</button>

          </div>
        )} <br />
        
       
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
        
      </div>
      <input type="submit" value="Submit" />
    </form>
  
  </>
}
