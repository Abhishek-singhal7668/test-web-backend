import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DailySalesController } from './sales.controller';
import { DailySalesService } from './sales.service';
import { DailySalesSchema } from './sales.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'DailySales', schema: DailySalesSchema }]),
  ],
  controllers: [DailySalesController],
  providers: [DailySalesService],
})
export class DailySalesModule {}