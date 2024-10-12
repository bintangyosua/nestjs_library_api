import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: { name: string }) {
    return this.prismaService.author.create({
      data,
    });
  }

  async findAll() {
    return this.prismaService.author.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.author.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: { name: string }) {
    return this.prismaService.author.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prismaService.author.delete({
      where: { id },
    });
  }
}
