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
import { tblCommunity } from './tblCommunity';
import { tblContact } from './tblContact';
import { tblMoveInNow } from './tblMoveInNow';
import { tblModelGeneric } from './tblModelGeneric';
import { tblModelGenericElevation } from './tblModelGenericElevation';
import { tblSiteplan } from './tblSiteplan';
import { tblModelPlanProject } from './tblModelPlanProject';
import { tblPaperSpec } from './tblPaperSpec';
import { tblContractPlanContractPlanProjectXRef } from './tblContractPlanContractPlanProjectXRef';
import { tblHomeEstimateFinancePlan } from './tblHomeEstimateFinancePlan';
import { tblHomeEstimateFinancePlanXRef } from './tblHomeEstimateFinancePlanXRef';
import { tblHomeEstimateOption } from './tblHomeEstimateOption';

@Entity('tblHomeEstimate', { schema: 'public' })
@Index(
  'idx_18006_IX_tblHomeEstimate2',
  [
    'dteHomeEstimateModifiedDate',
    'intHomeEstimateCommunity',
    'intHomeEstimateContact',
    'intHomeEstimateType',
    'varHomeEstimateElevationName',
    'varHomeEstimateName',
    'varHomeEstimatePlanName',
    'varHomeEstimateStatus'
  ],
  { unique: true }
)
@Index(
  'idx_18006_IX_tblHomeEstimate',
  [
    'dteHomeEstimateModifiedDate',
    'varHomeEstimateModelGenericElevationName',
    'varHomeEstimateModelGenericName',
    'varHomeEstimateName',
    'varHomeEstimateStatus'
  ],
  { unique: true }
)
export class tblHomeEstimate {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intHomeEstimateID'
  })
  intHomeEstimateID: string;

  @ManyToOne(type => tblCommunity, tblCommunity => tblCommunity.tblHomeEstimates, {
    onDelete: 'SET NULL'
  })
  @JoinColumn({ name: 'intHomeEstimateCommunityID' })
  intHomeEstimateCommunity: tblCommunity | null;

  @ManyToOne(type => tblContact, tblContact => tblContact.tblHomeEstimates, {
    onDelete: 'SET NULL'
  })
  @JoinColumn({ name: 'intHomeEstimateContactID' })
  intHomeEstimateContact: tblContact | null;

  @Column('integer', {
    nullable: true,
    name: 'intHomeEstimateType'
  })
  intHomeEstimateType: number | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateName'
  })
  varHomeEstimateName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateDesc'
  })
  varHomeEstimateDesc: string | null;

  @ManyToOne(type => tblMoveInNow, tblMoveInNow => tblMoveInNow.tblHomeEstimates, {
    onDelete: 'SET NULL'
  })
  @JoinColumn({ name: 'intHomeEstimateMoveInNowID' })
  intHomeEstimateMoveInNow: tblMoveInNow | null;

  @ManyToOne(type => tblModelGeneric, tblModelGeneric => tblModelGeneric.tblHomeEstimates, {
    onDelete: 'SET NULL'
  })
  @JoinColumn({ name: 'intHomeEstimateModelGenericID' })
  intHomeEstimateModelGeneric: tblModelGeneric | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateModelGenericName'
  })
  varHomeEstimateModelGenericName: string | null;

  @ManyToOne(
    type => tblModelGenericElevation,
    tblModelGenericElevation => tblModelGenericElevation.tblHomeEstimates,
    { onDelete: 'SET NULL' }
  )
  @JoinColumn({ name: 'intHomeEstimateModelGenericElevationID' })
  intHomeEstimateModelGenericElevation: tblModelGenericElevation | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateModelGenericElevationName'
  })
  varHomeEstimateModelGenericElevationName: string | null;

  @ManyToOne(type => tblSiteplan, tblSiteplan => tblSiteplan.tblHomeEstimates, {
    onDelete: 'SET NULL'
  })
  @JoinColumn({ name: 'intHomeEstimateSiteplanID' })
  intHomeEstimateSiteplan: tblSiteplan | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateHomesiteNumber'
  })
  varHomeEstimateHomesiteNumber: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateHomesiteBlockBldg'
  })
  varHomeEstimateHomesiteBlockBldg: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateHomesiteGarageEntry'
  })
  varHomeEstimateHomesiteGarageEntry: string | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curHomeEstimateHomesitePremium'
  })
  curHomeEstimateHomesitePremium: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curHomeEstimateIncentive'
  })
  curHomeEstimateIncentive: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curHomeEstimateBasePrice'
  })
  curHomeEstimateBasePrice: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curHomeEstimateStdOptionsFinance'
  })
  curHomeEstimateStdOptionsFinance: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curHomeEstimateStdOptionsCash'
  })
  curHomeEstimateStdOptionsCash: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curHomeEstimateCstmOptionsFinance'
  })
  curHomeEstimateCstmOptionsFinance: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curHomeEstimateCstmOptionsCash'
  })
  curHomeEstimateCstmOptionsCash: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curHomeEstimateTotal'
  })
  curHomeEstimateTotal: string;

  @Column('text', {
    nullable: false,
    default: () => "'pending'",
    name: 'varHomeEstimateStatus'
  })
  varHomeEstimateStatus: string;

  @Column('integer', {
    nullable: false,
    name: 'intHomeEstimateNameIncrementer'
  })
  intHomeEstimateNameIncrementer: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteHomeEstimateCreatedDate'
  })
  dteHomeEstimateCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteHomeEstimateModifiedDate'
  })
  dteHomeEstimateModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateModelPlanCode'
  })
  varHomeEstimateModelPlanCode: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateModelProjectCode'
  })
  varHomeEstimateModelProjectCode: string | null;

  @ManyToOne(
    type => tblModelPlanProject,
    tblModelPlanProject => tblModelPlanProject.tblHomeEstimates,
    {}
  )
  @JoinColumn({ name: 'intHomeEstimateModelPlanProjectID' })
  intHomeEstimateModelPlanProject: tblModelPlanProject | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateHomesiteAddress'
  })
  varHomeEstimateHomesiteAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateHomesiteCity'
  })
  varHomeEstimateHomesiteCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateHomesiteState'
  })
  varHomeEstimateHomesiteState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateHomesiteZip'
  })
  varHomeEstimateHomesiteZip: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intHomeEstimateCommunitySiteplanID'
  })
  intHomeEstimateCommunitySiteplanID: number | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bHomeEstimateLegacyFlg'
  })
  bHomeEstimateLegacyFlg: boolean;

  @ManyToOne(type => tblPaperSpec, tblPaperSpec => tblPaperSpec.tblHomeEstimates, {})
  @JoinColumn({ name: 'intHomeEstimatePaperSpecID' })
  intHomeEstimatePaperSpec: tblPaperSpec | null;

  @ManyToOne(
    type => tblContractPlanContractPlanProjectXRef,
    tblContractPlanContractPlanProjectXRef =>
      tblContractPlanContractPlanProjectXRef.tblHomeEstimates,
    {}
  )
  @JoinColumn({ name: 'intHomeEstimateContractPlanContractPlanProjectXRefID' })
  intHomeEstimateContractPlanContractPlanProjectXRef: tblContractPlanContractPlanProjectXRef | null;

  @Column('integer', {
    nullable: true,
    name: 'intHomeEstimateContractPlanProjectID'
  })
  intHomeEstimateContractPlanProjectID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intHomeEstimateContractPlanID'
  })
  intHomeEstimateContractPlanID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimatePlanCode'
  })
  varHomeEstimatePlanCode: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateProjectCode'
  })
  varHomeEstimateProjectCode: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimatePlanName'
  })
  varHomeEstimatePlanName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateElevationName'
  })
  varHomeEstimateElevationName: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intHomeEstimateContractHomesiteID'
  })
  intHomeEstimateContractHomesiteID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateHomesiteAddress2'
  })
  varHomeEstimateHomesiteAddress2: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intHomeEstimateHomesiteCountyID'
  })
  intHomeEstimateHomesiteCountyID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeEstimateHomesiteCounty'
  })
  varHomeEstimateHomesiteCounty: string | null;

  @OneToMany(
    type => tblHomeEstimateFinancePlan,
    tblHomeEstimateFinancePlan => tblHomeEstimateFinancePlan.intHomeEstimate,
    { onDelete: 'CASCADE' }
  )
  tblHomeEstimateFinancePlans: tblHomeEstimateFinancePlan[];

  @OneToMany(
    type => tblHomeEstimateFinancePlanXRef,
    tblHomeEstimateFinancePlanXRef => tblHomeEstimateFinancePlanXRef.intHomeEstimate,
    { onDelete: 'CASCADE' }
  )
  tblHomeEstimateFinancePlanXRefs: tblHomeEstimateFinancePlanXRef[];

  @OneToMany(
    type => tblHomeEstimateOption,
    tblHomeEstimateOption => tblHomeEstimateOption.intHomeEstimateOptionHomeEstimate,
    { onDelete: 'CASCADE' }
  )
  tblHomeEstimateOptions: tblHomeEstimateOption[];
}
