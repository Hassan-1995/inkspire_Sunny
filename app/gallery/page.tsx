import { LuCamera } from "react-icons/lu";
import FilterButton from "./FilterButton";
import GalleryCard from "./GalleryCard";

interface GalleryPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const GalleryPage = ({ searchParams }: GalleryPageProps) => {
  const activeCategory =
    typeof searchParams.category === "string" ? searchParams.category : "all";
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-purple-50">
      <section className="relative overflow-hidden py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-100 px-4 py-2 text-sm font-medium rounded-full w-max h-max">
                  <LuCamera className="w-4 h-4 mr-2" />
                  <h1>Creative Showcase</h1>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Gallery of{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  InkSpire
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Explore the amazing creativity of our customers, to bring their
                ideas to life with personalized apparel, mugs and more. Discover
                their unique creations and get inspired to design your own.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 md:px-6 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <FilterButton />
        </div>
      </section>
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <GalleryCard filter={activeCategory} />
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
