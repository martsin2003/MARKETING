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

@Entity('tblModelGenericElevation', { schema: 'public' })
export class tblModelGenericElevation {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intModelGenericElevationID'
  })
  intModelGenericElevationID: string;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericElevationModelGenericID'
  })
  intModelGenericElevationModelGenericID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varModelGenericElevationName'
  })
  varModelGenericElevationName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varModeGenericElevationImageFile'
  })
  varModeGenericElevationImageFile: string | null;

  @Column('text', {
    nullable: true,
    name: 'varModelGenericElevationStatus'
  })
  varModelGenericElevationStatus: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericElevationOrder'
  })
  intModelGenericElevationOrder: number | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bModelGenericElevationDefault'
  })
  bModelGenericElevationDefault: boolean | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteModelGenericElevationCreatedDate'
  })
  dteModelGenericElevationCreatedDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteModelGenericElevationModifiedDate'
  })
  dteModelGenericElevationModifiedDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varModelGenericElevationCaption'
  })
  varModelGenericElevationCaption: string | null;

  @OneToMany(
    type => tblHomeEstimate,
    tblHomeEstimate => tblHomeEstimate.intHomeEstimateModelGenericElevation,
    { onDelete: 'SET NULL' }
  )
  tblHomeEstimates: tblHomeEstimate[];
}
