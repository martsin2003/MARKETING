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

@Entity('tblRTListingResponseSpend', { schema: 'public' })
export class tblRTListingResponseSpend {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTListingResponseSpendID'
  })
  intRTListingResponseSpendID: string;

  @ManyToOne(
    type => tblRTMediaCompany,
    tblRTMediaCompany => tblRTMediaCompany.tblRtListingResponseSpends,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTListingResponseSpendRTMediaCompanyID' })
  intRtListingResponseSpendRtMediaCompany: tblRTMediaCompany | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTListingResponseSpendStart'
  })
  dteRTListingResponseSpendStart: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTListingResponseSpendEnd'
  })
  dteRTListingResponseSpendEnd: Date;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curRTListingResponseSpendAmt'
  })
  curRTListingResponseSpendAmt: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTListingResponseSpendCreatedDate'
  })
  dteRTListingResponseSpendCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTListingResponseSpendModifiedDate'
  })
  dteRTListingResponseSpendModifiedDate: Date;
}
