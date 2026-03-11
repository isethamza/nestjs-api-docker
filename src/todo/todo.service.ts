import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
//import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class TodoService {

  create(title: string) {
    return prisma.todo.create({
      data: { title }
    });
  }

  findAll() {
    return prisma.todo.findMany();
  }
}