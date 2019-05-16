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
import { tblRTDisplayKeyword } from './tblRTDisplayKeyword';
import { tblRTDisplayMetric } from './tblRTDisplayMetric';

@Entity('tblRTDisplayKeywordData', { schema: 'public' })
@Index(
  'idx_19823_IX_tblRTDisplayKeywordData',
  [
    'dteRTDisplayKeywordDataCreatedDate',
    'dteRTDisplayKeywordDataEndTime',
    'intRTDisplayKeywordDataID',
    'intRtDisplayKeywordDataRtDisplayKeyword',
    'intRtDisplayKeywordDataRtDisplayMetric'
  ],
  { unique: true }
)
@Index('idx_19823_IX2_tblRTDisplayKeywordData', [
  'dteRTDisplayKeywordDataEndTime',
  'intRTDisplayKeywordDataID',
  'intRtDisplayKeywordDataRtDisplayKeyword',
  'intRtDisplayKeywordDataRtDisplayMetric',
  'intRTDisplayKeywordDataValue'
])
export class tblRTDisplayKeywordData {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTDisplayKeywordDataID'
  })
  intRTDisplayKeywordDataID: string;

  @ManyToOne(
    type => tblRTDisplayKeyword,
    tblRTDisplayKeyword => tblRTDisplayKeyword.tblRtDisplayKeywordDatas,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTDisplayKeywordDataRTDisplayKeywordID' })
  intRtDisplayKeywordDataRtDisplayKeyword: tblRTDisplayKeyword | null;

  @ManyToOne(
    type => tblRTDisplayMetric,
    tblRTDisplayMetric => tblRTDisplayMetric.tblRtDisplayKeywordDatas,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTDisplayKeywordDataRTDisplayMetricID' })
  intRtDisplayKeywordDataRtDisplayMetric: tblRTDisplayMetric | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayKeywordDataEndTime'
  })
  dteRTDisplayKeywordDataEndTime: Date;

  @Column('integer', {
    nullable: false,
    name: 'intRTDisplayKeywordDataValue'
  })
  intRTDisplayKeywordDataValue: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayKeywordDataCreatedDate'
  })
  dteRTDisplayKeywordDataCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayKeywordDataModifiedDate'
  })
  dteRTDisplayKeywordDataModifiedDate: Date;
}
