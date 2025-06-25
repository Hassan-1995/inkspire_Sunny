"use client";
import { useDispatch } from "react-redux";
import SingleImageUploader from "../../components/SingleImageUploader";
import { setPrimaryImage } from "@/app/store/slices/uploadedImageSlice";

const ImageUploaderTwo = () => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <SingleImageUploader
        localStorageKey="uploadedImageFront"
        onUpload={(url) => dispatch(setPrimaryImage(url))}
        label="Front Design"
      />
      <SingleImageUploader
        localStorageKey="uploadedImageBack"
        onUpload={(url) => console.log("second: ", url)}
        // onUpload={(url) => dispatch(setSecondaryImage(url))}
        label="Back Design"
      />
    </div>
  );
};

export default ImageUploaderTwo;
