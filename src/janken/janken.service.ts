import { Injectable } from '@nestjs/common';
import { Janken } from 'src/app.controller';

@Injectable()
export class JankenService {
  getJanken(): Janken {
    const janken = this.getRandom();
    return janken < 3 ? this.getRock():
            janken < 6 ? this.getScissors():
            janken < 10 ? this.getPaper() : this.getRock();
  }

  getRock(): "Rock" {
    return "Rock";
  }

  getScissors(): "Scissors" {
    return "Scissors";
  }

  getPaper(): "Paper" {
    return "Paper";
  }

  getRandom() {
    return Math.floor(Math.random() * 10);
  }
}
