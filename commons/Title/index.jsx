export default function SectionTitle({ text }) {
    return (
      <div className="w-full bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-4 rounded-2xl">
        <h1 className="text-xl font-semibold text-white">{text}</h1>
      </div>
    );
  }