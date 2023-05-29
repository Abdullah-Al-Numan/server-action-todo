import connectMongo from "../utills/dbConnection";
import Todo from "../models/todoModel";
const GetTodo = async () => {
  await connectMongo();
  const allTodo = await Todo.find();
  console.log(allTodo);

  return (
    <div>
      <h1>This is todo list</h1>
      <button>Get Todo</button>
    </div>
  );
};

export default GetTodo;
