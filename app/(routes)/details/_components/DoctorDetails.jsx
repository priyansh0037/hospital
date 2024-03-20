import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const DoctorDetails = ({ doctor }) => {
  const [BookAppointment, setBookAppointment] = React.useState(null);

  React.useEffect(() => {
    // Import BookAppointment component dynamically only on the client side
    if (doctor) {
      import("./BookApointment").then((module) => {
        setBookAppointment(() => module.default);
      });
    }
  }, [doctor]);

  return (
    <>
      {doctor && (
        <div className="grid grid-cols-1 md:grid-cols-3 border p-5 mt-5 rounded-lg">
          {/* Doctor image */}
          <div className="md:col-span-1">
            <div>
              <Image
                src={doctor?.attributes?.Images?.data?.attributes?.url}
                width={200}
                height={200}
                alt="doctor"
                className="rounded-lg h-full w-full object-cover"
              />
            </div>
          </div>
          {/* Doctor info */}
          <div className="md:col-span-2 md:px-10 flex flex-col gap-2 justify-center">
            <h2 className="font-bold text-xl md:text-2xl mt-5">
              {doctor?.attributes?.Name}
            </h2>
            <div className="flex gap-2 text-sm flex-shrink-0 text-gray-500 ">
              <GraduationCap />
              <span>
                {doctor?.attributes?.Year_of_Experience} years of experience
              </span>
            </div>

            <div className="flex gap-2 text-sm flex-shrink-0 text-gray-500 ">
              <MapPin />
              <span>{doctor?.attributes?.Adress}</span>
            </div>

            <div className="flex gap-4 items-center  flex-shrink-0 text-gray-500 ">
              <h2 className="text-sm bg-blue-100 font-semibold text-primary px-4 py-4 rounded-lg w-fit ">
                {doctor?.attributes?.categories?.data[0]?.attributes?.Name}
              </h2>
              {BookAppointment && <BookAppointment doctor={doctor} />}
            </div>
          </div>
        </div>
      )}

      {/* About doctor */}
      <div className="mt-5 border rounded-lg p-5">
        <h2 className="font-bold text-2xl">About Me</h2>
        <p className="text-gray-500 tracking-wide">{doctor?.attributes?.About}</p>
      </div>
    </>
  );
};

export default DoctorDetails;
