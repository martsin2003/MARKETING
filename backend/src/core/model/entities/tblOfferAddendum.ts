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
import { tblHomeEstimateOfferAddendum } from './tblHomeEstimateOfferAddendum';

@Entity('tblOfferAddendum', { schema: 'public' })
export class tblOfferAddendum {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intOfferAddendumID'
  })
  intOfferAddendumID: string;

  @Column('text', {
    nullable: true,
    name: 'varOfferAddendum'
  })
  varOfferAddendum: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOfferAddendumTemplateName'
  })
  varOfferAddendumTemplateName: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intOfferAddendumSort'
  })
  intOfferAddendumSort: number | null;

  @Column('text', {
    nullable: true,
    name: 'varOfferAddendumStatus'
  })
  varOfferAddendumStatus: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteOfferAddendumCreatedDate'
  })
  dteOfferAddendumCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteOfferAddendumModifiedDate'
  })
  dteOfferAddendumModifiedDate: Date;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteOfferAddendumArchivedDate'
  })
  dteOfferAddendumArchivedDate: Date | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bOfferAddendumDynamic'
  })
  bOfferAddendumDynamic: boolean;

  @Column('text', {
    nullable: true,
    name: 'varOfferAddendumNameShort'
  })
  varOfferAddendumNameShort: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bAddendumIsContractFlg'
  })
  bAddendumIsContractFlg: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bOfferAddendumRestricted'
  })
  bOfferAddendumRestricted: boolean;

  @OneToMany(
    type => tblHomeEstimateOfferAddendum,
    tblHomeEstimateOfferAddendum => tblHomeEstimateOfferAddendum.intOfferAddendum,
    { onDelete: 'CASCADE' }
  )
  tblHomeEstimateOfferAddendums: tblHomeEstimateOfferAddendum[];
}
