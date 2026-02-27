"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Badge } from "@repo/ui/components/badge";

export default function Tasks() {
  const tasks = useQuery(api.tasks.get);
  const setFinished = useMutation(api.tasks.setFinished);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map(({ _id, text, isFinished }) => (
        <div key={_id}>
          <div>{text}</div>
          <button onClick={() => setFinished({ id: _id })}>Set finished</button>
          <Badge variant="outline">
            {isFinished ? "Finished" : "Not finished"}
          </Badge>
        </div>
      ))}
    </main>
  );
}
