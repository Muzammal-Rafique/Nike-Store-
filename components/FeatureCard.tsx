import Image from "next/image";
import React from "react";

interface CardProps {
  imgURL: string;
  label: string;
  subtext: string;
}

const FeatureCard = ({ imgURL, label, subtext }: CardProps) => {
  return (
    <div className="flex-1  rounded-[20px] shadow-3xl w-96 px-5 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <Image src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default FeatureCard;
