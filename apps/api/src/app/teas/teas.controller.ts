import { Controller, Get, Param } from '@nestjs/common';
import { Tea } from '../schemas/tea.schema';
import { TeasService } from './teas.service';

@Controller('tea')
export class TeasController {
    teasService: TeasService;

    constructor(teasService: TeasService) {     
        this.teasService = teasService;
    }

    @Get('tea')
    async getInventory(): Promise<Array<Tea>> {

        return await this.teasService.findAll();
    }

    @Get('tea:id')
    async getTea(@Param('id') id: Tea["id"]) {

        return await this.teasService.findOne(id);
    }
}