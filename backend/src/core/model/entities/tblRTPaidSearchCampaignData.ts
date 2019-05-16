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
import { tblRTPaidSearchMetric } from './tblRTPaidSearchMetric';

@Entity('tblRTPaidSearchCampaignData', { schema: 'public' })
@Index('idx_20316_IX2_tblRTPaidSearchCampaignData', [
  'dteRTPaidSearchCampaignDataEndTime',
  'intRTPaidSearchCampaignDataValue'
])
@Index(
  'idx_20316_IX_tblRTPaidSearchCampaignData',
  [
    'dteRTPaidSearchCampaignDataEndTime',
    'intRtPaidSearchCampaignDataRtCampaign',
    'intRtPaidSearchCampaignDataRtPaidSearchMetric',
    'intRTPaidSearchCampaignDataValue'
  ],
  { unique: true }
)
export class tblRTPaidSearchCampaignData {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTPaidSearchCampaignDataID'
  })
  intRTPaidSearchCampaignDataID: string;

  @ManyToOne(type => tblRTCampaign, tblRTCampaign => tblRTCampaign.tblRtPaidSearchCampaignDatas, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTPaidSearchCampaignDataRTCampaignID' })
  intRtPaidSearchCampaignDataRtCampaign: tblRTCampaign | null;

  @ManyToOne(
    type => tblRTPaidSearchMetric,
    tblRTPaidSearchMetric => tblRTPaidSearchMetric.tblRtPaidSearchCampaignDatas,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTPaidSearchCampaignDataRTPaidSearchMetricID' })
  intRtPaidSearchCampaignDataRtPaidSearchMetric: tblRTPaidSearchMetric | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchCampaignDataEndTime'
  })
  dteRTPaidSearchCampaignDataEndTime: Date;

  @Column('bigint', {
    nullable: false,
    default: () => "'0'",
    name: 'intRTPaidSearchCampaignDataValue'
  })
  intRTPaidSearchCampaignDataValue: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchCampaignDataCreatedDate'
  })
  dteRTPaidSearchCampaignDataCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchCampaignDataModifiedDate'
  })
  dteRTPaidSearchCampaignDataModifiedDate: Date;
}
