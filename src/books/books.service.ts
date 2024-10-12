import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<any> {
    return this.prismaService.book.findMany();
  }

  async findOne(id: number): Promise<any> {
    return this.prismaService.book.findUnique({
      where: {
        id,
      },
    });
  }

  async create(book: { title: string; author_id: number }): Promise<any> {
    return this.prismaService.book.create({
      data: book,
    });
  }

  async update(
    id: number,
    book: { title: string; author_id: number },
  ): Promise<any> {
    return this.prismaService.book.update({
      where: {
        id,
      },
      data: book,
    });
  }

  async remove(id: number): Promise<any> {
    return this.prismaService.book.delete({
      where: {
        id,
      },
    });
  }
}
