import { Controller, Get, Param } from '@nestjs/common';
import { Subject } from 'rxjs';
import { Tea } from '../schemas/tea.schema';
import { TeasService } from './teas.service';

@Controller('inventory')
export class TeasController {
    teasService: TeasService;

    constructor(teasService: TeasService) {     
        this.teasService = teasService;
    }

    @Get('tea')
    getInventory(): Tea[] {
        let tempArray;
        console.log('get inventory controller')
            debugger
        this.teasService.findAll().subscribe((res)=>{
            debugger
            tempArray = res;
        }); 
        return tempArray;
    }

    @Get('tea:id')
    getTea(@Param('id') id: Tea["id"]) {

        debugger
        return this.teasService.findOne(id);
    }
}