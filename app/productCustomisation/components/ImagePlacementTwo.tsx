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
  "T-Shirts_front"?: SizeClassMap;
  Polos_front?: SizeClassMap;
  "Full-Sleeves_front"?: SizeClassMap;
  "Varsity-Jackets_front"?: SizeClassMap;
  Hoodies_front?: SizeClassMap;
  Hoodies_back?: SizeClassMap;

  [key: string]: SizeClassMap | undefined; // Allow additional catalog-specific keys
};

const sharedFrontStyle01: SizeClassMap = {
  S: "w-[25%] h-[25%]",
  M: "w-[30%] h-[30%]",
  L: "w-[40%] h-[40%]",
};
const sharedFrontStyle02: SizeClassMap = {
  S: "w-[8%] h-[8%]",
  M: "w-[10%] h-[10%]",
  L: "w-[12%] h-[12%]",
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
      S: "w-[25%] h-[25%]",
      M: "w-[30%] h-[30%]",
      L: "w-[40%] h-[40%]",
    },
    back: {
      S: "w-[25%] h-[25%]",
      M: "w-[30%] h-[30%]",
      L: "w-[40%] h-[40%]",
    },
    "Full-Sleeves_front": sharedFrontStyle01,
    "T-Shirts_front": sharedFrontStyle01,
    "Varsity-Jackets_front": sharedFrontStyle02,
    Polos_front: sharedFrontStyle02,
    Hoodies_front: {
      S: "w-[25%] h-[25%]",
      M: "w-[30%] h-[30%]",
      L: "w-[35%] h-[35%]",
    },
    Hoodies_back: {
      S: "w-[25%] h-[25%]",
      M: "w-[30%] h-[30%]",
      L: "w-[35%] h-[35%]",
    },
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
        <div className="w-full aspect-[7/8] md:aspect-[7/8]">
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

        <div className="w-full aspect-[7/8] md:aspect-[7/8]">
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
