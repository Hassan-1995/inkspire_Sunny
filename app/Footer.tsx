"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

const Footer = () => {
  const pathName = usePathname();
  const quickLinks = [
    { label: "Shop", href: "/" },
    { label: "Design", href: "/shirts" },
    { label: "Galery", href: "/trousers" },
    { label: "About", href: "/about" },
  ];
  const productLinks = [
    { label: "Basic & Solid Tees", href: "#" },
    { label: "Graphic & Printed Tees", href: "/shop" },
    { label: "Oversized & Drop Shoulder", href: "/productsGallery" },
    { label: "Polo & Collar Tees", href: "/contactUs" },
  ];
  const contactLinks = [
    {
      label: "123 Main Street, Suite 400 Springfield, IL 62704 United States",
      icon: LuMapPin,
    },
    { label: "+code 1234567890", icon: LuPhone },
    { label: "contact@example.com", icon: LuMail },
  ];
  return (
    <footer
      className={`border-t bg-slate-50 flex justify-center ${
        pathName === "/api/auth/localAuth" && "hidden"
      }`}
    >
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/mascots/mascot_thumbsUp.png"
                alt="Inkspire Mascot"
                width={50}
                height={50}
                className="object-contain rounded-full"
              />
              <span className="text-xl font-semibold bg-gradient-to-r from-indigo-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                InkSpire
              </span>
            </div>
            <p className="text-sm text-zinc-500">
              One of the premier shirt manufacturer since 2015. Quality,
              craftsmanship and pride in every stitch.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 font-medium hover:text-zinc-800 hover:underline underline-offset-4 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 font-medium hover:text-zinc-800 hover:underline underline-offset-4 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              {contactLinks.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex gap-2 text-sm space-x-2 space-y-4 text-zinc-500 font-medium"
                >
                  <Icon className="w-5 h-5 text-zinc-500" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} InkSpire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
