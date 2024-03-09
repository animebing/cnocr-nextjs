import Select from "react-select";
import { imageTypes } from "@/lib/constants";

export default ({
  imageType,
  onChange,
}) => {
  return (
    <div className="flex-col mt-6">
      <h2 className="mb-2">
        Image Type
      </h2>
      <Select
        isSearchable={false}
        value={imageType}
        onChange={onChange}
        options={imageTypes}
        className="text-base"
      />
    </div>
  );
}
