import Image from "next/image";

type ProductWithImageProps = {
  productImage: string;
  uploadedImage: string;
  uploadedImagePosition?: string;
  sizeClass: string;
};
const ProductWithImage = ({
  productImage,
  uploadedImage,
  uploadedImagePosition,
  sizeClass,
}: ProductWithImageProps) => {
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
        <div
          className={`absolute border-2 border-dashed ${sizeClass} ${
            uploadedImagePosition || ""
          }`}
          style={{
            opacity: 0.9,
            filter: "blur(0px)",
          }}
        >
          <Image
            src={uploadedImage}
            alt="Overlay"
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ProductWithImage;
