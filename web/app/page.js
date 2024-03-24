'use client';

import imageCompression from 'browser-image-compression'
import { useState } from 'react';
import { toast } from 'sonner';

import CompressLoading from '@/components/compressLoading'
import Hero from '@/components/hero'
import TypeOptions from '@/components/typeOptions'
import OcrView from '@/components/ocrView'
import { imageTypes } from '@/lib/constants';
import Uploader from '@/components/uploader';

export default function Home() {
  const [image, setImage] = useState(null);
  const [imageType, setImageType] = useState(imageTypes[0]);
  const [ocrResult, setOcrResult] = useState(null);
  const [compressing, setCompressing] = useState(false);

  const selectChangeHandler = (newImageType) => {
    setImageType(newImageType);
    setImage(null);
    setOcrResult(null);
  };

  const submitForm = async (file) => {
    const formData = new FormData()
    formData.append('image', file)
    formData.append('image_type', imageType.value)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        setOcrResult('');
        return;
      }
      const { ocr_result } = await response.json()
      setOcrResult(ocr_result);
    } catch (error) {
      console.log('error in fetch:', error);
      toast.error('error in fetch api');
    }
  };

  const inputChangeHandler = async (acceptedFile) => {
    setImage(null);
    setOcrResult(null);
    setCompressing(true);

    if (acceptedFile) {
      const options = {
        maxSizeMB: 5,
        maxWidthOrHeight: 1920,
        useWebWorker: false,  // 'true' will make it very slow in mobile
      }

      try {
        const compressedFile = await imageCompression(acceptedFile, options)
        const reader = new FileReader()
        reader.onloadend = async () => {
          setImage(reader.result);
          setCompressing(false);
          submitForm(compressedFile);
        }
        reader.readAsDataURL(compressedFile)
      } catch (error) {
        setCompressing(false);
        console.log(error);
        toast.error('Error in Image Compression');
      }
    }
  };

  return (
    <main className="h-screen w-full px-8 py-8 md:max-w-4xl md:mx-auto">
      <Hero />
      <TypeOptions imageType={imageType} onChange={selectChangeHandler} />
      <Uploader onChange={inputChangeHandler} />
      { compressing ? (
        <CompressLoading />
      ) : (
        image && <OcrView image={image} ocrResult={ocrResult} />
      )}
    </main>
  );
}
