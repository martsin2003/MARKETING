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

@Entity('tblRTFBIPost', { schema: 'public' })
@Index(
  'idx_20082_IX_tblRTFBIPost',
  [
    'dteRTFBIPostPublishedDate',
    'intRTFBIPostFBPostID',
    'intRtfbiPostRtCampaign',
    'varRTFBIPostTitle',
    'varRTFBIPostType'
  ],
  { unique: true }
)
export class tblRTFBIPost {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTFBIPostID'
  })
  intRTFBIPostID: string;

  @ManyToOne(type => tblRTCampaign, tblRTCampaign => tblRTCampaign.tblRtfbiPosts, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTFBIPostRTCampaignID' })
  intRtfbiPostRtCampaign: tblRTCampaign | null;

  @Column('bigint', {
    nullable: false,
    name: 'intRTFBIPostFBPostID'
  })
  intRTFBIPostFBPostID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTFBIPostTitle'
  })
  varRTFBIPostTitle: string;

  @Column('text', {
    nullable: true,
    name: 'varRTFBIPostDescription'
  })
  varRTFBIPostDescription: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intRTFBIPostReach'
  })
  intRTFBIPostReach: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTFBIPostImpressions'
  })
  intRTFBIPostImpressions: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTFBIPostEngagedUsers'
  })
  intRTFBIPostEngagedUsers: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTFBIPostTalkingAbout'
  })
  intRTFBIPostTalkingAbout: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBIPostPublishedDate'
  })
  dteRTFBIPostPublishedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBIPostCreatedDate'
  })
  dteRTFBIPostCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBIPostModifiedDate'
  })
  dteRTFBIPostModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varRTFBIPostStatusType'
  })
  varRTFBIPostStatusType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTFBIPostType'
  })
  varRTFBIPostType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTFBIPostURL'
  })
  varRTFBIPostURL: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intRTFBIPostConsumptionsUnique'
  })
  intRTFBIPostConsumptionsUnique: number;
}
