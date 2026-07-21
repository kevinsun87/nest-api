import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class DemoService {
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
}
