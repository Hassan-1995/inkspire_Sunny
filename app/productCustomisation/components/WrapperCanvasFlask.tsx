import DrinkwareCanvas from "./DrinkwareCanvas";

const WrapperCanvasFlask = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <DrinkwareCanvas
      imageUrl={imageUrl}
      height={1.5}
      topRadius={0.85}
      bottomRadius={0.89}
      angleFraction={1}
      rotation={[0.1, -0.9, 0]}
    />
  );
};

export default WrapperCanvasFlask;
