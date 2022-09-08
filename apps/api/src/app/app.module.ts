import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  static port: string
  constructor() {
    //  AppModule.port = configService.get('HTTP_PORT')
    AppModule.port = '3333';
  }
}
