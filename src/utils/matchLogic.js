import { toast } from "react-toastify";

let selections = [];

export function handleSelection(bookId, choice) {
  const opposite = choice === "lend" ? "read" : "lend";
  const match = selections.find(
    (s) => s.bookId === bookId && s.choice === opposite
  );

  if (match) {
    toast.success("🎊 Someone wants to lend this book to you!");
  } else {
    toast.info("⏳ You'll be notified when someone wants to lend this book.");
  }

  selections.push({ bookId, choice });
}
