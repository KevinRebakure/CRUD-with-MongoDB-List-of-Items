import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconsURL } from "@/constants";

export default function Item() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full rounded-xl border-2 border-secondary-100 bg-white py-3 outline-none">
        <p className="flex items-center justify-end gap-4 px-3">
          <span className="mr-auto">Book</span>
          <span>$15</span>
          <img src={IconsURL.INFO_ICON} alt="" className="size-5" />
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[380px]">
        <p className="w-full px-3 py-4 text-sm">
          Lorem ipsum dolor sit amet consectetur adipiscing elit mus
          scelerisque, habitant quisque cubilia placerat fusce diam vulputate
          vitae consequat,
        </p>
        <DropdownMenuSeparator />
        <div className="flex items-center justify-end gap-3 px-3">
          <p className="mr-auto text-sm">created on 17/08/2024</p>

          <div className="w-15 h-15 rounded-full border-2 border-secondary-100 p-3">
            <img className="size-7" src={IconsURL.EDIT_ICON} alt="" />
          </div>

          <div className="w-15 h-15 rounded-full border-2 border-primary-100 p-3">
            <img className="size-7" src={IconsURL.TRASH_ICON} alt="" />
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
