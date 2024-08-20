"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
// import { getAllCategories } from '../GlobalAPI'
import { gql, request } from "graphql-request";
import { Skeleton } from "@/components/ui/skeleton";
// import { categories } from '../_db/categories'

const CategoryList = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = async () => {
    const query = gql`
      query MyQuery {
        categories {
          id
          slug
          title
          icon {
            url
          }
        }
      }
    `;
    const resp = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clziauty900kl07urilz5i7w2/master",
      query
    );
    setCategories(resp?.categories);
  };
  return (
    <div className="flex flex-col pt-5 md:pt-20 items-center gap-8">
      <div className="flex flex-col gap-2 md:gap-3 items-center">
        <h2 className="text-2xl md:text-4xl text-center font-bold">
          Search <span className="text-primary">Doctors</span>
        </h2>
        <h2 className="text-md md:text-lg text-gray-500 text-center w-full md:w-full">
          Search Your Doctor and Book Appointment in one click
        </h2>
        <div className="flex gap-2 justify-center mt-2">
          <Input
            placeholder="Search..."
            className="w-[200px] md:w-[300px] text-gray-500 focus-visible:outline-none"
          />
          <Button className="flex items-center">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
        {categories !== null
          ? categories
              ?.slice(0, 6)
              ?.map((curr, index) => (
                <CategoryCard
                  key={index}
                  image={curr?.icon?.url}
                  title={curr?.title}
                  slug={curr?.slug}
                />
              ))
          : Array.from({ length: 6 }).map((curr, index) => {
              return (
                <Skeleton
                  key={index}
                  className="h-[100px] w-40 rounded-xl gap-4 "
                />
              );
            })}
      </div>
    </div>
  );
};

export default CategoryList;
