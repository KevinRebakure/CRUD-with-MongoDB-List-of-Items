interface Props {
  message: string;
}

export default function App(props: Props) {
  return (
    <>
      <p className="text-red-600">{props.message}</p>
    </>
  );
}
