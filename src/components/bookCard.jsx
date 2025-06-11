import ActionButton from "./Buttons/ActionButton";
import { handleSelection } from "../utils/matchLogic";

export default function BookCard({ book }) {
  return (
    <div className="border rounded-lg p-3 shadow hover:shadow-lg">
      <img
        src={book.img}
        alt={book.title}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="mt-2 text-lg font-semibold">{book.title}</h2>
      <div className="flex gap-2 mt-2">
        <ActionButton
          label="I have this to lend out"
          action={() => handleSelection(book.id, "lend")}
        />
        <ActionButton
          label="I'd like to read this"
          action={() => handleSelection(book.id, "read")}
        />
      </div>
    </div>
  );
}
