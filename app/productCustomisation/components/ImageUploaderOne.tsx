"use client";
import { useDispatch } from "react-redux";
import SingleImageUploader from "../../components/SingleImageUploader";
import { setPrimaryImage } from "@/app/store/slices/uploadedImageSlice";

const ImageUploaderOne = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full aspect-[7/4]">
      <SingleImageUploader
        localStorageKey="uploadedImageFront"
        onUpload={(url) => dispatch(setPrimaryImage(url))}
        label="Front Design"
      />
    </div>
  );
};

export default ImageUploaderOne;
