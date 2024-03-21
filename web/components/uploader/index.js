import { useDropzone } from "react-dropzone";

export default ({
  onChange,
}) => {
  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((acceptedFile) => {
      onChange({
        source: acceptedFile,
        image: URL.createObjectURL(acceptedFile),
      });
    });
  };
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: {
      'image/jpeg': [ '.jpg', '.jpeg' ],
      'image/png': [],
      'image/webp': [],
    },
    onDrop,
    multiple: false,
  });

  return (
    <div className='flex items-center justify-center mt-2 border-2 rounded cursor-pointer p-2' {...getRootProps()} >
      <input {...getInputProps()} />
      <img src="/image-placeholder.svg" alt="placeholder" className='h-12 rounded-lg'/>
      <div className='text-xs text-center ml-2'>
        Upload an image <br />
        (.jpg, .png, .webp)
      </div>
    </div>
  );
}
