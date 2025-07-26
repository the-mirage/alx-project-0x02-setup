import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-2 border rounded-lg p-4">
      <h1 className="font-bold text-xl">{title}</h1>
      <div>{content}</div>
    </div>
  );
};
export default Card;
