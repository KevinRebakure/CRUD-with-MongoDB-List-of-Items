import { Outlet, useLocation } from "react-router";
import { IconsURL, RoutePaths, Titles } from "../../constants";
import BottomNavBar from "../shared/BottomNavBar";
import { Link } from "react-router-dom";

export default function PageLayout() {
  const currentPath = useLocation().pathname;
  console.log(currentPath);
  return (
    <div className="relative mx-auto grid min-h-screen w-[430px] grid-rows-5 bg-tertiary-100">
      <h1 className="px-4 py-10 text-3xl font-semibold">{Titles.APP_NAME}</h1>

      <div className="row-span-3 px-4">
        <Outlet />
      </div>

      <div className="space-y-4 px-4">
        {currentPath !== `/${RoutePaths.FORM_PAGE}` && (
          <Link to={RoutePaths.FORM_PAGE}>
            <span className="flex w-full items-center justify-center gap-1 rounded-xl bg-primary-100 py-3 text-center transition-colors duration-200 hover:bg-secondary-100">
              <img src={IconsURL.ADD_ICON} alt="" className="h-4 w-4" />
              <span>Add a new item</span>
            </span>
          </Link>
        )}
      </div>
      <BottomNavBar />
    </div>
  );
}
