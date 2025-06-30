import User from "./components/User";

const App = () => {
  return (
    <div className="bg-amber-100 w-full h-full place-items-center">
      <h1 className=" text-4xl text-green-600">
        Sart learning react and tailwind css
      </h1>
      <User username="Daulat" />
    </div>
  );
};

export default App;
