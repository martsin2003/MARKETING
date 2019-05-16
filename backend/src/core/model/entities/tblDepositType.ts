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

@Entity('tblDepositType', { schema: 'public' })
@Index('idx_17406_IX_tblDepositType', ['intDepositTypeSort', 'varDepositType'], { unique: true })
export class tblDepositType {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intDepositTypeID'
  })
  intDepositTypeID: string;

  @Column('text', {
    nullable: true,
    name: 'varDepositType'
  })
  varDepositType: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intDepositTypeSort'
  })
  intDepositTypeSort: number | null;

  @OneToMany(
    type => tblHomeEstimateFinancePlanDeposit,
    tblHomeEstimateFinancePlanDeposit => tblHomeEstimateFinancePlanDeposit.intDepositDepositType,
    { onDelete: 'SET NULL' }
  )
  tblHomeEstimateFinancePlanDeposits: tblHomeEstimateFinancePlanDeposit[];
}
