import React from "react";
import {
  Upload,
  Eye,
  ShoppingCart,
  ArrowRight,
  Palette,
  FileText,
} from "lucide-react";

const MainSection = () => {
  return (
    <>
      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to turn your design into a product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                icon: Upload,
                title: "Upload Design",
                description:
                  "Upload your artwork to create something new and personal",
              },
              {
                step: "2",
                icon: Eye,
                title: "Preview on Product",
                description:
                  "See exactly how your design will look on your chosen product",
              },
              {
                step: "3",
                icon: ShoppingCart,
                title: "Place Order",
                description:
                  "Complete your order and we'll print and ship your custom product",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative p-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-700 font-bold text-sm">
                      {step.step}
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 max-w-xs mx-auto">
                  {step.description}
                </p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-purple-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tips & Resources Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Design Tips & Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert advice and free resources to make your designs stand out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Palette className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Color & Typography Tips
                  </h3>
                  <ul className="space-y-1 text-gray-600 text-sm md:text-base">
                    <li>• Use high contrast colors for better readability</li>
                    <li>• Choose fonts that are legible at small sizes</li>
                    <li>• Limit your color palette to 3-4 colors max</li>
                    <li>• Test your design on different backgrounds</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Design Guidlines
                  </h3>
                  <ul className="space-y-1 text-gray-600 text-sm md:text-base">
                    <li>
                      • PNG or SVG files work best for quality and transparency
                    </li>
                    <li>
                      • Ensure your design colors contrast well with the product
                    </li>
                    <li>
                      • Try to keep file sizes under 25 MB for faster uploads
                      and previews
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
