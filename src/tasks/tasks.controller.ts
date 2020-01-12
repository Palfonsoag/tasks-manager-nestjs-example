//the controller have some functions called handlers. This Functions receives the http request and handle it

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  UseGuards
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { GetTasksFilterDto } from "./dto/get-tasks-filter.dto";
import { TaskStatusValidationPipe } from "./pipes/task-status-validation.pipes";
import { Task } from "./task.entity";
import { TaskStatus } from "./task-status.enum";
import { User } from "src/auth/user.entity";
import { GetUser } from "src/auth/get-user.decorator";

@Controller("tasks")
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(
    @Query(ValidationPipe) filterDto: GetTasksFilterDto,
    @GetUser() user: User
  ): Promise<Task[]> {
    return this.taskService.getTasks(filterDto, user);
  }

  @Get("/:id")
  getTaskById(
    @Param("id", ParseIntPipe) id: number,
    @GetUser() user: User
  ): Promise<Task> {
    return this.taskService.getTaskById(id, user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: User
  ): Promise<Task> {
    return this.taskService.createTask(createTaskDto, user);
  }

  // @Patch("/:id/status")
  // updateTaskStatus(
  //   @Param("id", ParseIntPipe) id: number,
  //   @Body("status", TaskStatusValidationPipe) status: TaskStatus
  // ): Promise<Task> {
  //   return this.taskService.updateTaskStatus(id, status);
  // }

  @Delete("/:id")
  deleteTask(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.taskService.deleteTask(id);
  }
}
