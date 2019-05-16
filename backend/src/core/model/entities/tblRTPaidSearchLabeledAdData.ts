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

@Entity('tblRTPaidSearchLabeledAdData', { schema: 'public' })
@Index('idx_20382_IX_tblRTPaidSearchLabeledAdData', [
  'dteRTPaidSearchLabeledAdDataCreatedDate',
  'dteRTPaidSearchLabeledAdDataEndTime',
  'intRTPaidSearchLabeledAdDataID',
  'intRtPaidSearchLabeledAdDataRtPaidSearchAd',
  'intRtPaidSearchLabeledAdDataRtPaidSearchMetric',
  'varRTPaidSearchLabeledAdDataLabel'
])
@Index('idx_20382_IX2_tblRTPaidSearchLabeledAdData', [
  'dteRTPaidSearchLabeledAdDataEndTime',
  'intRtPaidSearchLabeledAdDataRtPaidSearchAd',
  'intRtPaidSearchLabeledAdDataRtPaidSearchMetric',
  'intRTPaidSearchLabeledAdDataValue',
  'varRTPaidSearchLabeledAdDataLabel'
])
export class tblRTPaidSearchLabeledAdData {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTPaidSearchLabeledAdDataID'
  })
  intRTPaidSearchLabeledAdDataID: string;

  @ManyToOne(
    type => tblRTPaidSearchAd,
    tblRTPaidSearchAd => tblRTPaidSearchAd.tblRtPaidSearchLabeledAdDatas,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTPaidSearchLabeledAdDataRTPaidSearchAdID' })
  intRtPaidSearchLabeledAdDataRtPaidSearchAd: tblRTPaidSearchAd | null;

  @ManyToOne(
    type => tblRTPaidSearchMetric,
    tblRTPaidSearchMetric => tblRTPaidSearchMetric.tblRtPaidSearchLabeledAdDatas,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTPaidSearchLabeledAdDataRTPaidSearchMetricID' })
  intRtPaidSearchLabeledAdDataRtPaidSearchMetric: tblRTPaidSearchMetric | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchLabeledAdDataEndTime'
  })
  dteRTPaidSearchLabeledAdDataEndTime: Date;

  @Column('integer', {
    nullable: false,
    name: 'intRTPaidSearchLabeledAdDataValue'
  })
  intRTPaidSearchLabeledAdDataValue: number;

  @Column('text', {
    nullable: false,
    name: 'varRTPaidSearchLabeledAdDataLabel'
  })
  varRTPaidSearchLabeledAdDataLabel: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchLabeledAdDataCreatedDate'
  })
  dteRTPaidSearchLabeledAdDataCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchLabeledAdDataModifiedDate'
  })
  dteRTPaidSearchLabeledAdDataModifiedDate: Date;
}
