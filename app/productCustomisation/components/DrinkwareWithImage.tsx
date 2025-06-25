import Image from "next/image";
import WrapperCanvasMug from "./WrapperCanvasMug";

type DrinkwareWithImageProps = {
  productImage: string;
  uploadedImage: string;
};
const DrinkwareWithImage = ({
  productImage,
  uploadedImage,
}: DrinkwareWithImageProps) => {
  return (
    <div className="relative w-full h-full border-2 border-dashed border-gray-400 rounded-md p-4 flex justify-center items-center">
      {productImage && (
        <Image
          src={productImage}
          alt="Product View"
          fill
          className="object-contain"
          priority
        />
      )}
      {uploadedImage && (
        <div className="absolute -top-[2.5%] left-[4%] w-full h-full">
          <WrapperCanvasMug imageUrl={uploadedImage} />
        </div>
      )}
    </div>
  );
};

export default DrinkwareWithImage;
