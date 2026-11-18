import { createFileRoute } from "@tanstack/react-router";
import { ThreadEssay } from "@/components/thread-essay";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <ThreadEssay />;
}
