import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="fixed flex top-0 h-12 w-full shadow-sm justify-between items-center px-4">
      {/* logo */}
      <Image
        src="/vercel.svg"
        alt="logo"
        width={150}
        height={150}
        className="h-full "
      />
    </header>
  );
};

export default Header;
