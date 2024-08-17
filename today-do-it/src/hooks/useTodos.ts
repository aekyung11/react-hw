import { getPb } from "@/api/pocketbase";
import { useEffect, useState } from "react";

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
        setTodos(
          records.map((record) => ({
            id: record.id,
            created: new Date(record["created"]),
            updated: new Date(record["updated"]),
            user: record.user,
            completed: record.completed,
            archivedAt: record["archived_at"]
              ? new Date(record["archived_at"])
              : null,
            title: record.title,
            details: record.details,
            start: record["start"] ? new Date(record["start"]) : null,
            end: record["end"] ? new Date(record["end"]) : null,
          }))
        );
      } catch (error) {
        console.error("Error!!!!!!", error);
      } finally {
        setLoading(false);
      }
    }

    getTodos();
  }, []);

  return { todos, loading };
}
