import * as mongoose from 'mongoose';

export const enum TransactionType{"Trading", "Facilitation"};
export const DailySalesSchema = new mongoose.Schema({
  date: Date,
  brand: String,
  transactionType: {type: String, enum: ['Trading','Facilitation']},
  totalOrders: Number,
  totalOrderValue: Number,
  grossMarginPercentage: Number,
},
{
  timestamps: true
});

export interface DailySales extends mongoose.Document {
  id: string;
  date: Date;
  brand: string;
  transactionType: TransactionType;
  totalOrders: number;
  totalOrderValue: number;
  grossMarginPercentage: number;
  createdAt: Date;
  updatedAt: Date;
}