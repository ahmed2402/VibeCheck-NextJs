import SignupFormDemo from "@/components/signup-form-demo";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full md:flex-row flex-column flex-column-reverse">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <SignupFormDemo />
      </div>
    </div>
  );
};

export default page;
