import React, { useState, useEffect } from 'react';
import {useDropzone} from 'react-dropzone';
import PredictShow from './predict_show.jsx'

import './upload.css'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
  marginLeft: 12,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
  align: 'center',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

function UploadSingleImage(props) {

  const maxSize_img = 5*1024*1024
  const accept_type  = 'image/jpeg,image/png,image/jpg,image/gif'

  function imageTypeValidator(file) {
    console.log(file.type)
    if (!accept_type.split(',').includes(file.type)) {
      return {
        code: "NQRT-invalid-image-type",
        message: `Chỉ các kiểu tệp ${accept_type} được dùng !`
      };
    }
  
    return null
  }

  function imageSizeValidator(file) {
    if (file.size > maxSize_img) {
      return {
        code: "NQRT-invalid-image-size",
        message: `Tệp giới hạn kích thước ${maxSize_img} !`
      };
    }
  
    return null
  }

  // Thumbnail preview

  const [files, setFiles] = useState([

  ]);

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps
  } = useDropzone({
    maxFiles:5,
    minSize: 5*1024,
    maxSize: maxSize_img,
    accept: accept_type,
    validator: imageSizeValidator,
    validator: imageTypeValidator,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  // Processing

  const showResults = ( (files) => {
    return (
      <div>
        <PredictShow toCall={files}/>
      </div>
    )

  })

  return (
    <section>
      <div  className="dropzone" {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Kéo thả ảnh hoặc bấm vào đây để chọn tệp. 
          <br/><i>(Chỉ tệp ảnh và có kích thước nhỏ hơn 4MBytes)</i></p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
      {showResults(acceptedFiles)}
    </section>
  );
}

export default UploadSingleImage;