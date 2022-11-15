
import { Injectable } from '@nestjs/common';
import { Tea } from '../schemas/tea.schema';
import { CreateTeaDto } from './dto/create-tea.dto';
import * as mongoose from 'mongoose';
import { Subject } from 'rxjs';

@Injectable()
export class TeasService {
  teaModel: any;
  private inventory = new Subject<Tea[]>;

  constructor() {
    // this.teaModel = mongoose.connect('mongodb://teaadmin:p4ssw0rd@localhost/tea');
    // mongoose.connect('mongodb://teaadmin:p4ssw0rd@localhost/tea');
    // mongoose.connection.on('open', function(ref) {
    //   console.log('Connected to mongo server.');
    //   debugger
    // });

    // mongoose.connection.on('error', function(err) {
    //   console.log('Could not connect to mongo server!');
    //   debugger
    //   return console.log(err);
    // });
  }

  create(createTeaDto: CreateTeaDto): Promise<Tea> {

    const createdTea = new this.teaModel(createTeaDto);
    return createdTea.save();
  }

  findAll(): Subject<Tea[]> {

    console.log('get inventory service')

    mongoose.connect('mongodb+srv://teaadmin:p4ssw0rd@127.0.0.1/tea');
    mongoose.connection.on('open', function (ref) {
      console.log('Connected to mongo server. Messge: ' + ref);
      this.inventory.next(this.teaModel.find().exec())
    });

    mongoose.connection.on('error', function (err) {
      console.log('Could not connect to mongo server!');

      return console.log(err);
    });

    return this.inventory;

  }

  findOne(id: number): Promise<Array<Tea>> {

    return this.teaModel.findById(id);
  }
}
