import { IconsURL } from "../../constants";

export default function BottomNavBar() {
  return (
    <div className="border-primary-100 items-centerspace-y-4 mx-auto flex w-48 justify-around rounded-full border-2 bg-white py-4">
      <img src={IconsURL.HOME_ICON} className="h-8 w-8" alt="" />
      <img src={IconsURL.LIST_ICON} className="h-8 w-8" alt="" />
    </div>
  );
}
