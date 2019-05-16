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
import { tblRTCampaign } from './tblRTCampaign';
import { tblRTFBIMetric } from './tblRTFBIMetric';

@Entity('tblRTFBILabeledData', { schema: 'public' })
@Index(
  'idx_20035_IX_tblRTFBILabeledData',
  [
    'dteRTFBILabeledDataCreatedDate',
    'dteRTFBILabeledDataEndTime',
    'dteRTFBILabeledDataModifiedDate',
    'intRTFBILabeledDataID',
    'intRtfbiLabeledDataMetric',
    'intRtfbiLabeledDataRtCampaign',
    'intRTFBILabeledDataValue',
    'varRTFBILabeledDataLabel'
  ],
  { unique: true }
)
@Index('idx_20035_IX2_tblRTFBILabeledData', [
  'dteRTFBILabeledDataEndTime',
  'intRtfbiLabeledDataMetric',
  'intRTFBILabeledDataOrder',
  'intRtfbiLabeledDataRtCampaign',
  'intRTFBILabeledDataValue',
  'varRTFBILabeledDataLabel'
])
@Index('idx_20035_IX3_tblRTFBILabeledData', [
  'dteRTFBILabeledDataEndTime',
  'intRtfbiLabeledDataMetric',
  'intRTFBILabeledDataOrder',
  'intRTFBILabeledDataValue',
  'varRTFBILabeledDataLabel'
])
export class tblRTFBILabeledData {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTFBILabeledDataID'
  })
  intRTFBILabeledDataID: string;

  @ManyToOne(type => tblRTCampaign, tblRTCampaign => tblRTCampaign.tblRtfbiLabeledDatas, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTFBILabeledDataRTCampaignID' })
  intRtfbiLabeledDataRtCampaign: tblRTCampaign | null;

  @ManyToOne(type => tblRTFBIMetric, tblRTFBIMetric => tblRTFBIMetric.tblRtfbiLabeledDatas, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTFBILabeledDataMetricID' })
  intRtfbiLabeledDataMetric: tblRTFBIMetric | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBILabeledDataEndTime'
  })
  dteRTFBILabeledDataEndTime: Date;

  @Column('integer', {
    nullable: false,
    name: 'intRTFBILabeledDataValue'
  })
  intRTFBILabeledDataValue: number;

  @Column('text', {
    nullable: false,
    name: 'varRTFBILabeledDataLabel'
  })
  varRTFBILabeledDataLabel: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBILabeledDataCreatedDate'
  })
  dteRTFBILabeledDataCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBILabeledDataModifiedDate'
  })
  dteRTFBILabeledDataModifiedDate: Date;

  @Column('integer', {
    nullable: false,
    name: 'intRTFBILabeledDataOrder'
  })
  intRTFBILabeledDataOrder: number;
}
