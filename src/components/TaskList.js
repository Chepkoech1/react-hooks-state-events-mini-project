import React from "react";

function TaskList({tasks,click}) {
  const taskList = tasks.map((task,id)=>
  <task
  key={id}
  task={task}
  text={task.text}
  category={task.category}
  click={click}
/>
  )
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    {taskList}
    </div>
  );
}

export default TaskList;
