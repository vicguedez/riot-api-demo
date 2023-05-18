import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SummonerModule } from './summoner/summoner.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Summoner } from './summoner/entity/summoner.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_DB_HOST,
      port: parseInt(process.env.PG_DB_PORT),
      username: process.env.PG_DB_USERNAME,
      password: process.env.PG_DB_PASSWORD,
      database: process.env.PG_DB_NAME,
      synchronize: true,
      logging: true,
      entities: [Summoner],
      subscribers: [],
      migrations: [],
    }),
    SummonerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
