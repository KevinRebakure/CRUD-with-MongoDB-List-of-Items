import Button from "@/components/shared/Button";
import Input from "../components/shared/forms/Input";
import {
  ButtonLabels,
  FormInputTypes,
  FormLabels,
  FormPlaceHolders,
  IconsURL,
} from "../constants";

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
      <Button
        label={ButtonLabels.ADD_ITEM}
        className="w-full"
        iconURL={IconsURL.ADD_ICON}
      />
    </form>
  );
}
