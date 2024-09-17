import { Link } from "react-router-dom";
import { IconsURL, RoutePaths } from "../../constants";

export default function BottomNavBar() {
  return (
    <div className="mx-auto flex w-48 rounded-full bg-white">
      <Link
        to={RoutePaths.INDEX}
        className="flex h-full w-full items-center justify-center rounded-bl-full rounded-tl-full border-2 border-primary-100 py-4 hover:bg-primary-100"
      >
        <img src={IconsURL.HOME_ICON} className="h-8 w-8" alt="" />
      </Link>

      <Link
        to={RoutePaths.LIST_PAGE}
        className="flex h-full w-full items-center justify-center rounded-br-full rounded-tr-full border-2 border-l-0 border-secondary-100 py-4 hover:bg-secondary-100"
      >
        <img src={IconsURL.LIST_ICON} className="h-8 w-8" alt="" />
      </Link>
    </div>
  );
}
