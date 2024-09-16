import { Outlet, useLocation } from "react-router";
import { ButtonLabels, IconsURL, RoutePaths, Titles } from "../../constants";
import BottomNavBar from "../shared/BottomNavBar";
import Button from "../shared/Button";

export default function PageLayout() {
  const data = useLocation();
  return (
    <div className="bg-tertiary-100 relative mx-auto min-h-screen w-[430px] space-y-10">
      {data.pathname !== RoutePaths.INDEX && (
        <h1 className="px-4 py-10 text-3xl font-semibold">{Titles.APP_NAME}</h1>
      )}

      <div className="px-4">
        <Outlet />
      </div>

      <div className="px-4">
        <Button
          label={ButtonLabels.ADD_ITEM}
          iconURL={IconsURL.ADD_ICON}
          className="font-semibold"
        />
      </div>

      <BottomNavBar />
    </div>
  );
}
