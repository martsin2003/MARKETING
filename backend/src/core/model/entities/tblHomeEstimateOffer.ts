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
import { tblHomeEstimateFinancePlanXRef } from './tblHomeEstimateFinancePlanXRef';
import { tblHomeEstimateOfferAddendum } from './tblHomeEstimateOfferAddendum';
import { tblHomeEstimateOfferChangeOrderXRef } from './tblHomeEstimateOfferChangeOrderXRef';
import { tblHomeEstimateOfferContract } from './tblHomeEstimateOfferContract';

@Entity('tblHomeEstimateOffer', { schema: 'public' })
export class tblHomeEstimateOffer {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intHomeEstimateOfferID'
  })
  intHomeEstimateOfferID: string;

  @ManyToOne(
    type => tblHomeEstimateFinancePlanXRef,
    tblHomeEstimateFinancePlanXRef => tblHomeEstimateFinancePlanXRef.tblHomeEstimateOffers,
    { onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intHomeEstimateFinancePlanXRefID' })
  intHomeEstimateFinancePlanXRef: tblHomeEstimateFinancePlanXRef | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteOfferEstClosingDate'
  })
  dteOfferEstClosingDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varOfferAvailClosingAndIncentives'
  })
  varOfferAvailClosingAndIncentives: string | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferDiscountAmt'
  })
  curOfferDiscountAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferClosingCostCreditAmt'
  })
  curOfferClosingCostCreditAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferRealtorBonusAmt'
  })
  curOfferRealtorBonusAmt: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bOfferBrokerCommission'
  })
  bOfferBrokerCommission: boolean;

  @Column('text', {
    nullable: true,
    name: 'varOfferBrokerCommissionBrokerType'
  })
  varOfferBrokerCommissionBrokerType: string | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferBrokerCommissionPct'
  })
  curOfferBrokerCommissionPct: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferBrokerCommissionAmt'
  })
  curOfferBrokerCommissionAmt: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bOfferContingencyExtension'
  })
  bOfferContingencyExtension: boolean;

  @Column('integer', {
    nullable: true,
    name: 'intOfferContingencyExtensionCode'
  })
  intOfferContingencyExtensionCode: number | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteOfferContingencyExtensionExpDate'
  })
  dteOfferContingencyExtensionExpDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varOfferMLSNumber'
  })
  varOfferMLSNumber: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOfferFirm'
  })
  varOfferFirm: string | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferTotalUsedAmt'
  })
  curOfferTotalUsedAmt: string;

  @Column('integer', {
    nullable: true,
    name: 'intOfferTotalUsedAmtPosition'
  })
  intOfferTotalUsedAmtPosition: number | null;

  @Column('text', {
    nullable: true,
    name: 'txtOfferComments'
  })
  txtOfferComments: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtOfferOtherDocs'
  })
  txtOfferOtherDocs: string | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferFullPriceAmt'
  })
  curOfferFullPriceAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferContractPriceAmt'
  })
  curOfferContractPriceAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferHomeEstimateIncentive'
  })
  curOfferHomeEstimateIncentive: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferDepositAmt'
  })
  curOfferDepositAmt: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bOfferDepositAmtFullPmnt'
  })
  bOfferDepositAmtFullPmnt: boolean;

  @Column('text', {
    nullable: true,
    name: 'varOfferHC'
  })
  varOfferHC: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteOfferHCDate'
  })
  dteOfferHCDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteOfferCreatedDate'
  })
  dteOfferCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteOfferModifiedDate'
  })
  dteOfferModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intSalesRepUser'
  })
  intSalesRepUser: number | null;

  @Column('text', {
    nullable: true,
    name: 'varSalesRepName'
  })
  varSalesRepName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSalesRepSalesCode'
  })
  varSalesRepSalesCode: string | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferHomeEstimateStdOptionsFinance'
  })
  curOfferHomeEstimateStdOptionsFinance: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferHomeEstimateStdOptionsCash'
  })
  curOfferHomeEstimateStdOptionsCash: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferHomeEstimateCstmOptionsFinance'
  })
  curOfferHomeEstimateCstmOptionsFinance: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferHomeEstimateCstmOptionsCash'
  })
  curOfferHomeEstimateCstmOptionsCash: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferHomeEstimateHomesitePremium'
  })
  curOfferHomeEstimateHomesitePremium: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferDepositEarnestMoneyAmt'
  })
  curOfferDepositEarnestMoneyAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferHomeEstimateBasePrice'
  })
  curOfferHomeEstimateBasePrice: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferFinancePlanEstLoanAmt'
  })
  curOfferFinancePlanEstLoanAmt: string;

  @Column('text', {
    nullable: true,
    name: 'varOfferPDFFilename'
  })
  varOfferPDFFilename: string | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferCommunityAssociationFeesAmt'
  })
  curOfferCommunityAssociationFeesAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferCommunityInitialCapitalContributionAmt'
  })
  curOfferCommunityInitialCapitalContributionAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferFinancePlanUFIncentivesAmt'
  })
  curOfferFinancePlanUFIncentivesAmt: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bOfferRatified'
  })
  bOfferRatified: boolean;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferFinancePlanUFTotalInvestAmt'
  })
  curOfferFinancePlanUFTotalInvestAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferFinancePlanUFInitialInvestAmt'
  })
  curOfferFinancePlanUFInitialInvestAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferFinancePlanPITIMnthlyPmntAmt'
  })
  curOfferFinancePlanPITIMnthlyPmntAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferFinancePlanPITIMortgageInsAmt'
  })
  curOfferFinancePlanPITIMortgageInsAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferFinancePlanPITIHazardInsAmt'
  })
  curOfferFinancePlanPITIHazardInsAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferFinancePlanPITIPropertyTaxesAmt'
  })
  curOfferFinancePlanPITIPropertyTaxesAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOfferFinancePlanPITITotalMnthlyInvestAmt'
  })
  curOfferFinancePlanPITITotalMnthlyInvestAmt: string;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteOfferHomeToSellContingencyDate'
  })
  dteOfferHomeToSellContingencyDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varOfferHomeToSell'
  })
  varOfferHomeToSell: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOfferBrokerCommissionPDFFilename'
  })
  varOfferBrokerCommissionPDFFilename: string | null;

  @Column('text', {
    nullable: true,
    name: 'varOfferCommunitySiteplanInitialStatus'
  })
  varOfferCommunitySiteplanInitialStatus: string | null;

  @OneToMany(
    type => tblHomeEstimateOfferAddendum,
    tblHomeEstimateOfferAddendum => tblHomeEstimateOfferAddendum.intHomeEstimateOffer,
    { onDelete: 'CASCADE' }
  )
  tblHomeEstimateOfferAddendums: tblHomeEstimateOfferAddendum[];

  @OneToMany(
    type => tblHomeEstimateOfferChangeOrderXRef,
    tblHomeEstimateOfferChangeOrderXRef => tblHomeEstimateOfferChangeOrderXRef.intHomeEstimateOffer,
    { onDelete: 'CASCADE' }
  )
  tblHomeEstimateOfferChangeOrderXRefs: tblHomeEstimateOfferChangeOrderXRef[];

  @OneToMany(
    type => tblHomeEstimateOfferContract,
    tblHomeEstimateOfferContract =>
      tblHomeEstimateOfferContract.intHomeEstimateOfferContractHomeEstimateOffer,
    { onDelete: 'CASCADE' }
  )
  tblHomeEstimateOfferContracts: tblHomeEstimateOfferContract[];
}
