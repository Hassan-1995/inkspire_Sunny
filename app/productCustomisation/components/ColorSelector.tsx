"use client";
import { setColor, setProductPath } from "@/app/store/slices/productSlice";
import { RootState } from "@/app/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type ColorSelectorProps = {
  catalogItem: string;
};

const colorNames = [
  { name: "Black", style: "bg-black" },
  { name: "Green", style: "bg-green-600" },
  { name: "Blue", style: "bg-blue-950" },
  { name: "Red", style: "bg-red-900" },
];
const ColorSelector = ({ catalogItem }: ColorSelectorProps) => {
  const dispatch = useDispatch();
  const selectedColor = useSelector(
    (state: RootState) => state.product.productColor
  );

  useEffect(() => {
    handleInitialValues();
  }, []);

  const handleInitialValues = () => {
    localStorage.setItem("FrontView", `/${catalogItem}/black_front.png`);
    localStorage.setItem("BackView", `/${catalogItem}/black_back.png`);
    dispatch(
      setProductPath({
        front: `/${catalogItem}/black_front.png`,
        back: `/${catalogItem}/black_back.png`,
      })
    );
  };

  const handleColor = (color: string) => {
    dispatch(setColor(color));
    const newFront = `/${catalogItem}/${color.toLowerCase()}_front.png`;
    const newBack = `/${catalogItem}/${color.toLowerCase()}_back.png`;

    localStorage.setItem("FrontView", newFront);
    localStorage.setItem("BackView", newBack);

    dispatch(
      setProductPath({
        front: newFront,
        back: newBack,
      })
    );
  };

  return (
    <>
      <p className="text-gray-500 mb-1 text-xs">COLOR:</p>
      <div className="flex gap-2">
        {colorNames.map((colorName) => (
          <button
            key={colorName.name}
            onClick={() => handleColor(colorName.name)}
            className={`cursor-pointer hover:border-purple-500 transition-colors border-2 w-8 h-8 rounded-full flex items-center justify-center ${
              colorName.name === selectedColor && "border-purple-600"
            }`}
          >
            <div className={`${colorName.style} w-6 h-6 rounded-full`} />
          </button>
        ))}
      </div>
    </>
  );
};

export default ColorSelector;
