import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Summoner extends BaseEntity {
  @PrimaryColumn()
  id: string;
  @Column()
  puuid: string;
  @Column()
  accountId: string;
  @Column()
  region: string;
  @Column()
  name: string;
}
