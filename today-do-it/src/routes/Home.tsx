import { useOutletContext } from "react-router-dom";
import { UserContext } from "@/routes/PrivateRoute";
import { useTodos } from "@/hooks/useTodos";
import { Spinner } from "@/components/Spinner";
import { CreateTodoForm } from "@/components/CreateTodoForm";
import { useState } from "react";
import { TodoList } from "@/components/TodoList";
import { FilterTabs } from "@/components/FilterTabs";
import { StateFilter } from "@/types/StateFilter";

function Home() {
  const { user } = useOutletContext<UserContext>();
  const { todos, loading, create, setCompletedTo, setArchivedAt } = useTodos();
  const [stateFilter, setStateFilter] = useState<StateFilter>("all");

  if (loading) {
    return <Spinner />;
  }

  const filteredTodos = todos.filter((todo) => {
    if (stateFilter === "all") {
      return true;
    } else if (stateFilter === "todo") {
      return !todo.completed;
    } else if (stateFilter === "completed") {
      return todo.completed;
    } else if (stateFilter === "archived") {
      return !!todo.archivedAt;
    }
    throw new Error("Unhandled state filter: " + stateFilter);
  });
  console.log("todos", todos);
  return (
    <>
      <div>현재 사용자: {user?.username}</div>
      <CreateTodoForm userId={user!.id} handleCreateTodo={create} />
      <FilterTabs
        stateFilter={stateFilter}
        setStateFilter={setStateFilter}
        todos={todos}
      />
      <TodoList
        todos={filteredTodos}
        handleSetCompletedTo={setCompletedTo}
        handleSetArchivedAt={setArchivedAt}
      />
    </>
  );
}

export default Home;
