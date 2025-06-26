"use client";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ImagePlacementTwo from "./components/ImagePlacementTwo";
import ImageUploaderTwo from "./components/ImageUploaderTwo";

type ApparelPageProps = {
  catalog: string;
  catalogItem: string;
};

const ApparelPage = ({ catalog, catalogItem }: ApparelPageProps) => {
  const progress = useSelector(
    (state: RootState) => state.progressBar.progressBarValue
  );
  return (
    <div className="w-full md:4/5 lg:w-2/3 my-10">
      <h1>{catalog}</h1>
      <h1>{catalogItem}</h1>
      {progress === 1 && <ImageUploaderTwo />}
      {progress === 2 && <ImagePlacementTwo catalogItem={catalogItem} />}
    </div>
  );
};

export default ApparelPage;
