import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { JankenService } from './janken/janken.service';

export type Janken = "Rock" | "Scissors" | "Paper";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly janeknService: JankenService,
  ) {}

  @Get()
  getJanken(): Janken {
    return this.janeknService.getJanken();
  }
}
