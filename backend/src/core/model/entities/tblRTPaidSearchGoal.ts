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
import { tblRTCredentialProvider } from './tblRTCredentialProvider';
import { tblRTConfigSite } from './tblRTConfigSite';
import { tblRTPaidSearchGoalAdData } from './tblRTPaidSearchGoalAdData';
import { tblRTPaidSearchGoalKeywordData } from './tblRTPaidSearchGoalKeywordData';

@Entity('tblRTPaidSearchGoal', { schema: 'public' })
@Index(
  'idx_20329_IX_tblRTPaidSearchGoal',
  [
    'dteRTPaidSearchGoalModifiedDate',
    'intRTPaidSearchGoalAPIID',
    'intRTPaidSearchGoalID',
    'intRtPaidSearchGoalRtConfigSite',
    'intRtPaidSearchGoalRtCredentialProvider',
    'varRTPaidSearchGoalCategory',
    'varRTPaidSearchGoalName',
    'varRTPaidSearchGoalStatus'
  ],
  { unique: true }
)
export class tblRTPaidSearchGoal {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTPaidSearchGoalID'
  })
  intRTPaidSearchGoalID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTPaidSearchGoalName'
  })
  varRTPaidSearchGoalName: string;

  @Column('text', {
    nullable: false,
    default: () => "'S'",
    name: 'varRTPaidSearchGoalCategory'
  })
  varRTPaidSearchGoalCategory: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchGoalCreatedDate'
  })
  dteRTPaidSearchGoalCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchGoalModifiedDate'
  })
  dteRTPaidSearchGoalModifiedDate: Date;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varRTPaidSearchGoalStatus'
  })
  varRTPaidSearchGoalStatus: string;

  @Column('integer', {
    nullable: false,
    name: 'intRTPaidSearchGoalAPIID'
  })
  intRTPaidSearchGoalAPIID: number;

  @ManyToOne(
    type => tblRTCredentialProvider,
    tblRTCredentialProvider => tblRTCredentialProvider.tblRtPaidSearchGoals,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTPaidSearchGoalRTCredentialProviderID' })
  intRtPaidSearchGoalRtCredentialProvider: tblRTCredentialProvider | null;

  @ManyToOne(type => tblRTConfigSite, tblRTConfigSite => tblRTConfigSite.tblRtPaidSearchGoals, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTPaidSearchGoalRTConfigSiteID' })
  intRtPaidSearchGoalRtConfigSite: tblRTConfigSite | null;

  @OneToMany(
    type => tblRTPaidSearchGoalAdData,
    tblRTPaidSearchGoalAdData =>
      tblRTPaidSearchGoalAdData.intRtPaidSearchGoalAdDataRtPaidSearchGoal,
    { onDelete: 'CASCADE' }
  )
  tblRtPaidSearchGoalAdDatas: tblRTPaidSearchGoalAdData[];

  @OneToMany(
    type => tblRTPaidSearchGoalKeywordData,
    tblRTPaidSearchGoalKeywordData =>
      tblRTPaidSearchGoalKeywordData.intRtPaidSearchGoalKeywordDataRtPaidSearchGoal,
    { onDelete: 'CASCADE' }
  )
  tblRtPaidSearchGoalKeywordDatas: tblRTPaidSearchGoalKeywordData[];
}
