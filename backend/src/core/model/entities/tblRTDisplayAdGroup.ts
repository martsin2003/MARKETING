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
import { tblRTDisplayAd } from './tblRTDisplayAd';
import { tblRTDisplayAdGroupMediaSource } from './tblRTDisplayAdGroupMediaSource';
import { tblRTDisplayKeyword } from './tblRTDisplayKeyword';

@Entity('tblRTDisplayAdGroup', { schema: 'public' })
@Index('idx_19760_IX2_tblRTDisplayAdGroup', [
  'intRTDisplayAdGroupAPIID',
  'intRTDisplayAdGroupID',
  'intRtDisplayAdGroupRtCampaign',
  'varRTDisplayAdGroupStatus'
])
@Index(
  'idx_19760_IX_tblRTDisplayAdGroup',
  [
    'intRTDisplayAdGroupAPIID',
    'intRtDisplayAdGroupRtCampaign',
    'varRTDisplayAdGroupName',
    'varRTDisplayAdGroupStatus'
  ],
  { unique: true }
)
export class tblRTDisplayAdGroup {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTDisplayAdGroupID'
  })
  intRTDisplayAdGroupID: string;

  @ManyToOne(type => tblRTCampaign, tblRTCampaign => tblRTCampaign.tblRtDisplayAdGroups, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTDisplayAdGroupRTCampaignID' })
  intRtDisplayAdGroupRtCampaign: tblRTCampaign | null;

  @Column('bigint', {
    nullable: false,
    name: 'intRTDisplayAdGroupAPIID'
  })
  intRTDisplayAdGroupAPIID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTDisplayAdGroupName'
  })
  varRTDisplayAdGroupName: string;

  @Column('text', {
    nullable: false,
    default: () => "'eligible'",
    name: 'varRTDisplayAdGroupStatus'
  })
  varRTDisplayAdGroupStatus: string;

  @Column('text', {
    nullable: false,
    default: () => "'enabled'",
    name: 'varRTDisplayAdGroupState'
  })
  varRTDisplayAdGroupState: string;

  @Column('text', {
    nullable: false,
    default: () => "'standard'",
    name: 'varRTDisplayAdGroupType'
  })
  varRTDisplayAdGroupType: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayAdGroupCreatedDate'
  })
  dteRTDisplayAdGroupCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayAdGroupModifiedDate'
  })
  dteRTDisplayAdGroupModifiedDate: Date;

  @OneToMany(
    type => tblRTDisplayAd,
    tblRTDisplayAd => tblRTDisplayAd.intRtDisplayAdRtDisplayAdGroup,
    { onDelete: 'CASCADE' }
  )
  tblRtDisplayAds: tblRTDisplayAd[];

  @OneToMany(
    type => tblRTDisplayAdGroupMediaSource,
    tblRTDisplayAdGroupMediaSource =>
      tblRTDisplayAdGroupMediaSource.intRtDisplayAdGroupMediaSourceRtDisplayAdGroup,
    { onDelete: 'CASCADE' }
  )
  tblRtDisplayAdGroupMediaSources: tblRTDisplayAdGroupMediaSource[];

  @OneToMany(
    type => tblRTDisplayKeyword,
    tblRTDisplayKeyword => tblRTDisplayKeyword.intRtDisplayKeywordRtDisplayAdGroup,
    { onDelete: 'CASCADE' }
  )
  tblRtDisplayKeywords: tblRTDisplayKeyword[];
}
