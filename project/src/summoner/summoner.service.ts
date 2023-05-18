import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RiotService } from 'src/riot/riot.service';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Summoner } from './entity/summoner.entity';

@Injectable()
export class SummonerService {
  constructor(
    private readonly riotService: RiotService,
    @InjectRepository(Summoner)
    private summonerRepository: Repository<Summoner>,
  ) {}

  async getByRegionAndName(
    region: RiotRegion,
    name: string,
  ): Promise<Summoner> {
    let summoner = await this.summonerRepository.findOneBy({
      region: region,
      name: name,
    });

    if (!summoner) {
      const { data } = await firstValueFrom(
        this.riotService.lolSummonerGetByRegionAndName(region, name).pipe(
          catchError((error: AxiosError) => {
            if (error.response.status == HttpStatus.NOT_FOUND)
              throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
            else throw error;
          }),
        ),
      );

      summoner = new Summoner();
      summoner.id = data.id;
      summoner.puuid = data.puuid;
      summoner.accountId = data.accountId;
      summoner.region = region;
      summoner.name = data.name;

      await summoner.save();
    }

    return summoner;
  }
}
