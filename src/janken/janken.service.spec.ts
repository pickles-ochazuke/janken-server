import { Test, TestingModule } from '@nestjs/testing';
import { JankenService } from './janken.service';

describe('JankenService', () => {
  let service: JankenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JankenService],
    }).compile();

    service = module.get<JankenService>(JankenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('じゃんけんするとグーが返ってくるべき', () => {
    expect(service.getJanken()).toEqual("Rock");
  });

  it('getRock を実行するとグーが返ってくるべき', () => {
    expect(service.getRock()).toEqual("Rock");
  });

  it('getScissors を実行するとチョキが返ってくるべき', () => {
    expect(service.getScissors()).toEqual("Scissors");
  });

  it('getPaper を実行するとパーが返ってくるべき', () => {
    expect(service.getPaper()).toEqual("Paper");
  })
});
