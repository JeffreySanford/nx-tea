import { Injectable } from '@nestjs/common';
import { Message } from '@tea/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    
    return { message: 'This site is in development.  Feel free to look around!' };
  }
}
