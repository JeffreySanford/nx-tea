import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tea, TeaDocument } from '../schemas/tea.schema';
import { CreateTeaDto } from './dto/create-tea.dto';

@Injectable()
export class TeasService {
  constructor(@InjectModel(Tea.name) private teaModel: Model<TeaDocument>) {}

  async create(createTeaDto: CreateTeaDto): Promise<Tea> {
    debugger
    const createdTea = new this.teaModel(createTeaDto);
    return createdTea.save();
  }

  async findAll(): Promise<Tea[]> {
   debugger
    return this.teaModel.find().exec();
  }

  async findOne(id: number): Promise<Array<Tea>> {
    debugger
    return this.teaModel.findById(id);
  }

  getInventory() {
    debugger
    const teas = this.findAll();

    if(teas) {
      debugger
    }

    else {
      debugger

      return [];
    }
  }

  getTea(id: Tea["id"]) {
    debugger
  }
}
