import AddTodo from "./components/addtodo";
import Navbar from "./components/navbar";
import Todos from "./components/todos";
import "./App.css";

const App = () => {
  return (
    <main>
      <h1 style={{ marginBottom: 50 }}> TODO APP </h1>
      <Navbar />
      <AddTodo />
      <Todos />
    </main>
  );
};

export default App;
