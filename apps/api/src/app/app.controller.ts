import { Controller, Get, Param } from '@nestjs/common';
import { Message, Tea } from '@tea/api-interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}
