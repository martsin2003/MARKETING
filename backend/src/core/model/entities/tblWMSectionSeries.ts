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
import { tblWMSectionSeriesMarking } from './tblWMSectionSeriesMarking';

@Entity('tblWMSectionSeries', { schema: 'public' })
@Index(
  'idx_20948_IX_tblWMSectionSeries',
  [
    'intWMSectionSeriesID',
    'intWMSectionSeriesWMCommunitySeriesID',
    'intWMSectionSeriesWMSectionID',
    'varWMSectionSeriesColor',
    'varWMSectionSeriesStatus'
  ],
  { unique: true }
)
export class tblWMSectionSeries {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intWMSectionSeriesID'
  })
  intWMSectionSeriesID: string;

  @Column('integer', {
    nullable: false,
    name: 'intWMSectionSeriesWMCommunitySeriesID'
  })
  intWMSectionSeriesWMCommunitySeriesID: number;

  @Column('integer', {
    nullable: false,
    name: 'intWMSectionSeriesWMSectionID'
  })
  intWMSectionSeriesWMSectionID: number;

  @Column('text', {
    nullable: true,
    name: 'varWMSectionSeriesColor'
  })
  varWMSectionSeriesColor: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varWMSectionSeriesStatus'
  })
  varWMSectionSeriesStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMSectionSeriesCreatedDate'
  })
  dteWMSectionSeriesCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMSectionSeriesModifiedDate'
  })
  dteWMSectionSeriesModifiedDate: Date;

  @OneToMany(
    type => tblWMSectionSeriesMarking,
    tblWMSectionSeriesMarking => tblWMSectionSeriesMarking.intWmSectionSeriesMarkingWmSectionSeries,
    { onDelete: 'CASCADE' }
  )
  tblWmSectionSeriesMarkings: tblWMSectionSeriesMarking[];
}
