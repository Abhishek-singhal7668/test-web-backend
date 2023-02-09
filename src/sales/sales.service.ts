import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { DailySales } from './sales.model';

@Injectable()
export class DailySalesService {
  constructor(
    @InjectModel('DailySales') private readonly dailySalesModel: Model<DailySales>,
  ) {}

  async insertData(brand: string, transactionType: string, totalOrders: number, 
    totalOrderValue: number, grossMarginPercentage: number) {
    const date:Date = new Date();
    const newProduct = new this.dailySalesModel({
      date,
      brand,
      transactionType,
      totalOrders,
      totalOrderValue,
      grossMarginPercentage
    });
    const result = await newProduct.save();
    return result.id as string;
  }

  async getSalesData() {
    const totalData = await this.dailySalesModel.find().exec();
    return totalData.map(data => ({
      id: data.id,
      date:data.date,
      brand: data.brand,
      transactionType: data.transactionType,
      totalOrders: data.totalOrders,
      totalOrderValue: data.totalOrderValue,
      grossMarginPercentage: data.grossMarginPercentage,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    }));
  }
}