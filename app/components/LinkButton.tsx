import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  children?: React.ReactNode;
  page: string;
}

const LinkButton = ({ children, page }: LinkButtonProps) => {
  return <Link href={"/" + page}>
    <div className="my-20 text-5xl bg-primary-100 w-80 h-24 rounded-full flex justify-center text-center items-center hover:bg-primary-200">
        {children}
    </div>
  </Link>;
};

export default LinkButton;
