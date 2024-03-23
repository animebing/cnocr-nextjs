export default ({
  image,
  ocrResult,
}) => {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 md:gap-8">
      <div class='flex-col'>
        <h2 className="mb-2">
          Image
        </h2>
        <div className="w-full h-96 border-2 rounded-sm p-1">
          <img className="object-contain w-full h-full" src={image} alt="uploaded image" />
        </div>
      </div>
      <div className="flex-col mt-4 md:mt-0">
        <h2 className="mb-2">
          OCR Result
        </h2>
        <div className="w-full h-96 border-2 rounded-sm p-1">
          { ocrResult === null ? (
            <div className="w-full h-full flex items-center justify-center">
              <div>
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-gray-600 mx-auto" ></div>
                <p>{"Processing..."}</p>
              </div>
            </div>
          ) : (
            <p>
              { ocrResult }
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
