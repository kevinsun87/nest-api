import { Controller, Get, Post, Body } from '@nestjs/common';
import { DemoService } from './demo.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Get('hello')
  getHello() {
    return this.demoService.getHello();
  }

  @Post('user')
  createUser(@Body() dto: CreateUserDto) {
    return this.demoService.createUser(dto);
  }
}
