import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeasController } from './teas.controller';
import { TeasService } from './teas.service';
import { TeaSchema } from '../entities/tea.entity';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Tea', schema: TeaSchema },
    ])
  ],
  controllers: [TeasController],
  providers: [TeasService],
})
export class TeasModule {
}