import React, {useState} from 'react'

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return(
    <div>
      {/* I want to have*/}
      {/*Caption Input*/}
      {/*File Picker*/}
      {/*Post button */}

      <input type="text"
      placeholder="Enter a caption"
      onChange={event => setCaption(event.target.value)}
      value={caption}>
      </input>

      <input type="file"
      onChange={handleChange}>
      </input>

      <Button onClick={handleUpload}>
        Upload
      </Button>
    </div>
  )
}

export default ImageUpload