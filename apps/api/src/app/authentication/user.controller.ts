import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Subject } from 'rxjs/internal/Subject';
import { AuthenticatePostDTO } from './dto/authenticate-post.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  isAuthenticated = new Subject<boolean>;

  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Post('authenticate/')
    authenticate(@Body() body: AuthenticatePostDTO): boolean {
      
      console.log(`user controller authenticated with ${JSON.stringify(body.username)}`)
      // Here reach out to the mongo collection and verify
      return true;
    }

  @Get()
  async findAll() {

    return await this.userService.findAllUsers();
  }

  @Get(':username')
  async findUser(@Param('username') username: string): Promise<any> {
    const queryName = username.slice(1,username.length);
    return await this.userService.findOne(queryName);
  }
}