export default () => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 md:gap-8">
      <div class='flex-col'>
        <h2 className="mb-2">
          Image
        </h2>
        <div className="w-full h-56 border-2 rounded-sm">
          image
        </div>
      </div>
      <div className="flex-col mt-4 md:mt-0">
        <h2 className="mb-2">
          OCR Result
        </h2>
        <div className="w-full h-56 border-2 rounded-sm">
          ocr result
        </div>
      </div>
    </div>
  );
}
