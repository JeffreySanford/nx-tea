import { Injectable } from '@nestjs/common';
import { Message } from '@tea/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    debugger
    return { message: 'Welcome to api!' };
  }
}
