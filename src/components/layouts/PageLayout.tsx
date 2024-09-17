import { Outlet } from "react-router";
import { ButtonLabels, IconsURL, Titles } from "../../constants";
import BottomNavBar from "../shared/BottomNavBar";
import Button from "../shared/Button";

export default function PageLayout() {
  return (
    <div className="relative mx-auto grid min-h-screen w-[430px] grid-rows-5 bg-tertiary-100">
      <h1 className="px-4 py-10 text-3xl font-semibold">{Titles.APP_NAME}</h1>

      <div className="row-span-3 px-4">
        <Outlet />
      </div>

      <div className="space-y-4 px-4">
        <Button
          label={ButtonLabels.ADD_ITEM}
          iconURL={IconsURL.ADD_ICON}
          className="font-semibold"
        />
        <BottomNavBar />
      </div>
    </div>
  );
}