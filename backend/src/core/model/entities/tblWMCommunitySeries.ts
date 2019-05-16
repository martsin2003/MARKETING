import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId
} from 'typeorm';
import { tblWMCommunity } from './tblWMCommunity';

@Entity('tblWMCommunitySeries', { schema: 'public' })
@Index(
  'idx_20814_IX_tblWMCommunitySeries',
  [
    'intWMCommunitySeriesID',
    'intWmCommunitySeriesWmCommunity',
    'varWMCommunitySeriesColor',
    'varWMCommunitySeriesName',
    'varWMCommunitySeriesStatus'
  ],
  { unique: true }
)
export class tblWMCommunitySeries {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intWMCommunitySeriesID'
  })
  intWMCommunitySeriesID: string;

  @ManyToOne(type => tblWMCommunity, tblWMCommunity => tblWMCommunity.tblWmCommunitySeriess, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intWMCommunitySeriesWMCommunityID' })
  intWmCommunitySeriesWmCommunity: tblWMCommunity | null;

  @Column('text', {
    nullable: false,
    name: 'varWMCommunitySeriesName'
  })
  varWMCommunitySeriesName: string;

  @Column('text', {
    nullable: false,
    name: 'varWMCommunitySeriesColor'
  })
  varWMCommunitySeriesColor: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varWMCommunitySeriesStatus'
  })
  varWMCommunitySeriesStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMCommunitySeriesCreatedDate'
  })
  dteWMCommunitySeriesCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMCommunitySeriesModifiedDate'
  })
  dteWMCommunitySeriesModifiedDate: Date;
}
