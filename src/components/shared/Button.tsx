interface Label {
  label: string;
  className?: string;
  iconURL?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button({
  label,
  className,
  iconURL,
  type = "button",
}: Label) {
  return (
    <button
      type={type}
      className={`flex w-full items-center justify-center gap-1 rounded-xl bg-primary-100 py-3 text-center ${className}`}
    >
      <img src={iconURL} alt="" className="h-4 w-4" />
      {label}
    </button>
  );
}
