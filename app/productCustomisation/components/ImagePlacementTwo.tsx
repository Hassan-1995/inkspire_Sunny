"use client";
import { setProductPath } from "@/app/store/slices/productSlice";
import { RootState } from "@/app/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BackSize from "./BackSize";
import ColorSelector from "./ColorSelector";
import FrontSize from "./FrontSize";
import ProductWithImage from "./ProductWithImage";

type SizeOptions = "S" | "M" | "L";

type SizeClassMap = {
  S: string;
  M: string;
  L: string;
};

type SizeMapProps = {
  default: SizeClassMap;
  front: SizeClassMap;
  back: SizeClassMap;
  "Full-Sleeves_front"?: SizeClassMap;
  Polos_front?: SizeClassMap;
  Polos_back?: SizeClassMap;
  [key: string]: SizeClassMap | undefined; // Allow additional catalog-specific keys
};

const getImageSizeClass = (
  catalogItem: string,
  side: "front" | "back",
  size: SizeOptions
): string => {
  const sizeMap: SizeMapProps = {
    default: {
      S: "w-20 h-20",
      M: "w-24 h-24",
      L: "w-28 h-28",
    },
    front: {
      S: "w-20 h-20",
      M: "w-24 h-24",
      L: "w-28 h-28",
    },
    back: {
      S: "w-24 h-24",
      M: "w-32 h-32",
      L: "w-40 h-40",
    },
    "Full-Sleeves_front": {
      S: "w-28 h-28",
      M: "w-36 h-36",
      L: "w-48 h-48",
    },
    Polos_front: {
      S: "w-14 h-14",
      M: "w-20 h-20",
      L: "w-24 h-24",
    },
    Polos_back: {
      S: "w-20 h-20",
      M: "w-28 h-28",
      L: "w-36 h-36",
    },
  };

  const key = `${catalogItem}_${side}`;
  if (sizeMap[key]?.[size]) return sizeMap[key]![size];

  return sizeMap[side]?.[size] || sizeMap.default[size];
};

const getImagePositionClass = (catalogItem: string, side: "front" | "back") => {
  const isChest = ["Polos", "Varsity-Jackets"].includes(catalogItem);
  if (side === "front") {
    return isChest
      ? "top-[35%] left-[60%] -translate-x-[60%] -translate-y-[35%]"
      : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
  }
  const isNoChest = ["Polos", "Varsity-Jackets", "T-Shirts"].includes(
    catalogItem
  );
  return isNoChest
    ? "top-[35%] left-[50%] -translate-x-[50%] -translate-y-[35%]"
    : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
};

type ImagePlacementTwoProps = {
  catalogItem: string;
};

const ImagePlacementTwo = ({ catalogItem }: ImagePlacementTwoProps) => {
  const dispatch = useDispatch();
  //get all the values from productSlice
  const {
    productFrontPath,
    productBackPath,
    uploadedImageSizePrimary,
    uploadedImageSizeSecondary,
  } = useSelector((state: RootState) => state.product);
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full aspect-[7/4] md:aspect-[7/8]">
          <ProductWithImage
            productImage={productFrontPath!}
            uploadedImage={uploadedImagePrimary}
            uploadedImagePosition={getImagePositionClass(catalogItem, "front")}
            sizeClass={getImageSizeClass(
              catalogItem,
              "front",
              uploadedImageSizePrimary as SizeOptions
            )}
          />
        </div>

        <div className="w-full aspect-[7/4] md:aspect-[7/8]">
          <ProductWithImage
            productImage={productBackPath!}
            uploadedImage={uploadedImagePrimary}
            uploadedImagePosition={getImagePositionClass(catalogItem, "back")}
            sizeClass={getImageSizeClass(
              catalogItem,
              "back",
              uploadedImageSizeSecondary as SizeOptions
            )}
          />
        </div>
      </div>
      <ColorSelector catalogItem={catalogItem} />
      <FrontSize />
      <BackSize />
    </>
  );
};

export default ImagePlacementTwo;
