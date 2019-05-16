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
import { tblRTPaidSearchAd } from './tblRTPaidSearchAd';
import { tblRTPaidSearchMetric } from './tblRTPaidSearchMetric';

@Entity('tblRTPaidSearchAdData', { schema: 'public' })
@Index('idx_20286_IX_tblPaidSearchAdData', [
  'dteRTPaidSearchAdDataCreatedDate',
  'dteRTPaidSearchAdDataEndTime',
  'intRTPaidSearchAdDataID',
  'intRtPaidSearchAdDataRtPaidSearchAd',
  'intRtPaidSearchAdDataRtPaidSearchMetric'
])
@Index('idx_20286_IX3_tblRTPaidSearchAdData', [
  'dteRTPaidSearchAdDataEndTime',
  'intRtPaidSearchAdDataRtPaidSearchAd',
  'intRtPaidSearchAdDataRtPaidSearchMetric',
  'intRTPaidSearchAdDataValue'
])
@Index('idx_20286_IX4_tblRTPaidSearchAdData', [
  'dteRTPaidSearchAdDataEndTime',
  'intRtPaidSearchAdDataRtPaidSearchAd',
  'intRtPaidSearchAdDataRtPaidSearchMetric',
  'intRTPaidSearchAdDataValue'
])
@Index('idx_20286_IX2_tblRTPaidSearchAdData', [
  'dteRTPaidSearchAdDataEndTime',
  'intRtPaidSearchAdDataRtPaidSearchAd',
  'intRtPaidSearchAdDataRtPaidSearchMetric',
  'intRTPaidSearchAdDataValue'
])
export class tblRTPaidSearchAdData {
  @Column('bigint', {
    nullable: false,
    primary: true,
    name: 'intRTPaidSearchAdDataID'
  })
  intRTPaidSearchAdDataID: string;

  @ManyToOne(
    type => tblRTPaidSearchAd,
    tblRTPaidSearchAd => tblRTPaidSearchAd.tblRtPaidSearchAdDatas,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTPaidSearchAdDataRTPaidSearchAdID' })
  intRtPaidSearchAdDataRtPaidSearchAd: tblRTPaidSearchAd | null;

  @ManyToOne(
    type => tblRTPaidSearchMetric,
    tblRTPaidSearchMetric => tblRTPaidSearchMetric.tblRtPaidSearchAdDatas,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTPaidSearchAdDataRTPaidSearchMetricID' })
  intRtPaidSearchAdDataRtPaidSearchMetric: tblRTPaidSearchMetric | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchAdDataEndTime'
  })
  dteRTPaidSearchAdDataEndTime: Date;

  @Column('bigint', {
    nullable: false,
    default: () => "'0'",
    name: 'intRTPaidSearchAdDataValue'
  })
  intRTPaidSearchAdDataValue: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchAdDataCreatedDate'
  })
  dteRTPaidSearchAdDataCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchAdDataModifiedDate'
  })
  dteRTPaidSearchAdDataModifiedDate: Date;
}
