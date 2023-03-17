import { site, subcategory } from "@/config/api";
import Link from "next/link";

const SideNavigation = () => {
  const subArr = [
    ["Dates", 13],
    ["Dried Apple", 9],
    ["Dried Apricots", 12],
    ["Dried Banana", 16],
    ["Dried Barberries", 19],
    ["Dried Bell Pepper", 4],
    ["Dried Broccoli", 20],
    ["Dried Figs", 15],
    ["Dried Green Beans", 7],
    ["Dried Kiwi Fruit", 10],
    ["Dried Mushrooms", 2],
    ["Dried Okra", 5],
    ["Dried Orange", 8],
    ["Dried Peach", 11],
    ["Dried Pumpkin", 21],
    ["Dried Strawberry", 17],
    ["Dried Tomato", 6],
    ["Dried Zucchini", 3],
    ["Pistachio", 1],
    ["Raisins", 14],
    ["Saffron", 18],
    ["Sultana", 24],
  ];

  // SHOULD BE ADDED AFTER ADDING THE PRODUCTS  ["Dried Onion", 22],   ["Dried Green Onions", 23],

  return (
    <div
      id="shortNavigation"
      className="shadow-sm text-[10px] md:text-base lg:w-[230px] sticky left-0 top-0 h-fit p-2 md:p-6 mx-auto"
    >
      <div className="transition text-xs md:text-small ease-in-out duration-300 font-bold text-[#8A0019] hover:text-gray-700">
        All AHT products:
        <br />
        <span className="font-medium">(alphabetical)</span>
      </div>
      {subArr?.map((item, i = 0) => (
        <div
          key={++i}
          className="transition text-xs md:text-small ease-in-out duration-300 text-[#8A0019] hover:text-gray-700"
        >
          <Link href={`/products/${subcategory}/${item[1]}`}>{item[0]}</Link>
        </div>
      ))}
    </div>
  );
};

export default SideNavigation;
