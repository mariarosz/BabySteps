import React, { useEffect, useRef } from 'react';
import { HiCheck } from 'react-icons/hi';

export default function UploadWidget({ url, setUrl }) {
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
  }, [setUrl]);

  return (
    <button id="upload" onClick={() => widgetRef.current.open()}>
      {url ? <HiCheck /> : 'Upload picture'}
    </button>
  );
}
