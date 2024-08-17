import { useOutletContext } from "react-router-dom";
import { UserContext } from "@/routes/PrivateRoute";
import { useTodos } from "@/hooks/useTodos";
import { Spinner } from "@/components/Spinner";

function Home() {
  const { user } = useOutletContext<UserContext>();
  const { todos, loading } = useTodos();

  if (loading) {
    return <Spinner />;
  }
  console.log("todos", todos);
  return (
    <>
      <div>현재 사용자: {user?.username}</div>
      {todos.map((todo) => {
        return (
          <div>
            <h3>{todo.title}</h3>
            <p>{todo.details}</p>
            <span>
              {todo.start?.toString()} ~ {todo.end?.toString()}
            </span>
          </div>
        );
      })}
    </>
  );
}

export default Home;
