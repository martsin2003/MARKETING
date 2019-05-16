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
import { tblChangeOrder } from './tblChangeOrder';
import { tblChangeOrderOptionSnapshot } from './tblChangeOrderOptionSnapshot';

@Entity('tblChangeOrderSnapshot', { schema: 'public' })
export class tblChangeOrderSnapshot {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intChangeOrderSnapshotID'
  })
  intChangeOrderSnapshotID: string;

  @ManyToOne(type => tblChangeOrder, tblChangeOrder => tblChangeOrder.tblChangeOrderSnapshots, {
    nullable: false
  })
  @JoinColumn({ name: 'intChangeOrderSnapshotChangeOrderID' })
  intChangeOrderSnapshotChangeOrder: tblChangeOrder | null;

  @Column('text', {
    nullable: true,
    name: 'varContactName'
  })
  varContactName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactAddress'
  })
  varContactAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCityStateZip'
  })
  varContactCityStateZip: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactPhone'
  })
  varContactPhone: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContractDate'
  })
  dteContractDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varHomesiteNumber'
  })
  varHomesiteNumber: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHomesiteBlockBldg'
  })
  varHomesiteBlockBldg: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHomesiteAddress'
  })
  varHomesiteAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varModelName'
  })
  varModelName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varElevationName'
  })
  varElevationName: string | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curBasePriceAmt'
  })
  curBasePriceAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curHomesitePremiumAmt'
  })
  curHomesitePremiumAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOptionsFinanceAmt'
  })
  curOptionsFinanceAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOptionsCashAmt'
  })
  curOptionsCashAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOptionsIncentivesAmt'
  })
  curOptionsIncentivesAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curTotalPriceAmt'
  })
  curTotalPriceAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curInitialInvestAmt'
  })
  curInitialInvestAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curClosingCostsAmt'
  })
  curClosingCostsAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curPrepaidCostsAmt'
  })
  curPrepaidCostsAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curUpfrontIncentivesAmt'
  })
  curUpfrontIncentivesAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curUpfrontInvestmentAmt'
  })
  curUpfrontInvestmentAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curLoanAmt'
  })
  curLoanAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curEarnestMoneyDepositAmt'
  })
  curEarnestMoneyDepositAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curOptionsDepositAmt'
  })
  curOptionsDepositAmt: string;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curLotReservationDepositAmt'
  })
  curLotReservationDepositAmt: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteChangeOrderSnapshotCreatedDate'
  })
  dteChangeOrderSnapshotCreatedDate: Date;

  @OneToMany(
    type => tblChangeOrderOptionSnapshot,
    tblChangeOrderOptionSnapshot =>
      tblChangeOrderOptionSnapshot.intChangeOrderOptionSnapshotChangeOrderSnapshot,
    { onDelete: 'CASCADE' }
  )
  tblChangeOrderOptionSnapshots: tblChangeOrderOptionSnapshot[];
}
