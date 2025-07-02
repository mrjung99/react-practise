import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwrodRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "%&*()_-{}+#@";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwrodRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="bg-gray-700 w-full mx-auto max-w-md my-8 text-orange-500 shadow-md rounded-lg px-4 py-3">
      <h1 className="text-center text-white mb-4  text-2xl">
        Password generator
      </h1>
      <div className="flex rounded-lg overflow-hidden mb-4 ">
        <input
          type="text"
          value={password}
          placeholder="Password"
          className="bg-white w-full  py-1 px-3 outline-none"
          readOnly
          ref={passwrodRef}
        />
        <button
          className="bg-blue-800 hover:bg-blue-600 text-white  py-1  px-2.5 shrink-0 outline-none cursor-pointer"
          onClick={copyPasswordToClipBoard}
        >
          Copy
        </button>
      </div>
      <div className="flex gap-3 items-center ">
        <div className="flex items-center gap-1">
          <input
            type="range"
            onChange={(e) => setLength(e.target.value)}
            min={8}
            max={50}
            className="cursor-pointer"
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex gap-1">
          <input
            type="checkbox"
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="cursor-pointer"
          />
          <label>Numbers</label>
        </div>
        <div className="flex gap-1">
          <input
            type="checkbox"
            onChange={() => setCharAllowed((prev) => !prev)}
            className="cursor-pointer"
          />
          <label>Charcters</label>
        </div>
      </div>
    </div>
  );
};

export default App;
