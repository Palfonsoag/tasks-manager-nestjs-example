import * as uuid from "uuid/v1";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";

@Injectable()
export class TasksService {
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task: Task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter(
  //       (task: Task) =>
  //         task.title.includes(search) || task.description.includes(search)
  //     );
  //   }
  //   return tasks;
  // }
  // getTaskById(id: string): Task {
  //   const foundTask = this.tasks.find((task: Task) => task.id === id);
  //   if (!foundTask) {
  //     throw new NotFoundException(`Task with ID: "${id}" not found`);
  //   }
  //   return foundTask;
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // deleteTask(id: string): void {
  //   const foundTask = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task: Task) => task.id !== foundTask.id);
  // }
  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
