
import Image from "next/image";
import Link from "next/link";

const DesktopNavbar = () => {
  return (
    <nav className="font-brandon-bold flex items-center h-full justify-between text-[14px] leading-[15px] uppercase">
      <div className="logo-style">
        <Link href={"/"}>
          <Image
            src={"/assets/images/fluentix.svg"}
            alt="Logo"
            width={200}
            height={200}
          />
          
        </Link>
      </div>
      {/* <div className="flex gap-3">
        <Link
          className="hover:text-red-700 duration-300 transition-colors"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="hover:text-red-700 duration-300 transition-colors"
          href={"/about"}
        >
          About
        </Link>
        <Link
          className="hover:text-red-700 duration-300 transition-colors"
          href={"/services"}
        >
          Services
        </Link>
        <Link
          className="hover:text-red-700 duration-300 transition-colors"
          href={"/communications"}
        >
          Communications
        </Link>
      </div>
      <div>ACCESSBILITY</div> */}
    </nav>
  );
};

export default DesktopNavbar;
