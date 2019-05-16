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
import { tblRTDisplayAd } from './tblRTDisplayAd';
import { tblRTDisplayMetric } from './tblRTDisplayMetric';

@Entity('tblRTDisplayAdData', { schema: 'public' })
@Index('idx_19754_IX_tblDisplayAdData', [
  'dteRTDisplayAdDataCreatedDate',
  'dteRTDisplayAdDataEndTime',
  'intRTDisplayAdDataID',
  'intRtDisplayAdDataRtDisplayAd',
  'intRtDisplayAdDataRtDisplayMetric'
])
@Index('idx_19754_IX2_tblRTDisplayAdData', [
  'dteRTDisplayAdDataEndTime',
  'intRtDisplayAdDataRtDisplayAd',
  'intRtDisplayAdDataRtDisplayMetric',
  'intRTDisplayAdDataValue'
])
@Index('idx_19754_IX3_tblRTDisplayAdData', [
  'dteRTDisplayAdDataEndTime',
  'intRtDisplayAdDataRtDisplayAd',
  'intRtDisplayAdDataRtDisplayMetric',
  'intRTDisplayAdDataValue'
])
export class tblRTDisplayAdData {
  @Column('bigint', {
    nullable: false,
    primary: true,
    name: 'intRTDisplayAdDataID'
  })
  intRTDisplayAdDataID: string;

  @ManyToOne(type => tblRTDisplayAd, tblRTDisplayAd => tblRTDisplayAd.tblRtDisplayAdDatas, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTDisplayAdDataRTDisplayAdID' })
  intRtDisplayAdDataRtDisplayAd: tblRTDisplayAd | null;

  @ManyToOne(
    type => tblRTDisplayMetric,
    tblRTDisplayMetric => tblRTDisplayMetric.tblRtDisplayAdDatas,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTDisplayAdDataRTDisplayMetricID' })
  intRtDisplayAdDataRtDisplayMetric: tblRTDisplayMetric | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayAdDataEndTime'
  })
  dteRTDisplayAdDataEndTime: Date;

  @Column('bigint', {
    nullable: false,
    default: () => "'0'",
    name: 'intRTDisplayAdDataValue'
  })
  intRTDisplayAdDataValue: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayAdDataCreatedDate'
  })
  dteRTDisplayAdDataCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayAdDataModifiedDate'
  })
  dteRTDisplayAdDataModifiedDate: Date;
}
