import Header from "../components/Header";
import CustomProductSection from "./CustomProductSection";
import ProductCard from "./ProductCard";

const CatalogPage = () => {
  //   // need static data for showing catalog
  const apparels = [
    {
      id: 1,
      type: "apparels",
      title: "T-Shirts",
      productType: "Round Neck T-Shirt",
      image: "/apparels/t_shirts.jpg",
    },
    {
      id: 2,
      type: "apparels",
      title: "Polos",
      productType: "Polo Shirt",
      image: "/apparels/polo.jpg",
    },
    {
      id: 3,
      type: "apparels",
      title: "Full-Sleeves",
      productType: "Full Sleeve T-Shirt",
      image: "/apparels/fullSleeve.jpg",
    },
    {
      id: 5,
      type: "apparels",
      title: "Varsity-Jackets",
      productType: "Varsity Jacket",
      image: "/apparels/varsity.jpg",
    },
    {
      id: 6,
      type: "apparels",
      title: "Hoodies",
      productType: "Pullover Hoodie",
      image: "/apparels/hoodie.jpg",
    },
  ];
  const drinkwares = [
    {
      id: 1,
      type: "drinkwares",
      title: "Bottles",
      productType: "Water Bottle",
      image: "/drinkwares/Bottles.png",
    },
    {
      id: 2,
      type: "drinkwares",
      title: "Mugs",
      productType: "Ceramic Mug",
      image: "/drinkwares/Mugs.png",
    },
    {
      id: 3,
      type: "drinkwares",
      title: "Jars",
      productType: "Storage Jar",
      image: "/drinkwares/Jars.png",
    },
    {
      id: 4,
      type: "drinkwares",
      title: "Flasks",
      productType: "Insulated Flask",
      image: "/drinkwares/Flasks.png",
    },
  ];
  const bags = [
    {
      id: 1,
      type: "bags",
      title: "Tote-Bags",
      productType: "Tote Bag",
      image: "/bags/tote-bag.jpg",
    },
    {
      id: 2,
      type: "bags",
      title: "Grocery-Bags",
      productType: "Grocery Bag",
      image: "/bags/grocery-bag.png",
    },
    {
      id: 3,
      type: "bags",
      title: "Laptop-Sleeves",
      productType: "Laptop Sleeve",
      image: "/bags/laptop-sleeve.png",
    },
    {
      id: 4,
      type: "bags",
      title: "Pouches",
      productType: "Zipper Pouch",
      image: "/bags/pouch.png",
    },
  ];
  const homes = [
    {
      id: 1,
      type: "home",
      title: "Blankets",
      productType: "Soft Blanket",
      image: "/homes/blankets.png",
    },
    {
      id: 2,
      type: "home",
      title: "Towels",
      productType: "Bath Towel",
      image: "/homes/towels.png",
    },
    {
      id: 3,
      type: "home",
      title: "Curtains",
      productType: "Window Curtain",
      image: "/homes/curtains.png",
    },
    {
      id: 4,
      type: "home",
      title: "Wall-Clocks",
      productType: "Wall Clock",
      image: "/homes/wall-clocks.png",
    },
    {
      id: 5,
      type: "home",
      title: "Aprons",
      productType: "Kitchen Apron",
      image: "/homes/aprons.png",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-emerald-50">
      <div className="max-w-6xl mx-auto py-6 px-4 md:px-8 lg:px-12">
        <Header title="Explore Our Collection" />

        <Section title="Apparels" items={apparels} />
        <Section title="Drinkwares" items={drinkwares} />
        <Section title="Bags & Accessories" items={bags} />
        <Section title="Home & Living" items={homes} />

        <CustomProductSection />
      </div>
    </div>
  );
};

type SectionProps = {
  title: string;
  items: {
    id: number;
    type: string;
    title: string;
    productType: string;
    image: string;
  }[];
};

const Section = ({ title, items }: SectionProps) => (
  <section className="mb-10">
    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-pink-800 pb-1 mb-4">
      {title}
    </h2>
    <ul className="flex justify-around gap-4 overflow-x-auto whitespace-nowrap no-scrollbar">
      {items.map((item) => (
        <li key={item.id} className="snap-start">
          <ProductCard items={item} />
        </li>
      ))}
    </ul>
  </section>
);

export default CatalogPage;
