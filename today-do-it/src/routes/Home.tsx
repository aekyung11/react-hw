import { useOutletContext } from "react-router-dom";
import { UserContext } from "@/routes/PrivateRoute";
import { useTodos } from "@/hooks/useTodos";
import { Spinner } from "@/components/Spinner";
import { TodoRow } from "@/components/TodoRow";
import { CreateTodoForm } from "@/components/CreateTodoForm";

function Home() {
  const { user } = useOutletContext<UserContext>();
  const { todos, loading, create, setCompletedTo, setArchivedAt } = useTodos();

  if (loading) {
    return <Spinner />;
  }
  console.log("todos", todos);
  return (
    <>
      <div>현재 사용자: {user?.username}</div>
      <CreateTodoForm userId={user!.id} handleCreateTodo={create} />
      {todos.map((todo) => (
        <TodoRow
          key={todo.id}
          todo={todo}
          handleSetCompletedTo={setCompletedTo}
          handleSetArchivedAt={setArchivedAt}
        />
      ))}
    </>
  );
}

export default Home;
