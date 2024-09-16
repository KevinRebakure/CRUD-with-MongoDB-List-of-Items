interface Input {
  label: string;
  placeholder: string;
  type: string;
}
export default function Input({ label, placeholder, type }: Input) {
  return (
    <div className="space-y-2">
      <label htmlFor="" className="text-lg font-semibold">
        {label}
      </label>
      <input
        type={type}
        name={label}
        id={label}
        className="border-secondary-100 w-full rounded-xl border-2 p-3 outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}
