import { Todo } from "@/hooks/useTodos";
import { TodoRow } from "./TodoRow";

export type TodoListProps = {
  todos: Todo[];
  handleSetCompletedTo: (todoId: string, completed: boolean) => Promise<void>;
  handleSetArchivedAt: (
    todoId: string,
    archivedAt: Date | null
  ) => Promise<void>;
};

export function TodoList({
  todos,
  handleSetCompletedTo,
  handleSetArchivedAt,
}: TodoListProps) {
  return (
    <>
      {todos.map((todo) => (
        <TodoRow
          key={todo.id}
          todo={todo}
          handleSetCompletedTo={handleSetCompletedTo}
          handleSetArchivedAt={handleSetArchivedAt}
        />
      ))}
    </>
  );
}
