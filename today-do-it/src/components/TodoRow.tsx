import { Todo } from "@/hooks/useTodos";

type TodoProps = {
  todo: Todo;
};

export function TodoRow({ todo }: TodoProps) {
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.details}</p>
      <span>
        {todo.start?.toString()} ~ {todo.end?.toString()}
      </span>
    </div>
  );
}
