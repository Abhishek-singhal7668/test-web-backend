import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DailySalesModule } from './sales/sales.module';

@Module({
  imports: [DailySalesModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/test-web-db')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
