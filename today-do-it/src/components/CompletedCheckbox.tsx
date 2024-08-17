type CompletedCheckboxProps = {
  todoId: string;
  completed: boolean;
  handleSetCompletedTo: (todoId: string, completed: boolean) => Promise<void>;
};

export function CompletedCheckbox({
  todoId,
  completed,
  handleSetCompletedTo,
}: CompletedCheckboxProps) {
  return (
    <input
      type="checkbox"
      checked={completed}
      onChange={async (e) => {
        await handleSetCompletedTo(todoId, e.target.checked);
      }}
    />
  );
}
