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

@Entity('tblRTDisplayLabeledAdData', { schema: 'public' })
@Index('idx_19829_IX_tblRTDisplayLabeledAdData', [
  'dteRTDisplayLabeledAdDataCreatedDate',
  'dteRTDisplayLabeledAdDataEndTime',
  'intRTDisplayLabeledAdDataID',
  'intRtDisplayLabeledAdDataRtDisplayAd',
  'intRtDisplayLabeledAdDataRtDisplayMetric',
  'varRTDisplayLabeledAdDataLabel'
])
@Index('idx_19829_IX2_tblRTDisplayLabeledAdData', [
  'dteRTDisplayLabeledAdDataEndTime',
  'intRtDisplayLabeledAdDataRtDisplayAd',
  'intRtDisplayLabeledAdDataRtDisplayMetric',
  'intRTDisplayLabeledAdDataValue',
  'varRTDisplayLabeledAdDataLabel'
])
export class tblRTDisplayLabeledAdData {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTDisplayLabeledAdDataID'
  })
  intRTDisplayLabeledAdDataID: string;

  @ManyToOne(type => tblRTDisplayAd, tblRTDisplayAd => tblRTDisplayAd.tblRtDisplayLabeledAdDatas, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTDisplayLabeledAdDataRTDisplayAdID' })
  intRtDisplayLabeledAdDataRtDisplayAd: tblRTDisplayAd | null;

  @ManyToOne(
    type => tblRTDisplayMetric,
    tblRTDisplayMetric => tblRTDisplayMetric.tblRtDisplayLabeledAdDatas,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTDisplayLabeledAdDataRTDisplayMetricID' })
  intRtDisplayLabeledAdDataRtDisplayMetric: tblRTDisplayMetric | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayLabeledAdDataEndTime'
  })
  dteRTDisplayLabeledAdDataEndTime: Date;

  @Column('integer', {
    nullable: false,
    name: 'intRTDisplayLabeledAdDataValue'
  })
  intRTDisplayLabeledAdDataValue: number;

  @Column('text', {
    nullable: false,
    name: 'varRTDisplayLabeledAdDataLabel'
  })
  varRTDisplayLabeledAdDataLabel: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayLabeledAdDataCreatedDate'
  })
  dteRTDisplayLabeledAdDataCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayLabeledAdDataModifiedDate'
  })
  dteRTDisplayLabeledAdDataModifiedDate: Date;
}
