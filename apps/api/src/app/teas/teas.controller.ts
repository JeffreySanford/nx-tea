import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateTeaDto } from './dto/create-tea.dto';
import { TeasService } from './teas.service';

@Controller('inventory')
export class TeasController {
    constructor(private readonly teasService: TeasService) { }

    @Post()
    create(@Body() createDepartmentDto: CreateTeaDto) {
      return this.teasService.create(createDepartmentDto);
    }

    @Get()
    async findAll() {

      return  await this.teasService.findAllTeas();
    }
}