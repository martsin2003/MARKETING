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
import { tblCommunityProject } from './tblCommunityProject';
import { tblHomeEstimate } from './tblHomeEstimate';
import { tblModelPlanProjectHEOption } from './tblModelPlanProjectHEOption';

@Entity('tblModelPlanProject', { schema: 'public' })
@Index(
  'idx_18904_IX_tblModelPlanProject',
  [
    'intModelPlanProjectCommunityProject',
    'intModelPlanProjectModelGenericID',
    'intModelPlanProjectModelID',
    'varModelPlanProjectPlanCode',
    'varModelPlanProjectPlanProjectHash',
    'varModelPlanProjectProjectCode'
  ],
  { unique: true }
)
export class tblModelPlanProject {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intModelPlanProjectID'
  })
  intModelPlanProjectID: string;

  @Column('integer', {
    nullable: true,
    name: 'intModelPlanProjectModelID'
  })
  intModelPlanProjectModelID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelPlanProjectModelGenericID'
  })
  intModelPlanProjectModelGenericID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varModelPlanProjectPlanCode'
  })
  varModelPlanProjectPlanCode: string | null;

  @Column('text', {
    nullable: true,
    name: 'varModelPlanProjectProjectCode'
  })
  varModelPlanProjectProjectCode: string | null;

  @Column('text', {
    nullable: true,
    name: 'varModelPlanProjectPlanProjectHash'
  })
  varModelPlanProjectPlanProjectHash: string | null;

  @ManyToOne(
    type => tblCommunityProject,
    tblCommunityProject => tblCommunityProject.tblModelPlanProjects,
    {}
  )
  @JoinColumn({ name: 'intModelPlanProjectCommunityProjectID' })
  intModelPlanProjectCommunityProject: tblCommunityProject | null;

  @Column('text', {
    nullable: true,
    name: 'varModelPlanProjectMSPlanCode'
  })
  varModelPlanProjectMSPlanCode: string | null;

  @OneToMany(
    type => tblHomeEstimate,
    tblHomeEstimate => tblHomeEstimate.intHomeEstimateModelPlanProject
  )
  tblHomeEstimates: tblHomeEstimate[];

  @OneToMany(
    type => tblModelPlanProjectHEOption,
    tblModelPlanProjectHEOption =>
      tblModelPlanProjectHEOption.intModelPlanProjectHeOptionModelPlanProject
  )
  tblModelPlanProjectHeOptions: tblModelPlanProjectHEOption[];
}
