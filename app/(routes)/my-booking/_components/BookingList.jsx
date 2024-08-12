"use client";
import React, { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import { gql, request } from "graphql-request";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { Skeleton } from "@/components/ui/skeleton";

const BookingList = ({ tabValue }) => {
  console.log(tabValue);
  const { user } = useUser();
  const [bookings, setBookings] = useState(null);
  const [bookingDeleted, setBookingDeleted] = useState(false); //globally declare state

  //it will call when page is render or state will change
  useEffect(() => {
    user && getBookings(user?.id);
    console.log("hello");
  }, [user]); //initially user is undefined . after some time user will become a object
  useEffect(() => {
    console.log("hello");
    getBookings(user?.id);
  }, [bookingDeleted]); //initially user is undefined . after some time user will become a object
  const getBookings = async (userId) => {
    const query =
      gql`
query MyQuery {
  bookings(where: {userId: "` +
      userId +
      `"}) {
    appointmentDate
    appointmentTime
    id
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
    console.log("38 ", resp?.bookings);
    const totalBookings = resp?.bookings;
    if (tabValue === "upcoming") {
      setBookings(
        totalBookings?.filter(
          (curr) => moment(curr?.appointmentDate) >= new Date()
        )
      );
    } else {
      setBookings(
        totalBookings?.filter(
          (booking) => moment(booking?.appointmentDate) < new Date()
        )
      );
    }
  };
  return (
    <div className=" flex flex-col gap-5 w-[320px] md:w-full">
      {bookings == null ? (
        Array.from({ length: 8 }).map((curr, index) => {
          return <Skeleton className="h-[180px] w-[1300px] rounded-xl" />;
        })
      ) : bookings.length == 0 ? (
        <h1 className="text-[16px] text-gray-600 mt-2">No bookings available!</h1>
      ) : (
        bookings?.map((curr, index) => {
          return (
            <BookingCard
              key={index}
              doctors={curr?.doctors}
              appointment_date={curr?.appointmentDate}
              appointment_time={curr?.appointmentTime}
              id={curr?.id}
              bookingDeleted={bookingDeleted}
              setBookingDeleted={setBookingDeleted}
            />
          );
        })
      )}
    </div>
  );
};

export default BookingList;
