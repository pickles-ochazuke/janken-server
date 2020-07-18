import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JankenService } from './janken/janken.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        JankenService,
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('グー、チョキ、パーのいずれかを返す', () => {
      const janken = appController.getJanken();
      expect(janken === "Rock" || janken === "Paper" || janken === "Scissors").toBe(true);
    });
  });
});
