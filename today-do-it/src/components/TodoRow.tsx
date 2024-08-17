import { Todo } from "@/hooks/useTodos";
import { CompletedCheckbox } from "./CompletedCheckbox";
import { ArchivedCheckbox } from "./ArchivedCheckbox";

type TodoRowProps = {
  todo: Todo;
  handleSetCompletedTo: (todoId: string, completed: boolean) => Promise<void>;
  handleSetArchivedAt: (
    todoId: string,
    archivedAt: Date | null
  ) => Promise<void>;
};

export function TodoRow({
  todo,
  handleSetCompletedTo,
  handleSetArchivedAt,
}: TodoRowProps) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <CompletedCheckbox
        todoId={todo.id}
        completed={todo.completed}
        handleSetCompletedTo={handleSetCompletedTo}
      />
      <ArchivedCheckbox
        todoId={todo.id}
        archivedAt={todo.archivedAt}
        handleSetArchivedAt={handleSetArchivedAt}
      />
      <p>{todo.details}</p>
      <span>
        {todo.start?.toString()} ~ {todo.end?.toString()}
      </span>
    </div>
  );
}
