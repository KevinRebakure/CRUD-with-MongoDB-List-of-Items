import { Outlet } from "react-router";
import { ButtonLabels, IconsURL, Titles } from "../../constants";
import BottomNavBar from "../shared/BottomNavBar";
import Button from "../shared/Button";

export default function PageLayout() {
  return (
    <div className="bg-tertiary-100 relative mx-auto min-h-screen w-[430px] space-y-10">
      <h1 className="px-4 py-10 text-3xl font-semibold">{Titles.APP_NAME}</h1>

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
