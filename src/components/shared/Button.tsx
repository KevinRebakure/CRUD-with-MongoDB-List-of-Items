interface Label {
  label: string;
  className?: string;
  iconURL?: string;
}

export default function Button({ label, className, iconURL }: Label) {
  return (
    <button
      className={`bg-primary-100 flex w-full items-center justify-center gap-1 rounded-xl py-3 text-center ${className}`}
    >
      <img src={iconURL} alt="" className="h-4 w-4" />
      {label}
    </button>
  );
}
