import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 max-h-screen mt-8 gap-6">
      <div className="flex flex-col w-full md:pt-20 gap-4 m-w-[90%] md:pl-10 order-2 md:order-1">
        <h1 className="text-2xl md:text-4xl font-bold text-wrap">
          Find & Book <span className="text-primary">Appointment</span> with
          your Fav <span className="text-primary">Doctors</span>
        </h1>
        <p className="text-gray-500 text-[13px] md:text-sm">
          Easily browse through a wide selection of trusted doctors, view their
          profiles, and book appointments at times that suit you. Whether you
          need a routine check-up or a specialist consultation, our
          user-friendly interface ensures a hassle-free experience.{" "}
        </p>
        {/* {w-fit property is used to fit the content in the box} */}
        <Button className="w-fit mt-2 md:mt-4">
          <Link href={"/search/dentist"}>Explore Now</Link>
        </Button>
      </div>
      <Image
        src="/doctors.jpg"
        alt="doctors"
        width={2000}
        height={200}
        className="order-1 h-[240px] md:order-2 w-full md:w-[90%] rounded-3xl shadow-sm md:h-[450px] "
      />
    </div>
  );
};

export default Hero;
