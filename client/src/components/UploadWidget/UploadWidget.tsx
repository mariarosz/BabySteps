import React, { useEffect } from 'react';
import { HiCheck } from 'react-icons/hi';
import process from 'process';

export default function UploadWidget({
  url,
  setUrl,
}: {
  url: string;
  setUrl: Function;
}) {
  const cloudinaryRef: any = React.useRef(!null);
  const widgetRef: any = React.useRef(!null);

  useEffect(() => {
    cloudinaryRef.current = (window as any).cloudinary;

    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
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
