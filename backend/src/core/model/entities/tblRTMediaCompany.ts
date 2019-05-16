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
import { tblRTListingResponseSpend } from './tblRTListingResponseSpend';
import { tblRTMediaCompanyContact } from './tblRTMediaCompanyContact';

@Entity('tblRTMediaCompany', { schema: 'public' })
export class tblRTMediaCompany {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTMediaCompanyID'
  })
  intRTMediaCompanyID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTMediaCompanyName'
  })
  varRTMediaCompanyName: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varRTMediaCompanyStatus'
  })
  varRTMediaCompanyStatus: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTMediaCompanyArchivedFlg'
  })
  bRTMediaCompanyArchivedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTMediaCompanyCreatedDate'
  })
  dteRTMediaCompanyCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTMediaCompanyModifiedDate'
  })
  dteRTMediaCompanyModifiedDate: Date;

  @OneToMany(
    type => tblRTListingResponseSpend,
    tblRTListingResponseSpend => tblRTListingResponseSpend.intRtListingResponseSpendRtMediaCompany,
    { onDelete: 'CASCADE' }
  )
  tblRtListingResponseSpends: tblRTListingResponseSpend[];

  @OneToMany(
    type => tblRTMediaCompanyContact,
    tblRTMediaCompanyContact => tblRTMediaCompanyContact.intRtMediaCompanyContactRtMediaCompany,
    { onDelete: 'CASCADE' }
  )
  tblRtMediaCompanyContacts: tblRTMediaCompanyContact[];
}
