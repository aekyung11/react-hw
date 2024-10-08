import { getPb } from "@/api/pocketbase";
import { RecordModel } from "pocketbase";
import { useCallback, useEffect, useState } from "react";

export type Todo = {
  id: string;
  created: Date;
  updated: Date;
  user: string;
  completed: boolean;
  archivedAt: Date | null;
  title: string;
  details: string;
  start: Date | null;
  end: Date | null;
};

const transformToTodo = (record: RecordModel) => ({
  id: record.id,
  created: new Date(record["created"]),
  updated: new Date(record["updated"]),
  user: record.user,
  completed: record.completed,
  archivedAt: record["archived_at"] ? new Date(record["archived_at"]) : null,
  title: record.title,
  details: record.details,
  start: record["start"] ? new Date(record["start"]) : null,
  end: record["end"] ? new Date(record["end"]) : null,
});

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTodos() {
      const pb = getPb();
      setLoading(true);
      try {
        const records = await pb.collection("todos").getFullList({
          sort: "-created",
          requestKey: null,
        });
        setTodos(records.map(transformToTodo));
      } catch (error) {
        console.error("Error!!!!!!", error);
      } finally {
        setLoading(false);
      }
    }

    getTodos();
  }, []);

  useEffect(() => {
    const pb = getPb();
    pb.collection("todos").subscribe("*", (e) => {
      setTodos((prevTodos) => {
        // strictmode때문에 useEffect가 두 번씩 일어나는 현상 발생, 같은 record에서 create가 두 번 발생함.
        const todoIndex = prevTodos.findIndex((todo) => {
          return todo.id === e.record.id;
        });
        if (todoIndex > -1) {
          const newTodos = [...prevTodos];
          newTodos[todoIndex] = transformToTodo(e.record);
          return newTodos;
        }
        if (todoIndex === -1) {
          return [transformToTodo(e.record), ...prevTodos];
        }
        return prevTodos;
      });
    });
  }, []);

  const create = useCallback(async (newTodo: Partial<Todo>) => {
    const pb = getPb();
    await pb
      .collection("todos")
      .create({ ...newTodo, archived_at: newTodo.archivedAt });
  }, []);

  const setCompletedTo = useCallback(
    async (todoId: string, completed: boolean) => {
      const pb = getPb();
      await pb.collection("todos").update(todoId, {
        completed,
      });
    },
    []
  );

  const setArchivedAt = useCallback(
    async (todoId: string, archivedAt: Date | null) => {
      const pb = getPb();
      await pb.collection("todos").update(todoId, {
        archived_at: archivedAt,
      });
    },
    []
  );

  return { todos, loading, create, setCompletedTo, setArchivedAt };
}
