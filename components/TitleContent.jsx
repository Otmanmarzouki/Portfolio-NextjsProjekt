export default function TitleContent({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-xl font-bold">{title}</h1>
      {subtitle && (
        <h4 className="text-sm text-gray-400 m-4 text-center">{subtitle}</h4>
      )}
    </div>
  );
}