
import { Injectable } from '@nestjs/common';
import { Tea } from '../entities/tea.entity';
import { CreateTeaDto } from './dto/create-tea.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TeasService {
  constructor(
    @InjectModel('Tea')
    private readonly TeaModel: Model<Tea>
  ) { }

  async create(createTeaDto: CreateTeaDto): Promise<Tea> {
    const newTea = new this.TeaModel(createTeaDto);
    const result = await newTea.save();

    return result.id;
  }

  async findAllTeas() {
    
    return await this.TeaModel.find().exec();
  }

  async findOne(id: number) {
    console.log('Find one fired: ' + id);
    debugger
    return await this.TeaModel.find({ id }).exec();

  }
}