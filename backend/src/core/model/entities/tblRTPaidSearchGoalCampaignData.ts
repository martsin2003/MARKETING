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
import { tblRTGAGoal } from './tblRTGAGoal';

@Entity('tblRTPaidSearchGoalCampaignData', { schema: 'public' })
@Index(
  'idx_20346_IX_tblRTPaidSearchGoalCampaignData',
  [
    'dteRTPaidSearchGoalCampaignDataDate',
    'intRtPaidSearchGoalCampaignDataRtCampaign',
    'intRtPaidSearchGoalCampaignDataRtgaGoal',
    'intRTPaidSearchGoalCampaignDataValue'
  ],
  { unique: true }
)
@Index('idx_20346_IX2_tblRTPaidSearchGoalCampaignData', [
  'dteRTPaidSearchGoalCampaignDataDate',
  'intRTPaidSearchGoalCampaignDataValue'
])
export class tblRTPaidSearchGoalCampaignData {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTPaidSearchGoalCampaignDataID'
  })
  intRTPaidSearchGoalCampaignDataID: string;

  @ManyToOne(
    type => tblRTCampaign,
    tblRTCampaign => tblRTCampaign.tblRtPaidSearchGoalCampaignDatas,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTPaidSearchGoalCampaignDataRTCampaignID' })
  intRtPaidSearchGoalCampaignDataRtCampaign: tblRTCampaign | null;

  @ManyToOne(type => tblRTGAGoal, tblRTGAGoal => tblRTGAGoal.tblRtPaidSearchGoalCampaignDatas, {
    nullable: false
  })
  @JoinColumn({ name: 'intRTPaidSearchGoalCampaignDataRTGAGoalID' })
  intRtPaidSearchGoalCampaignDataRtgaGoal: tblRTGAGoal | null;

  @Column('integer', {
    nullable: false,
    name: 'intRTPaidSearchGoalCampaignDataValue'
  })
  intRTPaidSearchGoalCampaignDataValue: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchGoalCampaignDataDate'
  })
  dteRTPaidSearchGoalCampaignDataDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchGoalCampaignDataCreatedDate'
  })
  dteRTPaidSearchGoalCampaignDataCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchGoalCampaignDataModifiedDate'
  })
  dteRTPaidSearchGoalCampaignDataModifiedDate: Date;
}
