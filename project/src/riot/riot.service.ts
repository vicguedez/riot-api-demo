import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { SummonerDto } from 'src/riot/dto/summoner.dto';

const URL = 'api.riotgames.com';

@Injectable()
export class RiotService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  lolSummonerGetByRegionAndName(
    region: RiotRegion,
    name: string,
  ): Observable<AxiosResponse<SummonerDto>> {
    return this.httpService.get(
      `https://${region}.${URL}/lol/summoner/v4/summoners/by-name/${name}`,
      {
        headers: {
          'X-Riot-Token': this.configService.get('RIOT_TOKEN'),
        },
      },
    );
  }
}
