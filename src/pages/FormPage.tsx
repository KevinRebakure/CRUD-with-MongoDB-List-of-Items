import Input from "../components/shared/forms/Input";
import { FormInputTypes, FormLabels, FormPlaceHolders } from "../constants";

export default function FormPage() {
  return (
    <form action="" className="space-y-4">
      <h1 className="text-center text-xl font-semibold">Create an item</h1>
      <Input
        placeholder={FormPlaceHolders.TITLE}
        label={FormLabels.TITLE}
        type={FormInputTypes.TITLE}
      />
      <Input
        placeholder={FormPlaceHolders.DESCRIPTION}
        label={FormLabels.DESCRIPTION}
        type={FormInputTypes.DESCRIPTION}
      />
      <Input
        placeholder={FormPlaceHolders.PRICE}
        label={FormLabels.PRICE}
        type={FormInputTypes.PRICE}
      />
    </form>
  );
}
