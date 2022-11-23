import * as mongoose from 'mongoose';

export interface Tea {
  name: string;
  cost: number;
  price?: number;
  id: number;
  orderQuantity?: number;
  instructions?: string;
  image?: string;
}

export const TeaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cost: { type: Number, required: true },
  price: { type: Number, required: false },
  id: { type: Number, required: true },
  orderQuantity: { type: Number, required: true },
  instructions: { type: String, required: false },
  image: { type: String, required: false }
});