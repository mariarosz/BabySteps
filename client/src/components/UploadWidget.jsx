import React, { useEffect, useRef } from 'react';

export default function UploadWidget({ setUrl }) {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dbhikwtx2',
        uploadPreset: 'k14x58cy',
      },
      function (error, result) {
        if (!error && result && result.event === 'success') {
          setUrl(result.info.url);
        }
      }
    );
  }, []);

  return (
    <button onClick={() => widgetRef.current.open()}>Upload picture</button>
  );
}
