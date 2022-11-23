import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Department, DepartmentSchema } from '../entities/department.entity';

@Module({
  imports: [
    // 'mongodb+srv://teaadmin:p4ssw0rd@broken-leaf.h9pptcq.mongodb.net/?retryWrites=true&w=majority',
    MongooseModule.forFeature([
      { name: 'Department', schema: DepartmentSchema },
    ]),
  ],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
})
export class DepartmentsModule { }