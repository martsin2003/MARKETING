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
import { tblContractPlanProject } from './tblContractPlanProject';

@Entity('tblContractPlanProjectHEOption', { schema: 'public' })
@Index(
  'idx_17331_IX_tblContractPlanProjectHEOption',
  [
    'curContractPlanProjectHEOptionHEOptionUnitPrice',
    'dteContractPlanProjectHEOptionCreatedDate',
    'dteContractPlanProjectHEOptionModifiedDate',
    'intContractPlanProjectHeOptionContractPlanProject',
    'intContractPlanProjectHEOptionHEOptionID',
    'varContractPlanProjectHEOptionStatus'
  ],
  { unique: true }
)
@Index(
  'idx_17331_IX_tblContractPlanProjectHEOption2',
  [
    'intContractPlanProjectHeOptionContractPlanProject',
    'intContractPlanProjectHEOptionHEOptionID',
    'varContractPlanProjectHEOptionStatus'
  ],
  { unique: true }
)
export class tblContractPlanProjectHEOption {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intContractPlanProjectHEOptionID'
  })
  intContractPlanProjectHEOptionID: string;

  @ManyToOne(
    type => tblContractPlanProject,
    tblContractPlanProject => tblContractPlanProject.tblContractPlanProjectHeOptions,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intContractPlanProjectHEOptionContractPlanProjectID' })
  intContractPlanProjectHeOptionContractPlanProject: tblContractPlanProject | null;

  @Column('integer', {
    nullable: true,
    name: 'intContractPlanProjectHEOptionHEOptionID'
  })
  intContractPlanProjectHEOptionHEOptionID: number | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curContractPlanProjectHEOptionHEOptionUnitPrice'
  })
  curContractPlanProjectHEOptionHEOptionUnitPrice: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varContractPlanProjectHEOptionStatus'
  })
  varContractPlanProjectHEOptionStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteContractPlanProjectHEOptionCreatedDate'
  })
  dteContractPlanProjectHEOptionCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteContractPlanProjectHEOptionModifiedDate'
  })
  dteContractPlanProjectHEOptionModifiedDate: Date;
}
