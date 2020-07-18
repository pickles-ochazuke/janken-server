import { Injectable } from '@nestjs/common';
import { Janken } from './app.controller';

@Injectable()
export class AppService {
  getJanken(): Janken {
    return 'Rock';
  }
}
