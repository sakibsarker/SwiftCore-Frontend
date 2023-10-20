// SoftDropzone.js

import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Dropzone from "dropzone";
import "dropzone/dist/min/dropzone.min.css";
import SoftBox from "layouts/ecommerce/products/update-product/components/SoftBox";
import SoftDropzoneRoot from "layouts/ecommerce/products/update-product/components/SoftDropzone/SoftDropzoneRoot";

function SoftDropzone({ onDrop }) {
  const dropzoneRef = useRef();
  const [previewURL, setPreviewURL] = useState(null);

  useEffect(() => {
    Dropzone.autoDiscover = false;

    const dz = new Dropzone(dropzoneRef.current, {
      url: '/api/upload', 
      autoProcessQueue: false, 
      maxFiles: 1,
      acceptedFiles: 'image/*',
      addRemoveLinks: true,
      init: function() {
        this.on("addedfile", function(file) {
          onDrop([file]);
          // Generate and set the preview URL
          const reader = new FileReader();
          reader.onload = function() {
            setPreviewURL(reader.result);
          }
          reader.readAsDataURL(file);
        });
      }
    });

    return () => {
      dz.destroy();
    };
  }, [onDrop]);

  return (
    <SoftDropzoneRoot
      component="form"
      ref={dropzoneRef}
      className="form-control dropzone"
    >
      <SoftBox className="fallback">
        
        <SoftBox component="input" name="file" type="file" />
        
      </SoftBox>
      {previewURL && <img src={previewURL} alt="Preview" style={{width: '40%',borderRadius:'3px'}} />}
      
    </SoftDropzoneRoot>
  );
}

SoftDropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
};

export default SoftDropzone;
