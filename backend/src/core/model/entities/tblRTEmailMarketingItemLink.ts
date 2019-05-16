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
import { tblRTEmailMarketingItem } from './tblRTEmailMarketingItem';

@Entity('tblRTEmailMarketingItemLink', { schema: 'public' })
@Index(
  'idx_19936_IX_RTEmailMarketingItemLinkAPIID',
  [
    'intRTEmailMarketingItemLinkItemAPIID',
    'intRtEmailMarketingItemLinkItem',
    'intRTEmailMarketingItemLinkOrder',
    'varRTEmailMarketingItemLinkHash',
    'varRTEmailMarketingItemLinkName',
    'varRTEmailMarketingItemLinkURL'
  ],
  { unique: true }
)
export class tblRTEmailMarketingItemLink {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTEmailMarketingItemLinkID'
  })
  intRTEmailMarketingItemLinkID: string;

  @ManyToOne(
    type => tblRTEmailMarketingItem,
    tblRTEmailMarketingItem => tblRTEmailMarketingItem.tblRtEmailMarketingItemLinks,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTEmailMarketingItemLinkItemID' })
  intRtEmailMarketingItemLinkItem: tblRTEmailMarketingItem | null;

  @Column('bigint', {
    nullable: true,
    name: 'intRTEmailMarketingItemLinkItemAPIID'
  })
  intRTEmailMarketingItemLinkItemAPIID: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemLinkOrder'
  })
  intRTEmailMarketingItemLinkOrder: number;

  @Column('text', {
    nullable: false,
    name: 'varRTEmailMarketingItemLinkName'
  })
  varRTEmailMarketingItemLinkName: string;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailMarketingItemLinkURL'
  })
  varRTEmailMarketingItemLinkURL: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemLinkTotalClicks'
  })
  intRTEmailMarketingItemLinkTotalClicks: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailMarketingItemLinkUniqueClicks'
  })
  intRTEmailMarketingItemLinkUniqueClicks: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTEmailMarketingItemLinkPlaintext'
  })
  bRTEmailMarketingItemLinkPlaintext: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTEmailMarketingItemLinkCreatedDate'
  })
  dteRTEmailMarketingItemLinkCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTEmailMarketingItemLinkModifiedDate'
  })
  dteRTEmailMarketingItemLinkModifiedDate: Date;

  @Column('text', {
    nullable: false,
    name: 'varRTEmailMarketingItemLinkHash'
  })
  varRTEmailMarketingItemLinkHash: string;
}
