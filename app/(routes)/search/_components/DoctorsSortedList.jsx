import DoctorCard from "@/app/_components/DoctorCard";
import React from "react";

const DoctorsSortedList = ({ data }) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <DoctorCard
        id={data?.id}
        category={data?.categories?.[0].title}
        name={data?.name}
        experience={data?.experience}
        imgUrl={data?.image?.url}
        address={data?.address}
      />
    </div>
  );
};

export default DoctorsSortedList;
