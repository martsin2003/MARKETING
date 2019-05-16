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
import { tblRTFBIData } from './tblRTFBIData';
import { tblRTFBILabeledData } from './tblRTFBILabeledData';
import { tblRTFBIMetricMetricCategory } from './tblRTFBIMetricMetricCategory';

@Entity('tblRTFBIMetric', { schema: 'public' })
@Index(
  'idx_20044_IX_tblRTFBIMetric',
  [
    'bRTFBIMetricArchivedFlg',
    'dteRTFBIMetricCreatedDate',
    'dteRTFBIMetricModifiedDate',
    'intRTFBIMetricID',
    'varRTFBIMetricDataStoreType',
    'varRTFBIMetricName',
    'varRTFBIMetricTitle'
  ],
  { unique: true }
)
export class tblRTFBIMetric {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTFBIMetricID'
  })
  intRTFBIMetricID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTFBIMetricName'
  })
  varRTFBIMetricName: string;

  @Column('text', {
    nullable: false,
    name: 'varRTFBIMetricTitle'
  })
  varRTFBIMetricTitle: string;

  @Column('text', {
    nullable: false,
    default: () => "'single'",
    name: 'varRTFBIMetricDataStoreType'
  })
  varRTFBIMetricDataStoreType: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTFBIMetricArchivedFlg'
  })
  bRTFBIMetricArchivedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBIMetricCreatedDate'
  })
  dteRTFBIMetricCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBIMetricModifiedDate'
  })
  dteRTFBIMetricModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varRTFBIMetricDesc'
  })
  varRTFBIMetricDesc: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTFBIMetricLifetimeOnlyFlg'
  })
  bRTFBIMetricLifetimeOnlyFlg: boolean;

  @OneToMany(type => tblRTFBIData, tblRTFBIData => tblRTFBIData.intRtfbiDataMetric, {
    onDelete: 'CASCADE'
  })
  tblRtfbiDatas: tblRTFBIData[];

  @OneToMany(
    type => tblRTFBILabeledData,
    tblRTFBILabeledData => tblRTFBILabeledData.intRtfbiLabeledDataMetric,
    { onDelete: 'CASCADE' }
  )
  tblRtfbiLabeledDatas: tblRTFBILabeledData[];

  @OneToMany(
    type => tblRTFBIMetricMetricCategory,
    tblRTFBIMetricMetricCategory => tblRTFBIMetricMetricCategory.intRtfbiMetricMetricCategoryMetric,
    { onDelete: 'CASCADE' }
  )
  tblRtfbiMetricMetricCategorys: tblRTFBIMetricMetricCategory[];
}
