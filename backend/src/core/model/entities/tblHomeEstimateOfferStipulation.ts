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
import { tblHomeEstimateOfferStipulationXRef } from './tblHomeEstimateOfferStipulationXRef';

@Entity('tblHomeEstimateOfferStipulation', { schema: 'public' })
export class tblHomeEstimateOfferStipulation {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intStipulationID'
  })
  intStipulationID: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteStipulationDate'
  })
  dteStipulationDate: Date;

  @Column('text', {
    nullable: false,
    name: 'varStipulationTxt'
  })
  varStipulationTxt: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteStipulationCreatedDate'
  })
  dteStipulationCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteStipulationModifiedDate'
  })
  dteStipulationModifiedDate: Date;

  @Column('integer', {
    nullable: false,
    name: 'intStipulationNumber'
  })
  intStipulationNumber: number;

  @OneToMany(
    type => tblHomeEstimateOfferStipulationXRef,
    tblHomeEstimateOfferStipulationXRef =>
      tblHomeEstimateOfferStipulationXRef.intHomeEstimateOfferStipulation,
    { onDelete: 'CASCADE' }
  )
  tblHomeEstimateOfferStipulationXRefs: tblHomeEstimateOfferStipulationXRef[];
}
