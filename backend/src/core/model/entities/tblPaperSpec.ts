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
import { tblContractPlanContractPlanProjectXRef } from './tblContractPlanContractPlanProjectXRef';
import { tblHomeEstimate } from './tblHomeEstimate';
import { tblPaperSpecHomesite } from './tblPaperSpecHomesite';
import { tblPaperSpecOption } from './tblPaperSpecOption';

@Entity('tblPaperSpec', { schema: 'public' })
export class tblPaperSpec {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intPaperSpecID'
  })
  intPaperSpecID: string;

  @Column('text', {
    nullable: false,
    name: 'varPaperSpecName'
  })
  varPaperSpecName: string;

  @ManyToOne(
    type => tblContractPlanContractPlanProjectXRef,
    tblContractPlanContractPlanProjectXRef => tblContractPlanContractPlanProjectXRef.tblPaperSpecs,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intPaperSpecContractPlanContractPlanProjectXRefID' })
  intPaperSpecContractPlanContractPlanProjectXRef: tblContractPlanContractPlanProjectXRef | null;

  @Column('text', {
    nullable: true,
    name: 'varPaperSpecModelName'
  })
  varPaperSpecModelName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varPaperSpecModelElevationName'
  })
  varPaperSpecModelElevationName: string | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curPaperSpecBasePrice'
  })
  curPaperSpecBasePrice: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curPaperSpecLotPremium'
  })
  curPaperSpecLotPremium: string;

  @Column('text', {
    nullable: true,
    name: 'chrPaperSpecGarageEntry'
  })
  chrPaperSpecGarageEntry: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varPaperSpecStatus'
  })
  varPaperSpecStatus: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curPaperSpecTotal'
  })
  curPaperSpecTotal: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dtePaperSpecCreatedDate'
  })
  dtePaperSpecCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dtePaperSpecModifiedDate'
  })
  dtePaperSpecModifiedDate: Date;

  @Column('integer', {
    nullable: false,
    name: 'intPaperSpecCreatedBy'
  })
  intPaperSpecCreatedBy: number;

  @Column('integer', {
    nullable: false,
    name: 'intPaperSpecModifiedBy'
  })
  intPaperSpecModifiedBy: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bPaperSpecDeletedFlg'
  })
  bPaperSpecDeletedFlg: boolean;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curPaperSpecOptionsIncentive'
  })
  curPaperSpecOptionsIncentive: string;

  @OneToMany(type => tblHomeEstimate, tblHomeEstimate => tblHomeEstimate.intHomeEstimatePaperSpec)
  tblHomeEstimates: tblHomeEstimate[];

  @OneToMany(
    type => tblPaperSpecHomesite,
    tblPaperSpecHomesite => tblPaperSpecHomesite.intPaperSpecHomesitePaperSpec,
    { onDelete: 'CASCADE' }
  )
  tblPaperSpecHomesites: tblPaperSpecHomesite[];

  @OneToMany(
    type => tblPaperSpecOption,
    tblPaperSpecOption => tblPaperSpecOption.intPaperSpecOptionPaperSpec,
    { onDelete: 'CASCADE' }
  )
  tblPaperSpecOptions: tblPaperSpecOption[];
}
