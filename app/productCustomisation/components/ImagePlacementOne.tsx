"use client";
import { setProductPath } from "@/app/store/slices/productSlice";
import { RootState } from "@/app/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Blankets_front?: SizeClassMap;
  [key: string]: SizeClassMap | undefined; // Allow additional catalog-specific keys
};
const sharedFrontStyle01: SizeClassMap = {
  S: "w-[10%] h-[35%]",
  M: "w-[15%] h-[50%]",
  L: "w-[20%] h-[70%]",
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
      S: "w-[20%] h-[45%]",
      M: "w-[25%] h-[60%]",
      L: "w-[30%] h-[70%]",
    },
    Blankets_front: {
      S: "w-[20%] h-[45%]",
      M: "w-[25%] h-[60%]",
      L: "w-[30%] h-[70%]",
    },
    Aprons_front: {
      S: "w-[20%] h-[40%]",
      M: "w-[25%] h-[50%]",
      L: "w-[30%] h-[60%]",
    },
    Towels_front: sharedFrontStyle01,
    Curtains_front: sharedFrontStyle01,
  };

  const key = `${catalogItem}_${side}`;
  if (sizeMap[key]?.[size]) return sizeMap[key]![size];

  return sizeMap[side]?.[size] || sizeMap.default[size];
};

const getImagePositionClass = (catalogItem: string, side: "front" | "back") => {
  const chestItems = ["Polos", "Varsity-Jackets"];
  const noChestItems = ["T-Shirts", "Full-Sleeves", "Hoodies"];
  const bagItems = ["Tote-Bags", "Grocery-Bags"];

  const isChest = chestItems.includes(catalogItem);
  const isNoChest = noChestItems.includes(catalogItem);
  const isBag = bagItems.includes(catalogItem);

  // Bag logic (applies to both sides)
  if (isBag) {
    return "top-[64%] left-1/2 -translate-x-1/2 -translate-y-1/2";
  }

  // Chest logic on front
  if (isChest && side === "front") {
    return "top-[35%] left-[60%] -translate-x-[60%] -translate-y-[35%]";
  }

  // No-chest items on front
  if (isNoChest && side === "front") {
    return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
  }

  // All back-side logic for noChest or chest items
  if (side === "back" && (isNoChest || isChest)) {
    return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
  }

  // Fallback (for unknown items)
  return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
};

type ImagePlacementOneProps = {
  catalogItem: string;
};

const ImagePlacementOne = ({ catalogItem }: ImagePlacementOneProps) => {
  const dispatch = useDispatch();
  //get all the values from productSlice
  const { productFrontPath, uploadedImageSizePrimary } = useSelector(
    (state: RootState) => state.product
  );
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
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
      <h1>Catalog item{catalogItem}</h1>
      <div className="w-full aspect-[7/4]">
        <ProductWithImage
          productImage={productFrontPath!}
          uploadedImage={uploadedImagePrimary}
          uploadedImagePosition={getImagePositionClass(catalogItem, "front")}
          sizeClass={getImageSizeClass(
            catalogItem,
            "front",
            uploadedImageSizePrimary as SizeOptions
          )}
          overlayUploadedOnProduct={
            catalogItem === "Wall-Clocks" ? false : true
          }
        />
      </div>
      {/* </div> */}
      <ColorSelector catalogItem={catalogItem} />
      <FrontSize />
    </>
  );
};

export default ImagePlacementOne;
