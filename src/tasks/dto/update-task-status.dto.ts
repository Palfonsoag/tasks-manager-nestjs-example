import { TaskStatus } from "../task.model";

export class updateTaskStatusDto {
  id: string;
  status: TaskStatus;
}
