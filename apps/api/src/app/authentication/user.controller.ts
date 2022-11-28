import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Subject } from 'rxjs/internal/Subject';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  isUserAuthenticated = new Subject<boolean>;

  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Post('authenticate')
    authenticate(userName: string, password: string): boolean {
      console.log(userName, password)

      // Here reach out to the mongo collection and verify
      return true;
    }

  @Get()
  async findAll() {

    return await this.userService.findAllUsers();
  }
}