import { Link } from "react-router-dom";
import { IconsURL, RoutePaths } from "../../constants";

export default function BottomNavBar() {
  return (
    <div className="items-centerspace-y-4 mx-auto flex w-48 justify-around rounded-full border-2 border-primary-100 bg-white py-4">
      <Link to={RoutePaths.INDEX}>
        <img src={IconsURL.HOME_ICON} className="h-8 w-8" alt="" />
      </Link>
      <Link to={RoutePaths.LIST_PAGE}>
        <img src={IconsURL.LIST_ICON} className="h-8 w-8" alt="" />
      </Link>
    </div>
  );
}
