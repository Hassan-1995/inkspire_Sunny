import React from "react";
import ProgressBar from "../components/ProgressBar";
import ApparelPage from "../ApparelPage";
import DrinkwarePage from "../DrinkwarePage";
import SinglePage from "../SinglePage";

type ProductCustomisationProps = {
  params: Promise<{ slug: string[] }>;
};

const ProductCustomisation = async (props: ProductCustomisationProps) => {
  const params = await props.params;
  const catalog = params.slug[0];
  const catalogItem = params.slug[1];

  let CustomComponent;
  switch (catalog) {
    case "apparels":
    case "bags":
      CustomComponent = ApparelPage;
      break;
    case "drinkwares":
      CustomComponent = DrinkwarePage;
      break;
    case "home":
    case "others":
      CustomComponent = SinglePage;
      break;
    default:
      const ComingSoon = () => <div>Coming soon...</div>;
      ComingSoon.displayName = "ComingSoon";
      CustomComponent = ComingSoon;
  }

  return (
    <div className="flex flex-col pt-20 lg:p-10 justify-center items-center">
      ProductCustomisation page
      <h1>Catalog: {catalog}</h1>
      <h1>Catalog Item: {catalogItem}</h1>
      <ProgressBar />
      <CustomComponent catalog={catalog} catalogItem={catalogItem} />
    </div>
  );
};

export default ProductCustomisation;
