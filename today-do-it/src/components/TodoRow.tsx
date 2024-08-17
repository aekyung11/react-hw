import { Todo } from "@/hooks/useTodos";
import { CompletedCheckbox } from "./CompletedCheckbox";

type TodoRowProps = {
  todo: Todo;
  handleSetCompletedTo: (todoId: string, completed: boolean) => Promise<void>;
};

export function TodoRow({ todo, handleSetCompletedTo }: TodoRowProps) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <CompletedCheckbox
        todoId={todo.id}
        completed={todo.completed}
        handleSetCompletedTo={handleSetCompletedTo}
      />
      <p>{todo.details}</p>
      <span>
        {todo.start?.toString()} ~ {todo.end?.toString()}
      </span>
    </div>
  );
}
