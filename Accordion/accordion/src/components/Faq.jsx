const Faq = ({ currData, isActive, onToggle }) => {
  const { answer, question } = currData;

  return (
    <li className="border-l-2 border-gray-500">
      <div className="flex justify-between items-center text-gray-300 bg-gray-800 p-2">
        <p className="text-gra ">{question}</p>
        <button
          className="bg-green-800 px-2 py-1 rounded cursor-pointer hover:bg-green-700
            transition-all"
          onClick={onToggle}
        >
          {isActive ? "Close" : "Show"}
        </button>
      </div>
      {isActive && <p className=" px-2 pb-1 bg-gray-500">{answer}</p>}
    </li>
  );
};

export default Faq;
