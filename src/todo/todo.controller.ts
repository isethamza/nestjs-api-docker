import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {

 constructor(private todoService: TodoService) {}

 @Get()
 getTodos() {
   return this.todoService.findAll();
 }

 @Post()
 createTodo(@Body('title') title: string) {
   return this.todoService.create(title);
 }

}