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
import { tblPaperSpec } from './tblPaperSpec';

@Entity('tblPaperSpecHomesite', { schema: 'public' })
export class tblPaperSpecHomesite {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intPaperSpecHomesiteID'
  })
  intPaperSpecHomesiteID: string;

  @ManyToOne(type => tblPaperSpec, tblPaperSpec => tblPaperSpec.tblPaperSpecHomesites, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intPaperSpecHomesitePaperSpecID' })
  intPaperSpecHomesitePaperSpec: tblPaperSpec | null;

  @Column('integer', {
    nullable: false,
    name: 'intPaperSpecHomesiteContractHomesiteID'
  })
  intPaperSpecHomesiteContractHomesiteID: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dtePaperSpecHomesiteCreatedDate'
  })
  dtePaperSpecHomesiteCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dtePaperSpecHomesiteModifiedDate'
  })
  dtePaperSpecHomesiteModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varPaperSpecHomesiteLotIdentifier'
  })
  varPaperSpecHomesiteLotIdentifier: string | null;

  @Column('text', {
    nullable: true,
    name: 'varPaperSpecHomesiteLotSection'
  })
  varPaperSpecHomesiteLotSection: string | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curPaperSpecHomesiteLotPrice'
  })
  curPaperSpecHomesiteLotPrice: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varPaperSpecHomesiteLotStatus'
  })
  varPaperSpecHomesiteLotStatus: string;

  @Column('text', {
    nullable: true,
    name: 'varPaperSpecHomesiteLotAddress'
  })
  varPaperSpecHomesiteLotAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varPaperSpecHomesiteLotAddress2'
  })
  varPaperSpecHomesiteLotAddress2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varPaperSpecHomesiteLotCity'
  })
  varPaperSpecHomesiteLotCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varPaperSpecHomesiteLotState'
  })
  varPaperSpecHomesiteLotState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varPaperSpecHomesiteLotZip'
  })
  varPaperSpecHomesiteLotZip: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intPaperSpecHomesiteLotCountyID'
  })
  intPaperSpecHomesiteLotCountyID: number | null;

  @Column('text', {
    nullable: false,
    default: () => "'na'",
    name: 'varPaperSpecHomesiteGarageEntry'
  })
  varPaperSpecHomesiteGarageEntry: string;
}
