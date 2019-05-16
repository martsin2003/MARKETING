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
import { tblHomeEstimateOffer } from './tblHomeEstimateOffer';

@Entity('tblHomeEstimateFinancePlanXRef', { schema: 'public' })
@Index(
  'idx_18081_IX_tblHomeEstimateFinancePlanXRef',
  ['intFinancePlan', 'intHomeEstimateFinancePlanID', 'intHomeEstimate'],
  { unique: true }
)
export class tblHomeEstimateFinancePlanXRef {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intHomeEstimateHomeEstimateFinancePlanID'
  })
  intHomeEstimateHomeEstimateFinancePlanID: string;

  @ManyToOne(
    type => tblHomeEstimate,
    tblHomeEstimate => tblHomeEstimate.tblHomeEstimateFinancePlanXRefs,
    { onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intHomeEstimateID' })
  intHomeEstimate: tblHomeEstimate | null;

  @Column('integer', {
    nullable: true,
    name: 'intHomeEstimateFinancePlanID'
  })
  intHomeEstimateFinancePlanID: number | null;

  @ManyToOne(
    type => tblFinancePlan,
    tblFinancePlan => tblFinancePlan.tblHomeEstimateFinancePlanXRefs,
    { onDelete: 'SET NULL' }
  )
  @JoinColumn({ name: 'intFinancePlanID' })
  intFinancePlan: tblFinancePlan | null;

  @OneToMany(
    type => tblHomeEstimateOffer,
    tblHomeEstimateOffer => tblHomeEstimateOffer.intHomeEstimateFinancePlanXRef,
    { onDelete: 'CASCADE' }
  )
  tblHomeEstimateOffers: tblHomeEstimateOffer[];
}
