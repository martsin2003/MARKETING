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
import { tblModelPlanProject } from './tblModelPlanProject';
import { tblHEOption } from './tblHEOption';

@Entity('tblModelPlanProjectHEOption', { schema: 'public' })
@Index('idx_18913_IX_tblModelPlanProjectHEOption', [
  'curModelPlanProjectHEOptionHEOptionUnitPrice',
  'intModelPlanProjectHeOptionHeOption',
  'intModelPlanProjectHeOptionModelPlanProject',
  'varModelPlanProjectHEOptionPlanProjectOptionHash'
])
export class tblModelPlanProjectHEOption {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intModelPlanProjectHEOptionID'
  })
  intModelPlanProjectHEOptionID: string;

  @ManyToOne(
    type => tblModelPlanProject,
    tblModelPlanProject => tblModelPlanProject.tblModelPlanProjectHeOptions,
    {}
  )
  @JoinColumn({ name: 'intModelPlanProjectHEOptionModelPlanProjectID' })
  intModelPlanProjectHeOptionModelPlanProject: tblModelPlanProject | null;

  @ManyToOne(type => tblHEOption, tblHEOption => tblHEOption.tblModelPlanProjectHeOptions, {})
  @JoinColumn({ name: 'intModelPlanProjectHEOptionHEOptionID' })
  intModelPlanProjectHeOptionHeOption: tblHEOption | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curModelPlanProjectHEOptionHEOptionUnitPrice'
  })
  curModelPlanProjectHEOptionHEOptionUnitPrice: string;

  @Column('text', {
    nullable: true,
    name: 'varModelPlanProjectHEOptionPlanProjectOptionHash'
  })
  varModelPlanProjectHEOptionPlanProjectOptionHash: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varModelPlanProjectHEOptionStatus'
  })
  varModelPlanProjectHEOptionStatus: string;
}
