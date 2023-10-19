import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTask() {
  //const res = await fetch("http://localhost:3000/api/tasks?page=${page}");
  //const data = await res.json(res);
  //console.log(data);

  return await prisma.task.findMany();
}

async function HomePage() {
  const tasks = await loadTask();
  //console.log(tasks);
  return (
    <section className="container mx-auto">
      {tasks.length > 0 ? (
        <div className="grid grid-cols-3 gap-3 mt-10">
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      ) : (
        <div className="flex h-[calc(100vh-7rem)] justify-center items-center">
          <h3 className="text-4xl font-bold px-3">
            Agrega tu primera tarea...
          </h3>
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/external-yogi-aprelliyanto-outline-color-yogi-aprelliyanto/32/external-task-leadership-yogi-aprelliyanto-outline-color-yogi-aprelliyanto.png"
            alt="external-task-leadership-yogi-aprelliyanto-outline-color-yogi-aprelliyanto"
          />
        </div>
      )}
    </section>
  );
}

export default HomePage;
