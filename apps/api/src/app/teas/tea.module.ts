import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeasController } from './teas.controller';
import { TeasService } from './teas.service';
import { Tea, TeaSchema } from '../schemas/tea.schema';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '../config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    })
  ],
  controllers: [TeasController],
  providers: [TeasService],
})
export class TeasModule { 
}