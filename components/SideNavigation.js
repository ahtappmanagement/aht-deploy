import { site, subcategory } from "@/config/api";
import Link from "next/link";

const SideNavigation = () => {
  const subArr = [
    ["Dried Apple", 9],
    ["Dried Apricots", 12],
    ["Dried Banana", 16],
    ["Dried Barberries", 19],
    ["Dried Bell Pepper", 4],
    ["Dried Broccoli", 20],
    ["Dried Dates", 13],
    ["Dried Figs", 15],
    ["Dried Green Beans", 7],
    ["Dried Green Onions", 23],
    ["Dried Kiwi Fruit", 10],
    ["Dried Mushrooms", 2],
    ["Dried Okra", 5],
    ["Dried Onion", 22],
    ["Dried Orange", 8],
    ["Dried Peach", 11],
    ["Dried Pumpkin", 21],
    ["Dried Raisins", 14],
    ["Dried Strawberry", 17],
    ["Dried Sultana", 24],
    ["Dried Tomato", 6],
    ["Dried Zucchini", 3],
    ["Pistachio", 1],
    ["Saffron", 18],
  ];
  return (
    <div
      id="shortNavigation"
      className="shadow-sm text-[10px] md:text-base lg:w-[230px] sticky left-0 top-0 h-fit p-2 md:p-6 mx-auto"
    >
      <div
        className="transition text-xs md:text-small ease-in-out duration-300 text-[#8A0019] hover:text-gray-700"
      >
        Products (in alphabetical order):
      </div>
      {subArr?.map((item, i = 0) => (
        <div
          key={++i}
          className="transition text-xs md:text-small ease-in-out duration-300 text-[#8A0019] hover:text-gray-700"
        >
          <Link href={`${site}products/${subcategory}/${item[1]}`}>
            {item[0]}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SideNavigation;
