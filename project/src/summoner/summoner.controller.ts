import { Controller, Get, Param } from '@nestjs/common';
import { SummonerService } from './summoner.service';
import { GetByNameDto } from './dto/get-by-name.dto';
import { Summoner } from './entity/summoner.entity';

@Controller('summoner')
export class SummonerController {
  constructor(private readonly summonerService: SummonerService) {}

  @Get('/:region/:name')
  async byName(@Param() param: GetByNameDto): Promise<Summoner> {
    return this.summonerService.getByRegionAndName(param.region, param.name);
  }
}
