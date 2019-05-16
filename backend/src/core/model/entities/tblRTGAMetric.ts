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
import { tblRTGAData } from './tblRTGAData';
import { tblRTGALabeledData } from './tblRTGALabeledData';

@Entity('tblRTGAMetric', { schema: 'public' })
@Index(
  'idx_20145_IX_tblRTGAMetric',
  [
    'bRTGAMetricArchivedFlg',
    'intRTGAMetricDivisor',
    'varRTGAMetricDataStoreType',
    'varRTGAMetricDimensions',
    'varRTGAMetricFilters',
    'varRTGAMetricName',
    'varRTGAMetricSegment'
  ],
  { unique: true }
)
export class tblRTGAMetric {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTGAMetricID'
  })
  intRTGAMetricID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTGAMetricName'
  })
  varRTGAMetricName: string;

  @Column('text', {
    nullable: false,
    name: 'varRTGAMetricTitle'
  })
  varRTGAMetricTitle: string;

  @Column('text', {
    nullable: false,
    name: 'varRTGAMetricMetrics'
  })
  varRTGAMetricMetrics: string;

  @Column('text', {
    nullable: true,
    name: 'varRTGAMetricDimensions'
  })
  varRTGAMetricDimensions: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTGAMetricFilters'
  })
  varRTGAMetricFilters: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'single'",
    name: 'varRTGAMetricDataStoreType'
  })
  varRTGAMetricDataStoreType: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTGAMetricArchivedFlg'
  })
  bRTGAMetricArchivedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGAMetricCreatedDate'
  })
  dteRTGAMetricCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGAMetricModifiedDate'
  })
  dteRTGAMetricModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varRTGAMetricDesc'
  })
  varRTGAMetricDesc: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intRTGAMetricDivisor'
  })
  intRTGAMetricDivisor: number;

  @Column('text', {
    nullable: true,
    name: 'varRTGAMetricSegment'
  })
  varRTGAMetricSegment: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'true',
    name: 'bRTGAMetricCollectFlg'
  })
  bRTGAMetricCollectFlg: boolean;

  @Column('text', {
    nullable: false,
    default: () => "'d'",
    name: 'varRTGAMetricDataStorePeriod'
  })
  varRTGAMetricDataStorePeriod: string;

  @OneToMany(type => tblRTGAData, tblRTGAData => tblRTGAData.intRtgaDataMetric, {
    onDelete: 'CASCADE'
  })
  tblRtgaDatas: tblRTGAData[];

  @OneToMany(
    type => tblRTGALabeledData,
    tblRTGALabeledData => tblRTGALabeledData.intRtgaLabeledDataMetric,
    { onDelete: 'CASCADE' }
  )
  tblRtgaLabeledDatas: tblRTGALabeledData[];
}
