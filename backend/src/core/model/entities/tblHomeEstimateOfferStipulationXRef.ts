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
import { tblHomeEstimateOfferStipulation } from './tblHomeEstimateOfferStipulation';

@Entity('tblHomeEstimateOfferStipulationXRef', { schema: 'public' })
@Index(
  'idx_18155_IX_tblHomeEstimateOfferStipulationXRef',
  ['intHomeEstimateOfferID', 'intHomeEstimateOfferStipulation'],
  { unique: true }
)
export class tblHomeEstimateOfferStipulationXRef {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intHomeEstimateOfferStipulationXRefID'
  })
  intHomeEstimateOfferStipulationXRefID: string;

  @Column('integer', {
    nullable: false,
    name: 'intHomeEstimateOfferID'
  })
  intHomeEstimateOfferID: number;

  @ManyToOne(
    type => tblHomeEstimateOfferStipulation,
    tblHomeEstimateOfferStipulation =>
      tblHomeEstimateOfferStipulation.tblHomeEstimateOfferStipulationXRefs,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intHomeEstimateOfferStipulationID' })
  intHomeEstimateOfferStipulation: tblHomeEstimateOfferStipulation | null;
}
