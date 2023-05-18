import { Module } from '@nestjs/common';
import { SummonerController } from './summoner.controller';
import { SummonerService } from './summoner.service';
import { RiotModule } from 'src/riot/riot.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Summoner } from './entity/summoner.entity';

@Module({
  imports: [RiotModule, TypeOrmModule.forFeature([Summoner])],
  controllers: [SummonerController],
  providers: [SummonerService],
})
export class SummonerModule {}
