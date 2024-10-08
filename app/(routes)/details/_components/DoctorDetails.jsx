import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { LocateIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import BookAppointmentDialog from "./BookAppointmentDialog";

const DoctorDetails = ({ doctor }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row border md:p-4 rounded-xl shadow-sm gap-10 items-center">
      <Image
        src={doctor?.image?.url ?? "/doctor1.png"}
        width={2000}
        height={200}
        className="mt-4 px-4 object-cover md:w-[280px] h-[280px] rounded-xl"
        alt={doctor?.name ?? "doctor"}
      />
      <div className="flex flex-col gap-2 px-5 pb-5">
        <h2 className="text-xl font-bold">{doctor?.name}</h2>
        <h2 className="text-gray-500">{`${doctor?.experience} of Experience`}</h2>
        <h2 className="text-gray-500">{doctor?.address}</h2>
        <h2 className="text-xs bg-blue-100 px-2 py-1 text-primary w-fit rounded-full">
          {doctor?.categories?.[0].title}
        </h2>
        <div className="flex gap-2 mt-2">
          <Image
            src="/youtube.png"
            alt="youtube"
            width={200}
            height={100}
            className="w-[25px]"
          />
          <Image
            src="/linkedin.png"
            alt="linkedin"
            width={200}
            height={100}
            className="w-[25px]"
          />
          <Image
            src="/twitter.png"
            alt="twitter"
            width={200}
            height={100}
            className="w-[25px]"
          />
          <Image
            src="/facebook.png"
            alt="twitter"
            width={200}
            height={100}
            className="w-[25px]"
          />
        </div>
        <Dialog open={open}>
          <DialogTrigger asChild>
            <Button
              className="w-fit rounded-full mt-4 mb-2"
              onClick={() => setOpen(true)}
            >
              Book Appointment
            </Button>
          </DialogTrigger>
          <BookAppointmentDialog setOpen={setOpen} />
        </Dialog>
      </div>
    </div>
  );
};

export default DoctorDetails;
