import { MongoDBIcon } from "../assets";
import { Titles } from "../constants";

export default function HomePage() {
  return (
    <div className="py-24 border-black border">
      <p className="text-center">{Titles.HERO}</p>

      <p className="flex items-center justify-center text-center">
        {Titles.POWERED_BY}
        <MongoDBIcon className="h-5 w-5" />
      </p>
    </div>
  );
}
