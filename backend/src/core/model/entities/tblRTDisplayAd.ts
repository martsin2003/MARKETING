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
import { tblRTDisplayAdGroup } from './tblRTDisplayAdGroup';
import { tblRTDisplayAdData } from './tblRTDisplayAdData';
import { tblRTDisplayGAGoalAdData } from './tblRTDisplayGAGoalAdData';
import { tblRTDisplayGoalAdData } from './tblRTDisplayGoalAdData';
import { tblRTDisplayLabeledAdData } from './tblRTDisplayLabeledAdData';

@Entity('tblRTDisplayAd', { schema: 'public' })
@Index(
  'idx_19744_IX_tblRTDisplayAd',
  [
    'intRTDisplayAdAPIID',
    'intRtDisplayAdRtDisplayAdGroup',
    'varRTDisplayAdName',
    'varRTDisplayAdStatus',
    'varRTDisplayAdType'
  ],
  { unique: true }
)
@Index('idx_19744_IX2_tblRTDisplayAd', ['intRTDisplayAdAPIID', 'intRtDisplayAdRtDisplayAdGroup'], {
  unique: true
})
export class tblRTDisplayAd {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTDisplayAdID'
  })
  intRTDisplayAdID: string;

  @ManyToOne(
    type => tblRTDisplayAdGroup,
    tblRTDisplayAdGroup => tblRTDisplayAdGroup.tblRtDisplayAds,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTDisplayAdRTDisplayAdGroupID' })
  intRtDisplayAdRtDisplayAdGroup: tblRTDisplayAdGroup | null;

  @Column('bigint', {
    nullable: false,
    name: 'intRTDisplayAdAPIID'
  })
  intRTDisplayAdAPIID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTDisplayAdName'
  })
  varRTDisplayAdName: string;

  @Column('text', {
    nullable: false,
    default: () => "'approved'",
    name: 'varRTDisplayAdStatus'
  })
  varRTDisplayAdStatus: string;

  @Column('text', {
    nullable: false,
    default: () => "'enabled'",
    name: 'varRTDisplayAdState'
  })
  varRTDisplayAdState: string;

  @Column('text', {
    nullable: false,
    default: () => "'text ad'",
    name: 'varRTDisplayAdType'
  })
  varRTDisplayAdType: string;

  @Column('text', {
    nullable: true,
    name: 'varRTDisplayAdDescription1'
  })
  varRTDisplayAdDescription1: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTDisplayAdDescription2'
  })
  varRTDisplayAdDescription2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTDisplayAdDestinationURL'
  })
  varRTDisplayAdDestinationURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTDisplayAdFinalURL'
  })
  varRTDisplayAdFinalURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTDisplayAdMobileFinalURL'
  })
  varRTDisplayAdMobileFinalURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTDisplayAdDisplayURL'
  })
  varRTDisplayAdDisplayURL: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayAdCreatedDate'
  })
  dteRTDisplayAdCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayAdModifiedDate'
  })
  dteRTDisplayAdModifiedDate: Date;

  @OneToMany(
    type => tblRTDisplayAdData,
    tblRTDisplayAdData => tblRTDisplayAdData.intRtDisplayAdDataRtDisplayAd,
    { onDelete: 'CASCADE' }
  )
  tblRtDisplayAdDatas: tblRTDisplayAdData[];

  @OneToMany(
    type => tblRTDisplayGAGoalAdData,
    tblRTDisplayGAGoalAdData => tblRTDisplayGAGoalAdData.intRtDisplayGaGoalAdDataRtDisplayAd,
    { onDelete: 'CASCADE' }
  )
  tblRtDisplayGaGoalAdDatas: tblRTDisplayGAGoalAdData[];

  @OneToMany(
    type => tblRTDisplayGoalAdData,
    tblRTDisplayGoalAdData => tblRTDisplayGoalAdData.intRtDisplayGoalAdDataRtDisplayAd,
    { onDelete: 'CASCADE' }
  )
  tblRtDisplayGoalAdDatas: tblRTDisplayGoalAdData[];

  @OneToMany(
    type => tblRTDisplayLabeledAdData,
    tblRTDisplayLabeledAdData => tblRTDisplayLabeledAdData.intRtDisplayLabeledAdDataRtDisplayAd,
    { onDelete: 'CASCADE' }
  )
  tblRtDisplayLabeledAdDatas: tblRTDisplayLabeledAdData[];
}
