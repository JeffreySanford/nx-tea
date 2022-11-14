import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TeaDocument = HydratedDocument<Tea>;

@Schema()
export class Tea {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  cost: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  orderQuantity: number;

  @Prop({ required: true })
  instructions?: string;

  @Prop()
  image: string;
}

export const TeaSchema = SchemaFactory.createForClass(Tea);