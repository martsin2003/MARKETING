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
import { tblCommunityProject } from './tblCommunityProject';

@Entity('tblContractHomesite', { schema: 'public' })
export class tblContractHomesite {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intContractHomesiteID'
  })
  intContractHomesiteID: string;

  @ManyToOne(
    type => tblCommunityProject,
    tblCommunityProject => tblCommunityProject.tblContractHomesites,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intContractHomesiteCommunityProjectID' })
  intContractHomesiteCommunityProject: tblCommunityProject | null;

  @Column('text', {
    nullable: false,
    name: 'varContractHomesiteLotIdentifier'
  })
  varContractHomesiteLotIdentifier: string;

  @Column('text', {
    nullable: true,
    name: 'varContractHomesiteLotSection'
  })
  varContractHomesiteLotSection: string | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curContractHomesiteLotPrice'
  })
  curContractHomesiteLotPrice: string;

  @Column('text', {
    nullable: false,
    name: 'varContractHomesiteLotStatus'
  })
  varContractHomesiteLotStatus: string;

  @Column('text', {
    nullable: true,
    name: 'varContractHomesiteLotAddress'
  })
  varContractHomesiteLotAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContractHomesiteLotAddress2'
  })
  varContractHomesiteLotAddress2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContractHomesiteLotCity'
  })
  varContractHomesiteLotCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContractHomesiteLotState'
  })
  varContractHomesiteLotState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContractHomesiteLotZip'
  })
  varContractHomesiteLotZip: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intContractHomesiteLotCountyID'
  })
  intContractHomesiteLotCountyID: number | null;

  @Column('text', {
    nullable: false,
    default: () => "'na'",
    name: 'varContractHomesiteGarageEntry'
  })
  varContractHomesiteGarageEntry: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bContractHomesiteDeletedFlg'
  })
  bContractHomesiteDeletedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteContractHomesiteCreatedDate'
  })
  dteContractHomesiteCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteContractHomesiteModifiedDate'
  })
  dteContractHomesiteModifiedDate: Date;

  @Column('integer', {
    nullable: false,
    name: 'intContractHomesiteCreatedBy'
  })
  intContractHomesiteCreatedBy: number;

  @Column('integer', {
    nullable: false,
    name: 'intContractHomesiteModifiedBy'
  })
  intContractHomesiteModifiedBy: number;
}
