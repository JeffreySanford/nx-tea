import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeasController } from './teas.controller';
import { TeasService } from './teas.service';
import { Tea, TeaSchema } from '../schemas/tea.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/tea'),
    MongooseModule.forFeature([{ name: Tea.name, schema: TeaSchema }])],
  controllers: [TeasController],
  providers: [TeasService],
})
export class TeasModule { 
}