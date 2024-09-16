import { MongoDBIcon } from "../assets";
import { Titles } from "../constants";

export default function HomePage() {
  return (
    <>
      <div className="relative space-y-32">
        <h1 className="bg-secondary-100 rounded-b-3xl py-10 text-center text-3xl font-semibold">
          {Titles.APP_NAME}
        </h1>

        <p className="text-center">{Titles.HERO}</p>

        <p className="flex items-center justify-center text-center">
          {Titles.POWERED_BY}
          <MongoDBIcon className="h-5 w-5" />
        </p>
      </div>
    </>
  );
}
