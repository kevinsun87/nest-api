import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
} from '@nestjs/common';
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

  @Get('user/:id')
  getUserById(@Param('id') id: string) {
    return this.demoService.getUserById(id);
  }

  @Get('list')
  getList(@Query('page') page: string, @Query('size') size: string) {
    return this.demoService.getList(Number(page), Number(size));
  }

  @Put('user/:id')
  updateUser(@Param('id') id: string, @Body() dto: CreateUserDto) {
    return this.demoService.updateUser(id, dto);
  }

  @Delete('user/:id')
  deleteUser(@Param('id') id: string) {
    return this.demoService.deleteUser(id);
  }
}
