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
import { tblHomeEstimateFinancePlanDeposit } from './tblHomeEstimateFinancePlanDeposit';

@Entity('tblHomeEstimateFinancePlanDepositXRef', { schema: 'public' })
@Index(
  'idx_18075_IX_tblHomeEstimateFinancePlanDepositXRef',
  ['intDeposit', 'intHomeEstimateFinancePlanXRefID'],
  { unique: true }
)
export class tblHomeEstimateFinancePlanDepositXRef {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intHomeEstimateHomeEstimateFinancePlanHomeEstimateFinancePlanDe'
  })
  intHomeEstimateHomeEstimateFinancePlanHomeEstimateFinancePlanDe: string;

  @Column('integer', {
    nullable: true,
    name: 'intHomeEstimateFinancePlanXRefID'
  })
  intHomeEstimateFinancePlanXRefID: number | null;

  @ManyToOne(
    type => tblHomeEstimateFinancePlanDeposit,
    tblHomeEstimateFinancePlanDeposit =>
      tblHomeEstimateFinancePlanDeposit.tblHomeEstimateFinancePlanDepositXRefs,
    { onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intDepositID' })
  intDeposit: tblHomeEstimateFinancePlanDeposit | null;
}
