export default function ActionButton({ label, action }) {
  return (
    <button
      onClick={action}
      className="text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
    >
      {label}
    </button>
  );
}
