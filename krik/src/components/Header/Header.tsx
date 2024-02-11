import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./TopNavbar";

const Header: React.FC = () => {
  return (
    <div className="w-100 fixed-top">
      <TopNavbar />
      <BottomNavbar />
    </div>
  );
};

export default Header;
