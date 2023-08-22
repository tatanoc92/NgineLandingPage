export default function Button({ text, color }) {
  return (
    <div className="flex flex-col items-center text-center">
      <button
        className={`uppercase tracking-wider font-bold ${
          color === "primary"
            ? "bg-primary"
            : "bg-transparent border border-solid border-white"
        } p-2 border-white rounded-md`}
      >
        {text}
      </button>
    </div>
  );
}
