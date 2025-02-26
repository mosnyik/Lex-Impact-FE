import Link from "next/link";
import Image from "next/image";
import NavbarButton from "./NavbarButton";
import { Flex, DropdownMenu, Button } from "@radix-ui/themes";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white border-b-2 h-20 px-6 py-6">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={237}
          height={80}
          className="pl-[24px] pr-[24px]"
        />
      </Link>
      <div>
        {
          <div className="space-x-3 flex justify-center items-center">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button
                  variant="solid"
                  className="flex justify-center items-center focus:outline-none focus:ring-0 hover:text-primary"
                >
                  Catalog
                  <DropdownMenu.TriggerIcon className="ml-2" />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content
                variant="solid"
                className="bg-primary/50 text-white border border-gray-300 shadow-md rounded-md w-auto p-2"
                align="center"
              >
                <DropdownMenu.Item className="focus:outline-none focus:ring-0 hover:bg-gray-200  hover:text-gray-600 rounded-md px-2 ">
                  Data Center
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus:outline-none focus:ring-0 hover:bg-gray-200  hover:text-gray-600 rounded-md px-2">
                  Cloud Computing
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus:outline-none focus:ring-0 hover:bg-gray-200  hover:text-gray-600 rounded-md px-2">
                  AI Academy
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus:outline-none focus:ring-0 hover:bg-gray-200  hover:text-gray-600 rounded-md px-2">
                  Profile
                </DropdownMenu.Item>
                <DropdownMenu.Item className="focus:outline-none focus:ring-0 hover:bg-gray-200  hover:text-gray-600 rounded-md px-2">
                  Support
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>

            <Link href="/" className="hover:text-primary">
              Resources
            </Link>
            <Link href="/" className="hover:text-primary">
              Community
            </Link>
            <Link href="/" className="hover:text-primary">
              FAQs
            </Link>
          </div>
        }
      </div>
      <div className="space-x-3">
        <NavbarButton
          children="Log In"
          bgColor="bg-white"
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33337 14.1666L12.5 9.99992L8.33337 5.83325"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 10H2.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
        <NavbarButton
          children="Sign Up"
          bgColor=""
          textColor="text-white"
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 8V14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 11H16"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </div>
    </nav>
  );
};

export default Navbar;
