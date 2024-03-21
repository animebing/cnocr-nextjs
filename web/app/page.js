'use client';

import { useState } from 'react';

import Hero from '@/components/hero'
import TypeOptions from '@/components/typeOptions'
import OcrView from '@/components/ocrView'
import { imageTypes } from '@/lib/constants';
import Uploader from '@/components/uploader';

export default function Home() {
  const [image, setImage] = useState(null);
  const [imageType, setImageType] = useState(imageTypes[0]);
  const [ocrResult, setOcrResult] = useState('')
  const [loading, setLoading] = useState(false)

  const selectChangeHandler = (newImageType) => {
    setImageType(newImageType);
    setImage(null);
  };

  const inputChangeHandler = () => {
    
  };

  return (
    <main className="h-screen w-full px-8 py-8 md:max-w-4xl md:mx-auto">
      <Hero />
      <TypeOptions />
      <Uploader onChange={inputChangeHandler} />
      { image && <OcrView image={image} ocrResult={ocrResult} /> }
    </main>
  );
}
