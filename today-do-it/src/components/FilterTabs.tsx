import { Todo } from "@/hooks/useTodos";
import { StateFilter } from "@/types/StateFilter";

export type FilterTabProps = {
  stateFilter: StateFilter;
  setStateFilter: React.Dispatch<React.SetStateAction<StateFilter>>;
  todos: Todo[];
};

const countTodos = (stateFilter: StateFilter, todos: Todo[]) => {
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
  return filteredTodos.length;
};

export function FilterTabs({
  stateFilter,
  setStateFilter,
  todos,
}: FilterTabProps) {
  return (
    <ul>
      <li
        className={stateFilter === "all" ? "text-blue-600" : "text-black"}
        onClick={() => {
          setStateFilter("all");
        }}
      >
        모두 {countTodos("all", todos)}
      </li>
      <li
        className={stateFilter === "todo" ? "text-blue-600" : "text-black"}
        onClick={() => {
          setStateFilter("todo");
        }}
      >
        할일 {countTodos("todo", todos)}
      </li>
      <li
        className={stateFilter === "completed" ? "text-blue-600" : "text-black"}
        onClick={() => {
          setStateFilter("completed");
        }}
      >
        한일 {countTodos("completed", todos)}
      </li>
      <li
        className={stateFilter === "archived" ? "text-blue-600" : "text-black"}
        onClick={() => {
          setStateFilter("archived");
        }}
      >
        보관 {countTodos("archived", todos)}
      </li>
    </ul>
  );
}
