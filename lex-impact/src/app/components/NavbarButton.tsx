"use client";
import { Button } from "@radix-ui/themes";
import { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  icon?: ReactNode;
  bgColor?: string;
  textColor?: string;
}

const NavbarButton = ({
  children,
  onClick,
  icon,
  bgColor,
  textColor = "text-black",
}: Props) => {
  return (
    <Button
      onClick={() => console.log(`${children} clicked`)}
      className={` ${
        bgColor ? bgColor : "bg-primary"
      } ${textColor} h-[40px] rounded-[10px] top-[23px] left-[1207px] font-montserrat font-semibold text-[16px] leading-[19.5px] tracking-[0] px-4 py-2 `}
    >
      <div className="flex justify-center items-center">
        {icon && <div className="w-1 h-6 mr-7">{icon}</div>}
        <span className="pb-1">{children}</span>
      </div>
    </Button>
  );
};

export default NavbarButton;
