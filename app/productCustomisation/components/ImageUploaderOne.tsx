"use client";
import { useDispatch } from "react-redux";
import SingleImageUploader from "../../components/SingleImageUploader";
import {
  setPrimaryImage,
  setSecondaryImage,
} from "@/app/store/slices/uploadedImageSlice";

const ImageUploaderOne = () => {
  const dispatch = useDispatch();
  const handleUpload = (url: string) => {
    console.log(url);
    dispatch(setPrimaryImage(url));
    dispatch(setSecondaryImage(null));
  };
  return (
    <div className="w-full aspect-[7/4]">
      <SingleImageUploader
        localStorageKey="uploadedImageFront"
        // onUpload={(url) => dispatch(setPrimaryImage(url))}
        onUpload={(url) => handleUpload(url)}
        label="Front Design"
      />
    </div>
  );
};

export default ImageUploaderOne;
