export default function SectionTitle({ text }) {
  return (
    <div className="w-full flex items-center space-x-4">
      <h2 className="text-2xl font-bold text-white">
        {text}
      </h2>
      <div
        className="flex-grow h-1 bg-gradient-to-r"
        style={{
          "--tw-gradient-from": "#fa5252",
          "--tw-gradient-to": "rgba(250, 82, 82, 0)",
          backgroundImage: "linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))",
        }}
      ></div>
    </div>
  );
}
