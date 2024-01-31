import React from "react";

interface CardProps {
  header: string;
}

const Card = ({ header }: CardProps) => {
  return (
    <div className="flex flex-col bg-bg-300 flex-1 h-screen">
      <div className="m-4">
        <div className="bg-accent-100 rounded-3xl">
          <h1 className="text-8xl py-16">{header}</h1>
        </div>
        <div>asd</div>
      </div>
    </div>
  );
};

export default Card;
