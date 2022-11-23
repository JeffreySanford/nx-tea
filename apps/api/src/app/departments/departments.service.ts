import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { Department } from '../entities/department.entity';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectModel('Department')
    private readonly DepartmentModel: Model<Department>
  ) { }

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const newDepartment = new this.DepartmentModel(createDepartmentDto);
    const result = await newDepartment.save();


    return result.id;
  }

  async findAllDepartments() {

    return  await this.DepartmentModel.find().exec();
  }

  async findOne(id: number) {
    console.log('Find one fired: ' + id);
    debugger
    return await this.DepartmentModel.find({id}).exec();

  }
}