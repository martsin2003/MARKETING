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
import { tblRTGAMetric } from './tblRTGAMetric';
import { tblRTGALabeledDataDimension } from './tblRTGALabeledDataDimension';

@Entity('tblRTGALabeledData', { schema: 'public' })
@Index('idx_20127_IX2_tblRTGALabeledData', [
  'dteRTGALabeledDataDate',
  'intRTGALabeledDataID',
  'intRtgaLabeledDataMetric',
  'intRTGALabeledDataOrder',
  'intRtgaLabeledDataRtCampaign',
  'intRTGALabeledDataValue',
  'varRTGALabeledDataLabel'
])
@Index('idx_20127_IX3_tblRTGALabeledData', [
  'dteRTGALabeledDataDate',
  'intRtgaLabeledDataMetric',
  'intRTGALabeledDataValue',
  'varRTGALabeledDataLabel'
])
@Index('idx_20127_IX_tblRTGALabeledData', [
  'dteRTGALabeledDataDate',
  'intRtgaLabeledDataMetric',
  'intRtgaLabeledDataRtCampaign',
  'varRTGALabeledDataLabel'
])
@Index('idx_20127_IX4_tblRTGALabeledData', [
  'dteRTGALabeledDataDate',
  'intRtgaLabeledDataMetric',
  'intRTGALabeledDataValue',
  'varRTGALabeledDataLabel'
])
export class tblRTGALabeledData {
  @Column('bigint', {
    nullable: false,
    primary: true,
    name: 'intRTGALabeledDataID'
  })
  intRTGALabeledDataID: string;

  @ManyToOne(type => tblRTCampaign, tblRTCampaign => tblRTCampaign.tblRtgaLabeledDatas, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTGALabeledDataRTCampaignID' })
  intRtgaLabeledDataRtCampaign: tblRTCampaign | null;

  @ManyToOne(type => tblRTGAMetric, tblRTGAMetric => tblRTGAMetric.tblRtgaLabeledDatas, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTGALabeledDataMetricID' })
  intRtgaLabeledDataMetric: tblRTGAMetric | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGALabeledDataDate'
  })
  dteRTGALabeledDataDate: Date;

  @Column('bigint', {
    nullable: false,
    default: () => "'0'",
    name: 'intRTGALabeledDataValue'
  })
  intRTGALabeledDataValue: string;

  @Column('text', {
    nullable: false,
    name: 'varRTGALabeledDataLabel'
  })
  varRTGALabeledDataLabel: string;

  @Column('integer', {
    nullable: false,
    name: 'intRTGALabeledDataOrder'
  })
  intRTGALabeledDataOrder: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGALabeledDataCreatedDate'
  })
  dteRTGALabeledDataCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGALabeledDataModifiedDate'
  })
  dteRTGALabeledDataModifiedDate: Date;

  @OneToMany(
    type => tblRTGALabeledDataDimension,
    tblRTGALabeledDataDimension =>
      tblRTGALabeledDataDimension.intRtgaLabeledDataDimensionRtgaLabeledData,
    { onDelete: 'CASCADE' }
  )
  tblRtgaLabeledDataDimensions: tblRTGALabeledDataDimension[];
}
