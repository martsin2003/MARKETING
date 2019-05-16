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
import { tblRTDisplayGoalAdData } from './tblRTDisplayGoalAdData';
import { tblRTDisplayGoalKeywordData } from './tblRTDisplayGoalKeywordData';

@Entity('tblRTDisplayGoal', { schema: 'public' })
@Index(
  'idx_19788_IX_tblRTDisplayGoal',
  [
    'dteRTDisplayGoalModifiedDate',
    'intRTDisplayGoalAPIID',
    'intRTDisplayGoalID',
    'intRtDisplayGoalRtConfigSite',
    'intRtDisplayGoalRtCredentialProvider',
    'varRTDisplayGoalCategory',
    'varRTDisplayGoalName',
    'varRTDisplayGoalStatus'
  ],
  { unique: true }
)
export class tblRTDisplayGoal {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTDisplayGoalID'
  })
  intRTDisplayGoalID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTDisplayGoalName'
  })
  varRTDisplayGoalName: string;

  @Column('text', {
    nullable: false,
    default: () => "'S'",
    name: 'varRTDisplayGoalCategory'
  })
  varRTDisplayGoalCategory: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayGoalCreatedDate'
  })
  dteRTDisplayGoalCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayGoalModifiedDate'
  })
  dteRTDisplayGoalModifiedDate: Date;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varRTDisplayGoalStatus'
  })
  varRTDisplayGoalStatus: string;

  @Column('integer', {
    nullable: false,
    name: 'intRTDisplayGoalAPIID'
  })
  intRTDisplayGoalAPIID: number;

  @ManyToOne(
    type => tblRTCredentialProvider,
    tblRTCredentialProvider => tblRTCredentialProvider.tblRtDisplayGoals,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTDisplayGoalRTCredentialProviderID' })
  intRtDisplayGoalRtCredentialProvider: tblRTCredentialProvider | null;

  @ManyToOne(type => tblRTConfigSite, tblRTConfigSite => tblRTConfigSite.tblRtDisplayGoals, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTDisplayGoalRTConfigSiteID' })
  intRtDisplayGoalRtConfigSite: tblRTConfigSite | null;

  @OneToMany(
    type => tblRTDisplayGoalAdData,
    tblRTDisplayGoalAdData => tblRTDisplayGoalAdData.intRtDisplayGoalAdDataRtDisplayGoal,
    { onDelete: 'CASCADE' }
  )
  tblRtDisplayGoalAdDatas: tblRTDisplayGoalAdData[];

  @OneToMany(
    type => tblRTDisplayGoalKeywordData,
    tblRTDisplayGoalKeywordData =>
      tblRTDisplayGoalKeywordData.intRtDisplayGoalKeywordDataRtDisplayGoal,
    { onDelete: 'CASCADE' }
  )
  tblRtDisplayGoalKeywordDatas: tblRTDisplayGoalKeywordData[];
}
