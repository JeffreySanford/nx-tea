import { Controller, Get, Param } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tea } from '../schemas/tea.schema';
import { TeasService } from './teas.service';

@Controller('tea')
export class TeasController {
    teasService: TeasService;

    constructor(teasService: TeasService) {
        // Database Address
        const url = "mongodb://localhost:27017/tea"

        // Connecting to database
        MongooseModule.forRoot(url);
        
        this.teasService = teasService;

    }

    @Get('tea')
    async getInventory(): Promise<Array<Tea>> {
        debugger
        console.log('get inventory');
        // CReate a subject here that gets passed back
        const inventory = this.teasService.findAll();


        const inventory_1 = await inventory;
        debugger;
        console.log('inventory ' + inventory_1);
        console.log(inventory_1);
        return inventory_1;
    }

    @Get('tea:id')
    getTea(@Param('id') id: Tea["id"]) {
        const teaId = id;
        debugger
        return this.teasService.findOne(teaId).then((tea) => {
            return tea;
        });
    }
}