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
import { tblHomeEstimate } from './tblHomeEstimate';
import { tblFinancePlan } from './tblFinancePlan';

@Entity('tblHomeEstimateFinancePlan', { schema: 'public' })
export class tblHomeEstimateFinancePlan {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intHomeEstimateFinancePlanID'
  })
  intHomeEstimateFinancePlanID: string;

  @ManyToOne(
    type => tblHomeEstimate,
    tblHomeEstimate => tblHomeEstimate.tblHomeEstimateFinancePlans,
    { onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intHomeEstimateID' })
  intHomeEstimate: tblHomeEstimate | null;

  @ManyToOne(type => tblFinancePlan, tblFinancePlan => tblFinancePlan.tblHomeEstimateFinancePlans, {
    onDelete: 'SET NULL'
  })
  @JoinColumn({ name: 'intFinancePlanID' })
  intFinancePlan: tblFinancePlan | null;

  @Column('text', {
    nullable: true,
    name: 'varFinancePlanName'
  })
  varFinancePlanName: string | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanInterestRatePct'
  })
  curFinancePlanInterestRatePct: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFinancePlanInterestRateSemiAnnual'
  })
  bFinancePlanInterestRateSemiAnnual: boolean;

  @Column('integer', {
    nullable: true,
    name: 'intFinancePlanLoanTerm'
  })
  intFinancePlanLoanTerm: number | null;

  @Column('numeric', {
    nullable: false,
    name: 'curFinancePlanDiscountPointsPct'
  })
  curFinancePlanDiscountPointsPct: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanEstTotalPriceAmt'
  })
  curFinancePlanEstTotalPriceAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanEstLoanAmt'
  })
  curFinancePlanEstLoanAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanMaxLoanAmt'
  })
  curFinancePlanMaxLoanAmt: string;

  @Column('integer', {
    nullable: true,
    name: 'intFinancePlanFinancePlanLoanTypeID'
  })
  intFinancePlanFinancePlanLoanTypeID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varFinancePlanFinancePlanLoanType'
  })
  varFinancePlanFinancePlanLoanType: string | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanFundingFeePct'
  })
  curFinancePlanFundingFeePct: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanMinDownPmntPct'
  })
  curFinancePlanMinDownPmntPct: string;

  @Column('text', {
    nullable: true,
    name: 'varFinancePlanARMIndex'
  })
  varFinancePlanARMIndex: string | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanARMMarginPct'
  })
  curFinancePlanARMMarginPct: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanARMCapRatePct'
  })
  curFinancePlanARMCapRatePct: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanARMIndexRatePct'
  })
  curFinancePlanARMIndexRatePct: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanARMAdjustmentsPct'
  })
  curFinancePlanARMAdjustmentsPct: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanPITIMnthlyPmntAmt'
  })
  curFinancePlanPITIMnthlyPmntAmt: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFinancePlanPITIMortgageInsLenderPaid'
  })
  bFinancePlanPITIMortgageInsLenderPaid: boolean;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanPITIMortgageInsRatePct'
  })
  curFinancePlanPITIMortgageInsRatePct: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanPITIMortgageInsAmt'
  })
  curFinancePlanPITIMortgageInsAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanPITIHazardInsRatePct'
  })
  curFinancePlanPITIHazardInsRatePct: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanPITIHazardInsAmt'
  })
  curFinancePlanPITIHazardInsAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanPITIPropertyTaxRatePct'
  })
  curFinancePlanPITIPropertyTaxRatePct: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanPITIPropertyTaxesAmt'
  })
  curFinancePlanPITIPropertyTaxesAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanPITIAssociationFeesAmt'
  })
  curFinancePlanPITIAssociationFeesAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanPITITotalMnthlyInvestAmt'
  })
  curFinancePlanPITITotalMnthlyInvestAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanUFInitialInvestAmt'
  })
  curFinancePlanUFInitialInvestAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanUFClosingCostsPct'
  })
  curFinancePlanUFClosingCostsPct: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanUFClosingCostsAmt'
  })
  curFinancePlanUFClosingCostsAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanUFCashOptionsAmt'
  })
  curFinancePlanUFCashOptionsAmt: string;

  @Column('integer', {
    nullable: false,
    name: 'intFinancePlanUFPrepaidTaxesDays'
  })
  intFinancePlanUFPrepaidTaxesDays: number;

  @Column('integer', {
    nullable: false,
    name: 'intFinancePlanUFPrepaidInterestDays'
  })
  intFinancePlanUFPrepaidInterestDays: number;

  @Column('integer', {
    nullable: false,
    name: 'intFinancePlanUFPrepaidInsuranceDays'
  })
  intFinancePlanUFPrepaidInsuranceDays: number;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanUFPrepaidCostsAmt'
  })
  curFinancePlanUFPrepaidCostsAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanUFIncentivesAmt'
  })
  curFinancePlanUFIncentivesAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanUFTotalInvestAmt'
  })
  curFinancePlanUFTotalInvestAmt: string;

  @Column('text', {
    nullable: true,
    name: 'txtFinancePlanNotes'
  })
  txtFinancePlanNotes: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFinancePlanDepositAdded'
  })
  bFinancePlanDepositAdded: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFinancePlanCreatedDate'
  })
  dteFinancePlanCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFinancePlanModifiedDate'
  })
  dteFinancePlanModifiedDate: Date;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curFinancePlanUFOptionsIncentivesAmt'
  })
  curFinancePlanUFOptionsIncentivesAmt: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFinancePlanCashOption'
  })
  bFinancePlanCashOption: boolean;
}
