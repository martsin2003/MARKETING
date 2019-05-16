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
import { tblRTDisplayGAGoalAdData } from './tblRTDisplayGAGoalAdData';
import { tblRTDisplayNonAPIGoalData } from './tblRTDisplayNonAPIGoalData';
import { tblRTEmailMarketingItemGAGoalData } from './tblRTEmailMarketingItemGAGoalData';
import { tblRTGAGoalData } from './tblRTGAGoalData';
import { tblRTGAGoalLabeledData } from './tblRTGAGoalLabeledData';
import { tblRTPaidSearchGAGoalAdData } from './tblRTPaidSearchGAGoalAdData';
import { tblRTPaidSearchGoalCampaignData } from './tblRTPaidSearchGoalCampaignData';
import { tblRTPaidSearchGoalKeywordNonAdwordsData } from './tblRTPaidSearchGoalKeywordNonAdwordsData';

@Entity('tblRTGAGoal', { schema: 'public' })
export class tblRTGAGoal {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTGAGoalID'
  })
  intRTGAGoalID: string;

  @ManyToOne(type => tblRTCampaign, tblRTCampaign => tblRTCampaign.tblRtgaGoals, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTGAGoalRTCampaignID' })
  intRtgaGoalRtCampaign: tblRTCampaign | null;

  @Column('text', {
    nullable: false,
    name: 'varRTGAGoalName'
  })
  varRTGAGoalName: string;

  @Column('integer', {
    nullable: false,
    name: 'intRTGAGoalGAGoalID'
  })
  intRTGAGoalGAGoalID: number;

  @Column('text', {
    nullable: false,
    name: 'varRTGAGoalType'
  })
  varRTGAGoalType: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varRTGAGoalStatus'
  })
  varRTGAGoalStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGAGoalCreatedDate'
  })
  dteRTGAGoalCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGAGoalModifiedDate'
  })
  dteRTGAGoalModifiedDate: Date;

  @Column('text', {
    nullable: false,
    default: () => "'S'",
    name: 'varRTGAGoalCategory'
  })
  varRTGAGoalCategory: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curRTGAGoalValue'
  })
  curRTGAGoalValue: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTGAGoalDeletedFlg'
  })
  bRTGAGoalDeletedFlg: boolean;

  @Column('text', {
    nullable: false,
    name: 'varRTGAGoalMetric'
  })
  varRTGAGoalMetric: string;

  @OneToMany(
    type => tblRTDisplayGAGoalAdData,
    tblRTDisplayGAGoalAdData => tblRTDisplayGAGoalAdData.intRtDisplayGaGoalAdDataRtgaGoal
  )
  tblRtDisplayGaGoalAdDatas: tblRTDisplayGAGoalAdData[];

  @OneToMany(
    type => tblRTDisplayNonAPIGoalData,
    tblRTDisplayNonAPIGoalData => tblRTDisplayNonAPIGoalData.intRtDisplayNonApiGoalDataRtgaGoal,
    { onDelete: 'CASCADE' }
  )
  tblRtDisplayNonApiGoalDatas: tblRTDisplayNonAPIGoalData[];

  @OneToMany(
    type => tblRTEmailMarketingItemGAGoalData,
    tblRTEmailMarketingItemGAGoalData =>
      tblRTEmailMarketingItemGAGoalData.intRtEmailMarketingItemGaGoalDataRtgaGoal
  )
  tblRtEmailMarketingItemGaGoalDatas: tblRTEmailMarketingItemGAGoalData[];

  @OneToMany(type => tblRTGAGoalData, tblRTGAGoalData => tblRTGAGoalData.intRtgaGoalDataRtgaGoal, {
    onDelete: 'CASCADE'
  })
  tblRtgaGoalDatas: tblRTGAGoalData[];

  @OneToMany(
    type => tblRTGAGoalLabeledData,
    tblRTGAGoalLabeledData => tblRTGAGoalLabeledData.intRtgaGoalLabeledDataRtgaGoal,
    { onDelete: 'CASCADE' }
  )
  tblRtgaGoalLabeledDatas: tblRTGAGoalLabeledData[];

  @OneToMany(
    type => tblRTPaidSearchGAGoalAdData,
    tblRTPaidSearchGAGoalAdData => tblRTPaidSearchGAGoalAdData.intRtPaidSearchGaGoalAdDataRtgaGoal
  )
  tblRtPaidSearchGaGoalAdDatas: tblRTPaidSearchGAGoalAdData[];

  @OneToMany(
    type => tblRTPaidSearchGoalCampaignData,
    tblRTPaidSearchGoalCampaignData =>
      tblRTPaidSearchGoalCampaignData.intRtPaidSearchGoalCampaignDataRtgaGoal
  )
  tblRtPaidSearchGoalCampaignDatas: tblRTPaidSearchGoalCampaignData[];

  @OneToMany(
    type => tblRTPaidSearchGoalKeywordNonAdwordsData,
    tblRTPaidSearchGoalKeywordNonAdwordsData =>
      tblRTPaidSearchGoalKeywordNonAdwordsData.intRtPaidSearchGoalKeywordNonAdwordsDataRtgaGoal
  )
  tblRtPaidSearchGoalKeywordNonAdwordsDatas: tblRTPaidSearchGoalKeywordNonAdwordsData[];
}
