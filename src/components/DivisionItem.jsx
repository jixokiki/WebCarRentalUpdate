import Image from "next/image";
import React from "react";

const DivisionItem = ({
  title,
  description,
  image1,
  image2,
  align = "right",
}) => {
  const isLeftAligned = align === "left";

  return (
    <div
      className={`flex ${
        isLeftAligned ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      } p-5 gap-10`}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
        <div className="w-full md:w-11/12 text-lg text-justify md:text-left">
          <p>{description}</p>
        </div>
      </div>

      <div
        className={`w-[320px] h-[320px] md:w-[380px] md:h-[380px] md:flex md:flex-col md:items-center ${
          isLeftAligned ? "md:justify-start" : "md:justify-end"
        }`}
      >
        <Image
          src={isLeftAligned ? image2 : image1}
          alt={title}
          width={350}
          height={350}
          className="rounded w-[300px] h-[300px] md:min-w-80 md:h-auto aspect-square object-cover"
        />
      </div>

      <div
        className={`w-[320px] h-[320px] md:w-[380px] md:h-[380px] md:flex md:flex-col md:items-center ${
          isLeftAligned ? "md:justify-end" : "md:justify-start"
        }`}
      >
        <Image
          src={isLeftAligned ? image1 : image2}
          alt={title}
          width={350}
          height={350}
          className="rounded w-[300px] h-[300px] md:min-w-80 md:h-auto aspect-square object-cover"
        />
      </div>
    </div>
  );
};

export default DivisionItem;
