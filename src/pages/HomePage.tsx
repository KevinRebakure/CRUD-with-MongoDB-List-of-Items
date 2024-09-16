import { MongoDBIcon } from "../assets";
import BottomNavBar from "../components/shared/BottomNavBar";
import Button from "../components/shared/Button";
import { ButtonLabels, IconsURL, Titles } from "../constants";

export default function HomePage() {
  return (
    <div className="bg-tertiary-100 mx-auto min-h-screen w-[430px] space-y-20">
      <h1 className="bg-secondary-100 py-10 text-center text-3xl font-semibold">
        {Titles.APP_NAME}
      </h1>

      <div className="space-y-32 px-3">
        <p className="text-center">{Titles.HERO}</p>

        <p className="flex items-center justify-center gap-1 text-center">
          {Titles.POWERED_BY}
          <MongoDBIcon className="h-5 w-5" />
        </p>

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
