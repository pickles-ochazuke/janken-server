import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JankenService } from './janken/janken.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, JankenService],
})
export class AppModule {}
