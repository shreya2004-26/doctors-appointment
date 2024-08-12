"use client";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { CalendarRange, Clock } from "lucide-react";
import { gql, request } from "graphql-request";
import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import Link from "next/link";

const BookAppointmentDialog = ({setOpen}) => {
  const [date, setDate] = useState(new Date());
  // console.log(
  //   date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
  // );
  const [note, setNote] = useState("");
  const [timeSlot, setSelectedTimeSlot] = useState("");
  const { user } = useUser();
 
  const doctorId = usePathname().split("/")[2];
;

  // useEffect(() => {
  //   // setTime();

  //   createBooking();
  // }, []);
  const createBooking = async () => {
    // console.log(date, note, new Date(date).toDateString())
    console.log(timeSlot,date)
    const query =
      gql`
                mutation MyMutation {
          createBooking(
            data: {userId: "` +
      user?.id +
      `",
             appointmentTime: "` +
      timeSlot +
      `", 
             appointmentDate: "` +
      date +
      `", 
             note: "` +
      note +
      `",
              doctors: {connect: {id: "` +
      doctorId +
      `"}}}
          ) {
            id
    appointmentDate
    appointmentTime
    note
    doctors {
      name
      image {
        url
      }
    }
          }
      publishManyBookings(to: PUBLISHED) {
    count
  }
        }`;
    const resp = await request(
      "https://ap-south-1.cdn.hygraph.com/content/clziauty900kl07urilz5i7w2/master",
      query
    );
    setNote("");
    setSelectedTimeSlot("")
    setDate(new Date());
    setOpen(false);//to close the dialog
    console.log("Booking created:", resp?.createBooking);
    toast("Appointment Booked Successfully! ")
    try {
      //create post data
      const postData = {
        patientName: user?.fullName,
        appointmentDate: resp?.createBooking?.appointmentDate,
        appointmentTime: resp?.createBooking?.appointmentTime,
        note: resp?.createBooking?.note,
        doctorName: resp?.createBooking?.doctors?.name,
        image: resp?.createBooking?.doctors?.image?.url,
      };
      const res = await axios.post("http://localhost:3000/api/send", postData);
      // console.log("send", res);
      

    } catch (err) {
      toast("Error While Booking Appointment! ")
      console.log(err);
    }
  };

  const times = [
    "10:00AM",
    "10:30AM",
    "11:00AM",
    "11:30AM",
    "12:00AM",
    "12:30PM",
    "1:00PM",
    "1:30PM",
    "2:00PM",
    "2:30PM",
    "3:00PM",
    "3:30PM",
    "4:00PM",
    "4:30PM",
    "5:00PM",
    "6:00PM",
    "7:00PM",
    "7:30PM",
  ];

  return (
    <DialogContent className="max-w-[350px] md:max-w-[700px] md:h-[600px] ">
      
      <div className="flex flex-col  gap-2 w-fit h-fit">
        <h1 className="font-semibold text-xl">Book Appointment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-5 mt-3">
          <div className="cols-span-1 flex flex-col gap-3">
            <h2 className=" flex gap-2 text-sm text-gray-500">
              {" "}
              <CalendarRange className="text-primary w-3 md:w-5 h-5" /> Select Date
            </h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-xl border w-full"
            />
          </div>
          <div className=" flex flex-col gap-3 ">
            <h2 className="flex gap-2 text-sm text-gray-500">
              {" "}
              <Clock className="text-primary w-5 h-5" /> Select Time Slot
            </h2>
            <div className="grid grid-cols-3 border rounded-xl gap-y-4 p-5 gap-x-2 ">
              {times?.map((curr, index) => {
                return (
                  <h2
                    onClick={() => setSelectedTimeSlot(curr)}
                    className={`text-center cursor-pointer  border rounded-full text-sm text-gray-500 py-1${
                      timeSlot === curr ? " text-green-50 bg-blue-500 text-center" : ""
                    }`}
                    key={index}
                  >
                    {curr}
                  </h2>
                );
              })}
            </div>
          </div>
        </div>
        <Textarea
          placeholder="Note"
          className="resize-none"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <DialogFooter>
        <Button
          variant="ghost"
          className="border border-red-500 text-red-500 hover:text-black"
          onClick={()=>setOpen(false)}
        >
          Close
        </Button>
        <Button type="submit" onClick={() => createBooking()}>
          <Link href={'/my-booking'}>Submit</Link>
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default BookAppointmentDialog;
