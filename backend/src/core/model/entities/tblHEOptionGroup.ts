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
import { tblHEOption } from './tblHEOption';
import { tblHomeEstimateOption } from './tblHomeEstimateOption';
import { tblPaperSpecOption } from './tblPaperSpecOption';

@Entity('tblHEOptionGroup', { schema: 'public' })
@Index(
  'idx_17997_IX_tblHEOptionGroup',
  [
    'varHEOptionGroupCRMDisplayText',
    'varHEOptionGroupCode',
    'varHEOptionGroupDesc',
    'varHEOptionGroupStatus'
  ],
  { unique: true }
)
export class tblHEOptionGroup {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intHEOptionGroupID'
  })
  intHEOptionGroupID: string;

  @Column('text', {
    nullable: false,
    name: 'varHEOptionGroupCode'
  })
  varHEOptionGroupCode: string;

  @Column('text', {
    nullable: true,
    name: 'varHEOptionGroupDesc'
  })
  varHEOptionGroupDesc: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHEOptionGroupCRMDisplayText'
  })
  varHEOptionGroupCRMDisplayText: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHEOptionGroupStatus'
  })
  varHEOptionGroupStatus: string | null;

  @OneToMany(type => tblHEOption, tblHEOption => tblHEOption.intHeOptionHeOptionGroup)
  tblHeOptions: tblHEOption[];

  @OneToMany(
    type => tblHomeEstimateOption,
    tblHomeEstimateOption => tblHomeEstimateOption.intHomeEstimateOptionHeOptionGroup
  )
  tblHomeEstimateOptions: tblHomeEstimateOption[];

  @OneToMany(
    type => tblPaperSpecOption,
    tblPaperSpecOption => tblPaperSpecOption.intPaperSpecOptionHeOptionGroup
  )
  tblPaperSpecOptions: tblPaperSpecOption[];
}
