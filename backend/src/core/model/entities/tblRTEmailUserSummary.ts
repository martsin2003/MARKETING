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
import { tblRTEmailAction } from './tblRTEmailAction';

@Entity('tblRTEmailUserSummary', { schema: 'public' })
@Index(
  'idx_19973_IX_tblRTEmailUserSummary',
  [
    'dteRTEmailUserSummaryResponseDate',
    'intRTEmailUserSummaryContactID',
    'intRtEmailUserSummaryEmailAction',
    'intRtEmailUserSummaryEmailMarketingItem',
    'intRTEmailUserSummaryID',
    'varRTEmailUserSummaryEmailAddress',
    'varRTEmailUserSummaryStatus'
  ],
  { unique: true }
)
export class tblRTEmailUserSummary {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTEmailUserSummaryID'
  })
  intRTEmailUserSummaryID: string;

  @ManyToOne(
    type => tblRTEmailMarketingItem,
    tblRTEmailMarketingItem => tblRTEmailMarketingItem.tblRtEmailUserSummarys,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTEmailUserSummaryEmailMarketingItemID' })
  intRtEmailUserSummaryEmailMarketingItem: tblRTEmailMarketingItem | null;

  @ManyToOne(
    type => tblRTEmailAction,
    tblRTEmailAction => tblRTEmailAction.tblRtEmailUserSummarys,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTEmailUserSummaryEmailActionID' })
  intRtEmailUserSummaryEmailAction: tblRTEmailAction | null;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailUserSummaryContactID'
  })
  intRTEmailUserSummaryContactID: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailUserSummaryContactTypeID'
  })
  intRTEmailUserSummaryContactTypeID: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTEmailUserSummaryContactCategoryID'
  })
  intRTEmailUserSummaryContactCategoryID: number;

  @Column('text', {
    nullable: false,
    name: 'varRTEmailUserSummaryEmailAddress'
  })
  varRTEmailUserSummaryEmailAddress: string;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailUserSummaryFirstName'
  })
  varRTEmailUserSummaryFirstName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailUserSummaryLastName'
  })
  varRTEmailUserSummaryLastName: string | null;

  @Column('text', {
    nullable: false,
    name: 'varRTEmailUserSummaryStatus'
  })
  varRTEmailUserSummaryStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTEmailUserSummaryResponseDate'
  })
  dteRTEmailUserSummaryResponseDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailUserSummaryClickText'
  })
  varRTEmailUserSummaryClickText: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailUserSummaryClickURL'
  })
  varRTEmailUserSummaryClickURL: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTEmailUserSummaryCreatedDate'
  })
  dteRTEmailUserSummaryCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTEmailUserSummaryModifiedDate'
  })
  dteRTEmailUserSummaryModifiedDate: Date;
}
