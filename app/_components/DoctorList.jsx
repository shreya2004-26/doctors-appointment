"use client";
import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import { gql, request } from "graphql-request";
import { Skeleton } from "@/components/ui/skeleton";
const DoctorList = () => {
  const [doctors, setDoctors] = useState();
  useEffect(() => {
    getDoctorsList();
  }, []);

  const getDoctorsList = async () => {
    //create a graphql query
    const query = gql`
      query MyQuery {
        doctors {
          id
          about
          address
          closingTime
          name
          openingTime
          image {
            url
          }
          categories {
            title
          }
        }
      }
    `;
    //then request data from hygraph by using backend url and query
    const resp = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clziauty900kl07urilz5i7w2/master",
      query
    );
    setDoctors(resp?.doctors);
  };

  return (
    <div className="flex flex-col gap-4 mt-10">
      <h2 className="font-bold text-xl">Popular Doctors</h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
        {doctors == null
          ? Array.from({ length: 8 }).map((curr, index) => {
              return (
                <Skeleton className="h-[200px] w-full rounded-xl" key={index} />
              );
            })
          : doctors?.map((curr, index) => (
              <DoctorCard
                key={index}
                id={curr?.id}
                category={curr?.categories?.[0].title}
                name={curr?.name}
                experience={curr?.experience}
                imgUrl={curr?.image?.url}
                address={curr?.address}
              />
            ))}
      </div>
    </div>
  );
};

export default DoctorList;
