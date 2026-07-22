import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class DemoService {
  private users = [
    { id: '1', name: '大伟老师', age: 30, email: 'dawei@example.com' },
    { id: '2', name: '小明', age: 25, email: 'xiaoming@example.com' },
  ];

  getHello() {
    return {
      message: '你好，这是第一个NestJS接口',
      timestamp: new Date().toISOString(),
    };
  }

  createUser(dto: CreateUserDto) {
    return {
      success: true,
      message: `用户 ${dto.name} 创建成功`,
      data: {
        id: Date.now(),
        name: dto.name,
        age: dto.age,
        email: dto.email ?? '未填写',
      },
    };
  }

  getUserById(id: string) {
    return {
      id,
      name: `用户${id}`,
      message: `这是id为${id}的用户信息`,
    };
  }

  getList(page: number, size: number) {
    const currentPage = page || 1;
    const pageSize = size || 10;
    return {
      page: currentPage,
      size: pageSize,
      total: 100,
      message: `第 ${currentPage} 页，每页 ${pageSize} 条`,
    };
  }

  updateUser(id: string, dto: CreateUserDto) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      return { success: false, message: `用户 ${id} 不存在` };
    }
    // 更新数据
    this.users[index] = { ...this.users[index], ...dto };
    return { success: true, message: '更新成功', data: this.users[index] };
  }

  deleteUser(id: string) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) {
      return { success: false, message: `用户 ${id} 不存在` };
    }
    // 从数组中删除
    this.users.splice(index, 1);
    return { success: true, message: `用户 ${id} 已删除` };
  }
}
