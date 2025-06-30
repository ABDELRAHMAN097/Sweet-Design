import React from "react";
import { HeaderSection } from "./HeaderSection";
import { CategoryCard } from "./CategoryCard";
import { BsArrowRight } from "react-icons/bs";
export const Categories = () => {
  const categories = [
    {
      img: "/images/Frame 39.png",
      title: "Natural Plants",
    },
    {
      img: "/images/Frame 40.png",
      title: "Plant Accessories",
    },
    {
      img: "/images/Frame 41.png",
      title: "Artificial Plants",
    },
  ];
  return (
    <div className="">
      <HeaderSection
        header="Categories"
        subHeader="Find what you are looking for"
      />
      <div className="mt-15 py-5 bg-tertiary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
        {/* card */}
        {categories.map((category, index) => {
          const isFirst = index === 0;
          const isLast = index === categories.length - 1;

          return (
            <div
              key={index}
              className={`${isFirst || isLast ? "mt-0 md:-mt-16" : ""}`}
            >
              <CategoryCard img={category.img} title={category.title} />
            </div>
          );
        })}

        {/*  */}
        <div className="w-full flex flex-col justify-center items-center col-span-full gap-4 px-4 py-6 text-center">
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="bg-white text-black rounded px-4 py-2 flex justify-center items-center gap-2 shadow hover:bg-gray-100 transition">
            Explore
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
