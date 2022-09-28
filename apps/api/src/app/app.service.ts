import { Injectable } from '@nestjs/common';
import { Message, Tea } from '@tea/api-interfaces';
import { take } from 'rxjs';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
