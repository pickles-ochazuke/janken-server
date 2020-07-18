import { Injectable } from '@nestjs/common';
import { Janken } from 'src/app.controller';

@Injectable()
export class JankenService {
  getJanken(): Janken {
    return 'Rock';
  }

  getRock(): Janken {
    return "Rock";
  }
}
