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
import { tblRTFBAIData } from './tblRTFBAIData';
import { tblRTFBAILabeledData } from './tblRTFBAILabeledData';

@Entity('tblRTFBAIMetric', { schema: 'public' })
export class tblRTFBAIMetric {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTFBAIMetricID'
  })
  intRTFBAIMetricID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTFBAIMetricName'
  })
  varRTFBAIMetricName: string;

  @Column('text', {
    nullable: false,
    name: 'varRTFBAIMetricTitle'
  })
  varRTFBAIMetricTitle: string;

  @Column('text', {
    nullable: false,
    default: () => "'single'",
    name: 'varRTFBAIMetricDataStoreType'
  })
  varRTFBAIMetricDataStoreType: string;

  @Column('text', {
    nullable: true,
    name: 'varRTFBAIMetricDesc'
  })
  varRTFBAIMetricDesc: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTFBAIMetricArchivedFlg'
  })
  bRTFBAIMetricArchivedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBAIMetricCreatedDate'
  })
  dteRTFBAIMetricCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBAIMetricModifiedDate'
  })
  dteRTFBAIMetricModifiedDate: Date;

  @Column('boolean', {
    nullable: false,
    default: () => 'true',
    name: 'bRTFBAIMetricCollectFlg'
  })
  bRTFBAIMetricCollectFlg: boolean;

  @Column('integer', {
    nullable: false,
    name: 'intRTFBAIMetricDivisor'
  })
  intRTFBAIMetricDivisor: number;

  @OneToMany(type => tblRTFBAIData, tblRTFBAIData => tblRTFBAIData.intRtfbaiDataMetric, {
    onDelete: 'CASCADE'
  })
  tblRtfbaiDatas: tblRTFBAIData[];

  @OneToMany(
    type => tblRTFBAILabeledData,
    tblRTFBAILabeledData => tblRTFBAILabeledData.intRtfbaiLabeledDataMetric,
    { onDelete: 'CASCADE' }
  )
  tblRtfbaiLabeledDatas: tblRTFBAILabeledData[];
}
