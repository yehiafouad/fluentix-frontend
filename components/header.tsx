import DesktopNavbar from "./navbar/desktop-nav";
import SubItems from "./navbar/sub-items";

const Header = () => {
  return (
    <div className="w-full shadow-lg h-[92px] rounded-b-lg">
      <div className="h-full relative">
        <div className="p-5">
          <DesktopNavbar />
        </div>
        {/* <div className="absolute top-0 left-0 w-full bg-white">
          <SubItems />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
