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
import { tblRTFBIMetric } from './tblRTFBIMetric';
import { tblRTFBIMetricCategory } from './tblRTFBIMetricCategory';

@Entity('tblRTFBIMetricMetricCategory', { schema: 'public' })
@Index(
  'idx_20066_IX_tblRTFBIMetricMetricCategory_Metric',
  [
    'dteRTFBIMetricMetricCategoryCreatedDate',
    'dteRTFBIMetricMetricCategoryModifiedDate',
    'intRtfbiMetricMetricCategoryCategory',
    'intRTFBIMetricMetricCategoryID',
    'intRtfbiMetricMetricCategoryMetric'
  ],
  { unique: true }
)
@Index(
  'idx_20066_IX_tblRTFBIMetricMetricCategory_Category',
  [
    'dteRTFBIMetricMetricCategoryCreatedDate',
    'dteRTFBIMetricMetricCategoryModifiedDate',
    'intRtfbiMetricMetricCategoryCategory',
    'intRTFBIMetricMetricCategoryID',
    'intRtfbiMetricMetricCategoryMetric'
  ],
  { unique: true }
)
export class tblRTFBIMetricMetricCategory {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTFBIMetricMetricCategoryID'
  })
  intRTFBIMetricMetricCategoryID: string;

  @ManyToOne(
    type => tblRTFBIMetric,
    tblRTFBIMetric => tblRTFBIMetric.tblRtfbiMetricMetricCategorys,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTFBIMetricMetricCategoryMetricID' })
  intRtfbiMetricMetricCategoryMetric: tblRTFBIMetric | null;

  @ManyToOne(
    type => tblRTFBIMetricCategory,
    tblRTFBIMetricCategory => tblRTFBIMetricCategory.tblRtfbiMetricMetricCategorys,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTFBIMetricMetricCategoryCategoryID' })
  intRtfbiMetricMetricCategoryCategory: tblRTFBIMetricCategory | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBIMetricMetricCategoryCreatedDate'
  })
  dteRTFBIMetricMetricCategoryCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBIMetricMetricCategoryModifiedDate'
  })
  dteRTFBIMetricMetricCategoryModifiedDate: Date;
}
