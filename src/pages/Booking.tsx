import React from "react";

export default function Booking() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <iframe
        src="https://cal.com/martin-claveon/1std"
        width="100%"
        height="800"
        frameBorder="0"
        className="rounded-2xl shadow-lg max-w-4xl"
        title="Reserva una cita"
      ></iframe>
    </div>
  );
}

