export default function Title({ text }) {
  return (
    <div className="flex w-full items-center space-x-4">
      <h2 className="text-2xl font-bold text-white">
        {text}
      </h2>
      <div
        className="h-1 w-1/2"
        style={{
          background: "linear-gradient(to right, #fa5252, transparent)",
        }}
      ></div>
    </div>
  );
}
