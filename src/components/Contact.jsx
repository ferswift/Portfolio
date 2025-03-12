import React from "react";
import { Button } from "./Button";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center gap-10 text-center mt-50 border-t-1 border-b-1 border-cyan-300 py-20 bg-[url('public/react.svg')] bg-no-repeat bg-right bg-[length:20%_auto]"
    >
      <h1 className="text-5xl text-white font-bold">Get in Contact</h1>
      <p className="text-xl text-slate-600 max-w-[50rem]">
        Whether you are starting a project, have business inquiries or just want
        to say hi, my inbox is always open so feel free to reach out and I will
        get back to you as soon as possible.
      </p>
      <div className="flex gap-5">
        <Button
          bgColor="bg-green-300"
          textColor="text-black"
          shadow="shadow-[0_10px_20px_rgba(0,255,0,0.5),0_6px_6px_rgba(0,255,0,0.5),0_0_100px_-10px_rgba(0,255,0,0.5)]"
          className="w-[10rem] h-[3rem] bounce1"
        >
          Email{" "}
        </Button>
        <Button
          bgColor="bg-blue-300"
          textColor="text-black"
          shadow="shadow-[0_10px_20px_rgba(0,0,255,0.5),0_6px_6px_rgba(0,0,255,0.5),0_0_100px_-10px_rgba(0,0,255,0.5)]"
          className="w-[10rem] h-[3rem] bounce2"
        >
          Linkedin{" "}
        </Button>
        <Button
          bgColor="bg-purple-600"
          textColor="text-black"
          className="w-[10rem] h-[3rem] bounce3"
          shadow="shadow-[0_10px_20px_rgba(128,0,128,0.5),0_6px_6px_rgba(128,0,128,0.5),0_0_100px_-10px_rgba(128,0,128,0.5)]"
        >
          GitHub{" "}
        </Button>
        <Button
          textColor="text-black"
          shadow="shadow-[0_10px_20px_rgba(128,0,128,0.5),0_6px_6px_rgba(128,0,128,0.5),0_0_100px_-10px_rgba(128,0,128,0.5)]"
          className="w-[10rem] h-[3rem] bounce4"
        >
          Instagram{" "}
        </Button>
      </div>
    </section>
  );
};
