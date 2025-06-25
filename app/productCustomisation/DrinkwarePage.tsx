"use client";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ImageUploaderOne from "./components/ImageUploaderOne";
import ImagePlacementDrinkware from "./components/ImagePlacementDrinkware";

type DrinkwarePageProps = {
  catalog: string;
  catalogItem: string;
};

const DrinkwarePage = ({ catalog, catalogItem }: DrinkwarePageProps) => {
  const progress = useSelector(
    (state: RootState) => state.progressBar.progressBarValue
  );
  return (
    <div className="w-full md:4/5 lg:w-2/3 my-10">
      <h1>{catalog}</h1>
      <h1>{catalogItem}</h1>
      {progress === 1 && <ImageUploaderOne />}
      {progress === 2 && <ImagePlacementDrinkware catalogItem={catalogItem} />}
    </div>
  );
};

export default DrinkwarePage;
