import React, { useEffect } from 'react';
import { HiCheck } from 'react-icons/hi';

export default function UploadWidget({ url, setUrl }:{url: string, setUrl: Function}) {
  const cloudinaryRef: any = React.useRef(!null)
  const widgetRef: any = React.useRef(!null);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dbhikwtx2',
        uploadPreset: 'k14x58cy',
      },
      function (error: string, result: any) {
        if (!error && result && result.event === 'success') {
          setUrl(result.info.url);
        }
      }
    );
  }, [setUrl]);

  return (
    <button id="upload" type="button" onClick={() => widgetRef.current.open()}>
      {url ? <HiCheck /> : 'Upload picture'}
    </button>
  );
}
