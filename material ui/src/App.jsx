import { useState } from "react";
import Modal from "./component/modal/Modal";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="text-3xl flex flex-col items-center justify-center h-lvh">
      <button
        className="bg-blue-600 text-white shadow-lg text-xl uppercase px-4 py-2 rounded cursor-pointer hover:scale-105 ease transition-all duration-300"
        onClick={() => setOpen(true)}
      >
        Click to open modal
      </button>
      {open && <Modal setOpen={setOpen} />}
    </div>
  );
};

export default App;
