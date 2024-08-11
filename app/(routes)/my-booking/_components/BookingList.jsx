"use client";
import React, { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import { gql, request } from "graphql-request";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

const BookingList = ({tabValue}) => {
    console.log(tabValue)
  const { user } = useUser();
  const [bookings, setBookings] = useState(null);
  useEffect(() => {
    user && getBookings(user?.id);
  }, [user]); //initially user is undefined . after some time user will become a object
  const getBookings = async (userId) => {
    const query =
      gql`
query MyQuery {
  bookings(where: {userId: "` +
      userId +
      `"}) {
    appointmentDate
    appointmentTime
    doctors {
      address
      image {
        url
      }
      name
    }
  }
}
        `;
    const resp = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clziauty900kl07urilz5i7w2/master",
      query
    );
    console.log("38 ",resp?.bookings);
    setBookings(resp?.bookings);
  };
  return (
    <div className=" flex flex-col gap-5 w-[320px] md:w-full">
      {bookings?.map((curr, index) => {
        return ((tabValue==="upcoming" && moment(curr?.appointmentDate)>new Date()) || (tabValue==="expired" && moment(curr?.appointmentDate)<new Date())) && (
          <BookingCard
            key={index}
            doctors={curr?.doctors}
            appointment_date={curr?.appointmentDate}
            appointment_time={curr?.appointmentTime}
          />
        );
      })}
    </div>
  );
};

export default BookingList;
