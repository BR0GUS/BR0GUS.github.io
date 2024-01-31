import React from "react";

interface CardProps {
  header: string;
  children?: React.ReactNode;
}

const Card = ({ header, children }: CardProps) => {
  return (
    <div className="flex flex-col flex-1 h-screen">
      <div className="m-4 h-full">
        <div className="bg-accent-100 rounded-3xl flex justify-center items-center content-center  h-1/6">
          <h1 className="text-8xl py-16 ">{header}</h1>
        </div>
        <div className="flex justify-center items-center h-5/6 bg-bg-200 rounded-3xl">
          {children ? (
            <div className="2xl:text-3xl text-text-100  flex text-center flex-col justify-center">
              {React.Children.map(children, (child) => (
                <div className="my-10">{child}</div>
              ))}
            </div>
          ) : (
            "ZN"
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
