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
import { tblRTMediaCompany } from './tblRTMediaCompany';

@Entity('tblRTMediaCompanyContact', { schema: 'public' })
export class tblRTMediaCompanyContact {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTMediaCompanyContactID'
  })
  intRTMediaCompanyContactID: string;

  @ManyToOne(
    type => tblRTMediaCompany,
    tblRTMediaCompany => tblRTMediaCompany.tblRtMediaCompanyContacts,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTMediaCompanyContactRTMediaCompanyID' })
  intRtMediaCompanyContactRtMediaCompany: tblRTMediaCompany | null;

  @Column('text', {
    nullable: false,
    name: 'varRTMediaCompanyContactFirstName'
  })
  varRTMediaCompanyContactFirstName: string;

  @Column('text', {
    nullable: false,
    name: 'varRTMediaCompanyContactLastName'
  })
  varRTMediaCompanyContactLastName: string;

  @Column('text', {
    nullable: true,
    name: 'varRTMediaCompanyContactEmail'
  })
  varRTMediaCompanyContactEmail: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTMediaCompanyContactPhone'
  })
  varRTMediaCompanyContactPhone: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varRTMediaCompanyContactStatus'
  })
  varRTMediaCompanyContactStatus: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTMediaCompanyContactArchivedFlg'
  })
  bRTMediaCompanyContactArchivedFlg: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTMediaCompanyContactPrimaryFlg'
  })
  bRTMediaCompanyContactPrimaryFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTMediaCompanyContactCreatedDate'
  })
  dteRTMediaCompanyContactCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTMediaCompanyContactModifiedDate'
  })
  dteRTMediaCompanyContactModifiedDate: Date;
}
