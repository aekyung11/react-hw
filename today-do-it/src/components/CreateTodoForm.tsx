import { Todo } from "@/hooks/useTodos";
import { useState } from "react";

export type CreateTodoFormProps = {
  userId: string;
  handleCreateTodo: (newTodo: Partial<Todo>) => Promise<void>;
};

export function CreateTodoForm({
  userId,
  handleCreateTodo,
}: CreateTodoFormProps) {
  const [formData, setFormData] = useState(() => {
    return {
      title: "",
      details: "",
      start: null,
      end: null,
    };
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const { title, details, start, end } = formData;

    const newTodo: Partial<Todo> = {
      user: userId,
      title,
      details,
      start,
      end,
    };

    await handleCreateTodo(newTodo);
    // console.log("formData", newTodo);
  };

  const handleReset: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setFormData({
      title: "",
      details: "",
      start: null,
      end: null,
    });
  };

  const handleUpdateFormData: React.ChangeEventHandler<HTMLInputElement> &
    React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;

    const nextFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(nextFormData);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit} onReset={handleReset}>
      <div>
        <label htmlFor="title">
          <h3>오늘 뭐할래?</h3>
        </label>
        <input
          name="title"
          type="text"
          value={formData.title}
          onChange={handleUpdateFormData}
        />
      </div>
      <div>
        <label htmlFor="details">
          <h3>간단히 적어볼까?</h3>
        </label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleUpdateFormData}
        />
      </div>
      <div>
        <button type="reset">초기화</button>
        <button
          type="submit"
          disabled={!formData.title.trim() || !formData.details.trim()}
        >
          저장
        </button>
      </div>
    </form>
  );
  // 오늘 뭐할래? -> title

  // 간단히 적어볼까? -> details
  // 언제할거야? (skip for now)
}
