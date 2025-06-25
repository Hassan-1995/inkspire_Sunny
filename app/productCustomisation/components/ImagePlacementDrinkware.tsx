"use client";
import { setProductPath } from "@/app/store/slices/productSlice";
import { RootState } from "@/app/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorSelector from "./ColorSelector";
import DrinkwareWithImage from "./DrinkwareWithImage";

type ImagePlacementDrinkwareProps = {
  catalogItem: string;
};

const ImagePlacementDrinkware = ({
  catalogItem,
}: ImagePlacementDrinkwareProps) => {
  const dispatch = useDispatch();
  //get all the values from productSlice
  const { productFrontPath } = useSelector((state: RootState) => state.product);
  // get uploadedImages
  const { uploadedImagePrimary } = useSelector(
    (state: RootState) => state.uploadedImage
  );
  // initialised the values (default values)
  useEffect(() => {
    if (!productFrontPath) {
      dispatch(
        setProductPath({
          front: `/${catalogItem}/black_front.png`, // default front value
          back: `/${catalogItem}/black_back.png`, // default back value
        })
      );
    }
  }, []);

  return (
    <>
      <div className="w-full aspect-[7/4]">
        <DrinkwareWithImage
          productImage={productFrontPath!}
          uploadedImage={uploadedImagePrimary}
          drinkware={catalogItem}
        />
      </div>
      <ColorSelector catalogItem={catalogItem} />
    </>
  );
};

export default ImagePlacementDrinkware;
