import React from "react";

export default function Footer(props) {
  return (
    <div className="mt-5 bg-blue-600 h-24 w-full">
      <h1 className="text-white text-2xl font-bold m-auto py-5">
        {props.title}
      </h1>
    </div>
  );
}
