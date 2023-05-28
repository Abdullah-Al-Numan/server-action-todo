const TodoInput = () => {
  async function create(formData: FormData) {
    "use server";
    console.log(formData.get("todo"));
  }

  return (
    <form action={create} className="mb-4 flex">
      <input
        type="text"
        placeholder="Enter a new todo"
        name="todo"
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md focus:outline-none hover:bg-blue-600"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoInput;
