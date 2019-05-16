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
import { tblRTPaidSearchAdGroup } from './tblRTPaidSearchAdGroup';
import { tblRTPaidSearchAdData } from './tblRTPaidSearchAdData';
import { tblRTPaidSearchGAGoalAdData } from './tblRTPaidSearchGAGoalAdData';
import { tblRTPaidSearchGoalAdData } from './tblRTPaidSearchGoalAdData';
import { tblRTPaidSearchLabeledAdData } from './tblRTPaidSearchLabeledAdData';

@Entity('tblRTPaidSearchAd', { schema: 'public' })
@Index(
  'idx_20276_IX_tblRTPaidSearchAd',
  [
    'intRTPaidSearchAdAPIID',
    'intRtPaidSearchAdRtPaidSearchAdGroup',
    'varRTPaidSearchAdName',
    'varRTPaidSearchAdStatus',
    'varRTPaidSearchAdType'
  ],
  { unique: true }
)
@Index('idx_20276_IX2_tblRTPaidSearchAd', ['intRtPaidSearchAdRtPaidSearchAdGroup'])
export class tblRTPaidSearchAd {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTPaidSearchAdID'
  })
  intRTPaidSearchAdID: string;

  @ManyToOne(
    type => tblRTPaidSearchAdGroup,
    tblRTPaidSearchAdGroup => tblRTPaidSearchAdGroup.tblRtPaidSearchAds,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTPaidSearchAdRTPaidSearchAdGroupID' })
  intRtPaidSearchAdRtPaidSearchAdGroup: tblRTPaidSearchAdGroup | null;

  @Column('bigint', {
    nullable: false,
    name: 'intRTPaidSearchAdAPIID'
  })
  intRTPaidSearchAdAPIID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTPaidSearchAdName'
  })
  varRTPaidSearchAdName: string;

  @Column('text', {
    nullable: false,
    default: () => "'approved'",
    name: 'varRTPaidSearchAdStatus'
  })
  varRTPaidSearchAdStatus: string;

  @Column('text', {
    nullable: false,
    default: () => "'enabled'",
    name: 'varRTPaidSearchAdState'
  })
  varRTPaidSearchAdState: string;

  @Column('text', {
    nullable: false,
    default: () => "'text ad'",
    name: 'varRTPaidSearchAdType'
  })
  varRTPaidSearchAdType: string;

  @Column('text', {
    nullable: true,
    name: 'varRTPaidSearchAdDescription1'
  })
  varRTPaidSearchAdDescription1: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTPaidSearchAdDescription2'
  })
  varRTPaidSearchAdDescription2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTPaidSearchAdDestinationURL'
  })
  varRTPaidSearchAdDestinationURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTPaidSearchAdFinalURL'
  })
  varRTPaidSearchAdFinalURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTPaidSearchAdMobileFinalURL'
  })
  varRTPaidSearchAdMobileFinalURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTPaidSearchAdDisplayURL'
  })
  varRTPaidSearchAdDisplayURL: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchAdCreatedDate'
  })
  dteRTPaidSearchAdCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchAdModifiedDate'
  })
  dteRTPaidSearchAdModifiedDate: Date;

  @OneToMany(
    type => tblRTPaidSearchAdData,
    tblRTPaidSearchAdData => tblRTPaidSearchAdData.intRtPaidSearchAdDataRtPaidSearchAd,
    { onDelete: 'CASCADE' }
  )
  tblRtPaidSearchAdDatas: tblRTPaidSearchAdData[];

  @OneToMany(
    type => tblRTPaidSearchGAGoalAdData,
    tblRTPaidSearchGAGoalAdData =>
      tblRTPaidSearchGAGoalAdData.intRtPaidSearchGaGoalAdDataRtPaidSearchAd,
    { onDelete: 'CASCADE' }
  )
  tblRtPaidSearchGaGoalAdDatas: tblRTPaidSearchGAGoalAdData[];

  @OneToMany(
    type => tblRTPaidSearchGoalAdData,
    tblRTPaidSearchGoalAdData => tblRTPaidSearchGoalAdData.intRtPaidSearchGoalAdDataRtPaidSearchAd,
    { onDelete: 'CASCADE' }
  )
  tblRtPaidSearchGoalAdDatas: tblRTPaidSearchGoalAdData[];

  @OneToMany(
    type => tblRTPaidSearchLabeledAdData,
    tblRTPaidSearchLabeledAdData =>
      tblRTPaidSearchLabeledAdData.intRtPaidSearchLabeledAdDataRtPaidSearchAd,
    { onDelete: 'CASCADE' }
  )
  tblRtPaidSearchLabeledAdDatas: tblRTPaidSearchLabeledAdData[];
}
