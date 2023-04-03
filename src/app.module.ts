import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HistoryController } from './history/history.controller';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [HistoryModule],
  controllers: [AppController, HistoryController],
  providers: [AppService],
})
export class AppModule {}
