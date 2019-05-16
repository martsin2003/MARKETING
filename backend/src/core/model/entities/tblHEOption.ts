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
import { tblHEOptionGroup } from './tblHEOptionGroup';
import { tblHomeEstimateOption } from './tblHomeEstimateOption';
import { tblModelPlanProjectHEOption } from './tblModelPlanProjectHEOption';
import { tblPaperSpecOption } from './tblPaperSpecOption';

@Entity('tblHEOption', { schema: 'public' })
@Index(
  'idx_17986_IX_tblHEOption',
  [
    'intHeOptionHeOptionGroup',
    'varHEOptionCode',
    'varHEOptionGroupCode',
    'varHEOptionOptionGroupHash',
    'varHEOptionStatus'
  ],
  { unique: true }
)
export class tblHEOption {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intHEOptionID'
  })
  intHEOptionID: string;

  @ManyToOne(type => tblHEOptionGroup, tblHEOptionGroup => tblHEOptionGroup.tblHeOptions, {})
  @JoinColumn({ name: 'intHEOptionHEOptionGroupID' })
  intHeOptionHeOptionGroup: tblHEOptionGroup | null;

  @Column('text', {
    nullable: false,
    name: 'varHEOptionCode'
  })
  varHEOptionCode: string;

  @Column('text', {
    nullable: true,
    name: 'varHEOptionDesc'
  })
  varHEOptionDesc: string | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curHEOptionUnitPrice'
  })
  curHEOptionUnitPrice: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varHEOptionStatus'
  })
  varHEOptionStatus: string;

  @Column('text', {
    nullable: true,
    name: 'varHEOptionGroupCode'
  })
  varHEOptionGroupCode: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHEOptionOptionGroupHash'
  })
  varHEOptionOptionGroupHash: string | null;

  @OneToMany(
    type => tblHomeEstimateOption,
    tblHomeEstimateOption => tblHomeEstimateOption.intHomeEstimateOptionHeOption
  )
  tblHomeEstimateOptions: tblHomeEstimateOption[];

  @OneToMany(
    type => tblModelPlanProjectHEOption,
    tblModelPlanProjectHEOption => tblModelPlanProjectHEOption.intModelPlanProjectHeOptionHeOption
  )
  tblModelPlanProjectHeOptions: tblModelPlanProjectHEOption[];

  @OneToMany(
    type => tblPaperSpecOption,
    tblPaperSpecOption => tblPaperSpecOption.intPaperSpecOptionHeOption
  )
  tblPaperSpecOptions: tblPaperSpecOption[];
}
