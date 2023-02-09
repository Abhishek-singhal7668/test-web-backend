import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { DailySalesService } from './sales.service';

@Controller('api/v1/brand_sales_daily')
export class DailySalesController {
  constructor(private readonly dailySalesService: DailySalesService) {enum TransactionType{"Trading", "Facilitation"};}

  @Post()
  async addProduct(
    @Body('data') totalData: any
  ) {
    const ret: any = [];
    for(let i=0; i<totalData.length; i++){
        const generatedId = await this.dailySalesService.insertData(
        totalData[i].brand,
        totalData[i].transactionType,
        totalData[i].totalOrders,
        totalData[i].totalOrderValue,
        totalData[i].grossMarginPercentage);
        console.log('saved');
      }
    return {status:"success"};
  }

  @Get()
  async getAllProducts() {
    const products = await this.dailySalesService.getSalesData();
    return products;
  }
}