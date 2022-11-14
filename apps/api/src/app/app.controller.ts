import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Message } from '@tea/api-interfaces';
import { AppService } from './app.service';

interface DatabaseConfig {
  host: string;
  port: number;
}

@Controller()
export class AppController {
constructor(private readonly appService: AppService, private configService: ConfigService) { }

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }


}
