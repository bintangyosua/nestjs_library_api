import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async getUsers() {
    return this.prismaService.user.findMany({
      select: {
        id: true,
        username: true,
        password: false,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async createUser(data: { username: string; password: string }) {
    return this.prismaService.user.create({
      data,
      select: {
        id: true,
        username: true,
        password: false,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async getUserById(id: number) {
    return this.prismaService.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        password: false,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async getUserByUsername(username: string) {
    return this.prismaService.user.findUnique({
      where: { username },
    });
  }

  async editUser(
    id: number,
    data: {
      username?: string;
      password?: string;
    },
  ) {
    return this.prismaService.user.update({
      where: { id },
      data,
      select: {
        id: true,
        username: true,
        password: false,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async deleteUser(id: number) {
    return this.prismaService.user.delete({
      where: { id },
      select: {
        id: true,
        username: true,
        password: false,
        created_at: true,
        updated_at: true,
      },
    });
  }
}
