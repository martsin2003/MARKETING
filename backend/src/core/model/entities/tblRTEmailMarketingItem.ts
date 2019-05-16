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
import { tblRTConfigSite } from './tblRTConfigSite';
import { tblRTMediaSource } from './tblRTMediaSource';
import { tblRTEmailMarketingItemGAGoalData } from './tblRTEmailMarketingItemGAGoalData';
import { tblRTEmailMarketingItemLink } from './tblRTEmailMarketingItemLink';
import { tblRTEmailMarketingItemRead } from './tblRTEmailMarketingItemRead';
import { tblRTEmailUserSummary } from './tblRTEmailUserSummary';

@Entity('tblRTEmailMarketingItem', { schema: 'public' })
@Index(
  'idx_19917_IX_RTEmailMarketingItemCampaignID',
  [
    'intRtEmailMarketingItemCampaign',
    'varRTEmailMarketingItemContent',
    'varRTEmailMarketingItemSubject'
  ],
  { unique: true }
)
@Index(
  'idx_19917_IX_RTEmailMarketingItemConfigSiteID',
  [
    'intRtEmailMarketingItemCampaign',
    'intRtEmailMarketingItemRtConfigSite',
    'varRTEmailMarketingItemContent',
    'varRTEmailMarketingItemSubject'
  ],
  { unique: true }
)
export class tblRTEmailMarketingItem {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTEmailMarketingItemID'
  })
  intRTEmailMarketingItemID: string;

  @ManyToOne(type => tblRTCampaign, tblRTCampaign => tblRTCampaign.tblRtEmailMarketingItems, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTEmailMarketingItemCampaignID' })
  intRtEmailMarketingItemCampaign: tblRTCampaign | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteRTEmailMarketingItemDate'
  })
  dteRTEmailMarketingItemDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailMarketingItemContent'
  })
  varRTEmailMarketingItemContent: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailMarketingItemSubject'
  })
  varRTEmailMarketingItemSubject: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailMarketingItemSenderName'
  })
  varRTEmailMarketingItemSenderName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailMarketingItemSenderEmail'
  })
  varRTEmailMarketingItemSenderEmail: string | null;

  @Column('text', {
    nullable: false,
    name: 'varRTEmailMarketingItemMailingType'
  })
  varRTEmailMarketingItemMailingType: string;

  @Column('text', {
    nullable: false,
    name: 'varRTEmailMarketingItemMailingStatus'
  })
  varRTEmailMarketingItemMailingStatus: string;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemRecipientCount'
  })
  intRTEmailMarketingItemRecipientCount: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemSent'
  })
  intRTEmailMarketingItemSent: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemRecieved'
  })
  intRTEmailMarketingItemRecieved: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemOpens'
  })
  intRTEmailMarketingItemOpens: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemClicks'
  })
  intRTEmailMarketingItemClicks: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemClicksUnique'
  })
  intRTEmailMarketingItemClicksUnique: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemForwarded'
  })
  intRTEmailMarketingItemForwarded: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemBounced'
  })
  intRTEmailMarketingItemBounced: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemOptOut'
  })
  intRTEmailMarketingItemOptOut: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemShares'
  })
  intRTEmailMarketingItemShares: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemSharesClicks'
  })
  intRTEmailMarketingItemSharesClicks: number;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailMarketingItemWebViewURL'
  })
  varRTEmailMarketingItemWebViewURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailMarketingItemAnalysisPDF'
  })
  varRTEmailMarketingItemAnalysisPDF: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailMarketingItemDetailsReport'
  })
  varRTEmailMarketingItemDetailsReport: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteRTEmailMarketingItemScheduledDate'
  })
  dteRTEmailMarketingItemScheduledDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteRTEmailMarketingItemStartTime'
  })
  dteRTEmailMarketingItemStartTime: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteRTEmailMarketingItemEndTime'
  })
  dteRTEmailMarketingItemEndTime: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailMarketingItemNotes'
  })
  varRTEmailMarketingItemNotes: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTEmailMarketingItemCreatedDate'
  })
  dteRTEmailMarketingItemCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTEmailMarketingItemModifiedDate'
  })
  dteRTEmailMarketingItemModifiedDate: Date;

  @ManyToOne(type => tblRTConfigSite, tblRTConfigSite => tblRTConfigSite.tblRtEmailMarketingItems, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTEmailMarketingItemRTConfigSiteID' })
  intRtEmailMarketingItemRtConfigSite: tblRTConfigSite | null;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemSignUps'
  })
  intRTEmailMarketingItemSignUps: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemWebviewShares'
  })
  intRTEmailMarketingItemWebviewShares: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemWebviewSharesClicks'
  })
  intRTEmailMarketingItemWebviewSharesClicks: number;

  @ManyToOne(
    type => tblRTMediaSource,
    tblRTMediaSource => tblRTMediaSource.tblRtEmailMarketingItems,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTEmailMarketingItemRTMediaSourceID' })
  intRtEmailMarketingItemRtMediaSource: tblRTMediaSource | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTEmailMarketingItemEngagementDataAddedFlg'
  })
  bRTEmailMarketingItemEngagementDataAddedFlg: boolean;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemEngagementSessions'
  })
  intRTEmailMarketingItemEngagementSessions: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemEngagementSessionDuration'
  })
  intRTEmailMarketingItemEngagementSessionDuration: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemEngagementBounces'
  })
  intRTEmailMarketingItemEngagementBounces: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemEngagementPageviews'
  })
  intRTEmailMarketingItemEngagementPageviews: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTEmailMarketingItemPaidFlg'
  })
  bRTEmailMarketingItemPaidFlg: boolean;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curRTEmailMarketingItemSpend'
  })
  curRTEmailMarketingItemSpend: string;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemEngagementSiteActions'
  })
  intRTEmailMarketingItemEngagementSiteActions: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemEngagementEmail'
  })
  intRTEmailMarketingItemEngagementEmail: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemEngagementLeads'
  })
  intRTEmailMarketingItemEngagementLeads: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemEngagementSessionsDesktop'
  })
  intRTEmailMarketingItemEngagementSessionsDesktop: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemEngagementSessionsMobile'
  })
  intRTEmailMarketingItemEngagementSessionsMobile: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemEngagementSessionsTablet'
  })
  intRTEmailMarketingItemEngagementSessionsTablet: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTEmailMarketingItemNoAutoUpdateFlg'
  })
  bRTEmailMarketingItemNoAutoUpdateFlg: boolean;

  @OneToMany(
    type => tblRTEmailMarketingItemGAGoalData,
    tblRTEmailMarketingItemGAGoalData =>
      tblRTEmailMarketingItemGAGoalData.intRtEmailMarketingItemGaGoalDataRtEmailMarketingItem,
    { onDelete: 'CASCADE' }
  )
  tblRtEmailMarketingItemGaGoalDatas: tblRTEmailMarketingItemGAGoalData[];

  @OneToMany(
    type => tblRTEmailMarketingItemLink,
    tblRTEmailMarketingItemLink => tblRTEmailMarketingItemLink.intRtEmailMarketingItemLinkItem,
    { onDelete: 'CASCADE' }
  )
  tblRtEmailMarketingItemLinks: tblRTEmailMarketingItemLink[];

  @OneToMany(
    type => tblRTEmailMarketingItemRead,
    tblRTEmailMarketingItemRead => tblRTEmailMarketingItemRead.intRtEmailMarketingItemReadItem,
    { onDelete: 'CASCADE' }
  )
  tblRtEmailMarketingItemReads: tblRTEmailMarketingItemRead[];

  @OneToMany(
    type => tblRTEmailUserSummary,
    tblRTEmailUserSummary => tblRTEmailUserSummary.intRtEmailUserSummaryEmailMarketingItem,
    { onDelete: 'CASCADE' }
  )
  tblRtEmailUserSummarys: tblRTEmailUserSummary[];
}
