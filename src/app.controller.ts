import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

export type Janken = "Rock" | "Scissors" | "Paper";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getJanken(): Janken {
    return this.appService.getJanken();
  }
}
