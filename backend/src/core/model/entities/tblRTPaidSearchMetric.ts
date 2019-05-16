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
import { tblRTPaidSearchAdData } from './tblRTPaidSearchAdData';
import { tblRTPaidSearchCampaignData } from './tblRTPaidSearchCampaignData';
import { tblRTPaidSearchKeywordData } from './tblRTPaidSearchKeywordData';
import { tblRTPaidSearchLabeledAdData } from './tblRTPaidSearchLabeledAdData';

@Entity('tblRTPaidSearchMetric', { schema: 'public' })
@Index(
  'idx_20391_IX_tblRTPaidSearchMetric',
  [
    'bRTPaidSearchMetricArchivedFlg',
    'bRTPaidSearchMetricCollectFlg',
    'intRTPaidSearchMetricDivisor',
    'intRTPaidSearchMetricID',
    'varRTPaidSearchMetricDataStoreType',
    'varRTPaidSearchMetricName'
  ],
  { unique: true }
)
export class tblRTPaidSearchMetric {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTPaidSearchMetricID'
  })
  intRTPaidSearchMetricID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTPaidSearchMetricName'
  })
  varRTPaidSearchMetricName: string;

  @Column('text', {
    nullable: false,
    name: 'varRTPaidSearchMetricTitle'
  })
  varRTPaidSearchMetricTitle: string;

  @Column('text', {
    nullable: false,
    default: () => "'single'",
    name: 'varRTPaidSearchMetricDataStoreType'
  })
  varRTPaidSearchMetricDataStoreType: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTPaidSearchMetricArchivedFlg'
  })
  bRTPaidSearchMetricArchivedFlg: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'true',
    name: 'bRTPaidSearchMetricCollectFlg'
  })
  bRTPaidSearchMetricCollectFlg: boolean;

  @Column('integer', {
    nullable: false,
    name: 'intRTPaidSearchMetricDivisor'
  })
  intRTPaidSearchMetricDivisor: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchMetricCreatedDate'
  })
  dteRTPaidSearchMetricCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchMetricModifiedDate'
  })
  dteRTPaidSearchMetricModifiedDate: Date;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTPaidSearchMetricMoneyFlg'
  })
  bRTPaidSearchMetricMoneyFlg: boolean;

  @OneToMany(
    type => tblRTPaidSearchAdData,
    tblRTPaidSearchAdData => tblRTPaidSearchAdData.intRtPaidSearchAdDataRtPaidSearchMetric,
    { onDelete: 'CASCADE' }
  )
  tblRtPaidSearchAdDatas: tblRTPaidSearchAdData[];

  @OneToMany(
    type => tblRTPaidSearchCampaignData,
    tblRTPaidSearchCampaignData =>
      tblRTPaidSearchCampaignData.intRtPaidSearchCampaignDataRtPaidSearchMetric,
    { onDelete: 'CASCADE' }
  )
  tblRtPaidSearchCampaignDatas: tblRTPaidSearchCampaignData[];

  @OneToMany(
    type => tblRTPaidSearchKeywordData,
    tblRTPaidSearchKeywordData =>
      tblRTPaidSearchKeywordData.intRtPaidSearchKeywordDataRtPaidSearchMetric,
    { onDelete: 'CASCADE' }
  )
  tblRtPaidSearchKeywordDatas: tblRTPaidSearchKeywordData[];

  @OneToMany(
    type => tblRTPaidSearchLabeledAdData,
    tblRTPaidSearchLabeledAdData =>
      tblRTPaidSearchLabeledAdData.intRtPaidSearchLabeledAdDataRtPaidSearchMetric,
    { onDelete: 'CASCADE' }
  )
  tblRtPaidSearchLabeledAdDatas: tblRTPaidSearchLabeledAdData[];
}
