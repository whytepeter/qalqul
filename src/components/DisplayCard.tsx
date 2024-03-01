type CardProps = {
  title: string;
  value: string;
};

export default function DisplayCard({ title, value }: CardProps) {
  return (
    <>
      <div className="w-full p-4 text-sm rounded-2xl bg-white border-outlined flex flex-col gap-1">
        <span className="text-xs capitalize text-dark-600">{title}</span>
        <span className="text-dark-800 font-medium">{value}</span>
      </div>
    </>
  );
}
