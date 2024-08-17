type ArchivedCheckboxProps = {
  todoId: string;
  archivedAt: Date | null;
  handleSetArchivedAt: (
    todoId: string,
    archivedAt: Date | null
  ) => Promise<void>;
};

export function ArchivedCheckbox({
  todoId,
  archivedAt,
  handleSetArchivedAt,
}: ArchivedCheckboxProps) {
  return (
    <input
      type="checkbox"
      checked={!!archivedAt}
      onChange={async (e) => {
        await handleSetArchivedAt(todoId, e.target.checked ? new Date() : null);
      }}
    />
  );
}
