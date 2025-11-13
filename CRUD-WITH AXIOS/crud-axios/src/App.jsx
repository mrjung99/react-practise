import Form from "./coponents/Form";
import Posts from "./coponents/Posts";

const App = () => {
  return (
    <section className="bg-gray-900">
      <h1 className="text-4xl text-center font-semibold text-gray-300">
        CRUD Operation with Axios
      </h1>
      <Posts />
    </section>
  );
};

export default App;
