import React from "react";
import LinkButton from "./LinkButton";

interface CardProps {
  header: string;
  children?: React.ReactNode;
  width: string;
}

const widthClasses = {
  "2/5": "w-2/5",
  "3/5": "w-3/5",
};

const Card = ({ header, children, width }: CardProps) => {
  const widthClass = widthClasses[width as keyof typeof widthClasses];
  return (
    <div className={`flex flex-col h-screen ${widthClass}`}>
      <div className="m-4 h-full">
        <div className="bg-accent-100 rounded-full flex justify-center items-center content-center  h-1/6">
          <h1 className="text-8xl py-16">{header}</h1>
        </div>
        <div className="flex justify-center items-center h-5/6 bg-bg-200 rounded-3xl">
          {children ? (
            <div className="2xl:text-3xl text-text-100  flex text-center flex-col justify-center">
              {React.Children.map(children, (child) => (
                <div className="my-10">{child}</div>
              ))}
            </div>
          ) : (
            <div className="">
              <LinkButton page="about">Portfolio</LinkButton>
              <LinkButton page="about">Resume</LinkButton>
              <LinkButton page="about">Contact</LinkButton>
              <LinkButton page="about">Blog</LinkButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
