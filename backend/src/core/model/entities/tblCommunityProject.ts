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
import { tblCommunity } from './tblCommunity';
import { tblCommunitySiteplan } from './tblCommunitySiteplan';
import { tblContractHomesite } from './tblContractHomesite';
import { tblContractPlanProject } from './tblContractPlanProject';
import { tblMBFCommunityProjectMessageEscalation } from './tblMBFCommunityProjectMessageEscalation';
import { tblModelCode } from './tblModelCode';
import { tblModelPlanProject } from './tblModelPlanProject';

@Entity('tblCommunityProject', { schema: 'public' })
@Index(
  'idx_16933_IX_tblCommunityProject',
  [
    'dteCommunityProjectCreatedDate',
    'dteCommunityProjectModifiedDate',
    'intCommunityProjectCommunity',
    'varCommunityProjectCode',
    'varCommunityProjectName'
  ],
  { unique: true }
)
export class tblCommunityProject {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunityProjectID'
  })
  intCommunityProjectID: string;

  @ManyToOne(type => tblCommunity, tblCommunity => tblCommunity.tblCommunityProjects, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intCommunityProjectCommunityID' })
  intCommunityProjectCommunity: tblCommunity | null;

  @Column('text', {
    nullable: false,
    name: 'varCommunityProjectCode'
  })
  varCommunityProjectCode: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCommunityProjectCreatedDate'
  })
  dteCommunityProjectCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCommunityProjectModifiedDate'
  })
  dteCommunityProjectModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varCommunityProjectName'
  })
  varCommunityProjectName: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varCommunityProjectStatus'
  })
  varCommunityProjectStatus: string;

  @OneToMany(
    type => tblCommunitySiteplan,
    tblCommunitySiteplan => tblCommunitySiteplan.intCommunitySiteplanCommunityProject,
    { onDelete: 'CASCADE' }
  )
  tblCommunitySiteplans: tblCommunitySiteplan[];

  @OneToMany(
    type => tblContractHomesite,
    tblContractHomesite => tblContractHomesite.intContractHomesiteCommunityProject,
    { onDelete: 'CASCADE' }
  )
  tblContractHomesites: tblContractHomesite[];

  @OneToMany(
    type => tblContractPlanProject,
    tblContractPlanProject => tblContractPlanProject.intContractPlanProjectCommunityProject,
    { onDelete: 'CASCADE' }
  )
  tblContractPlanProjects: tblContractPlanProject[];

  @OneToMany(
    type => tblMBFCommunityProjectMessageEscalation,
    tblMBFCommunityProjectMessageEscalation =>
      tblMBFCommunityProjectMessageEscalation.intMbfCommunityProjectMessageEscalationCommunityProject,
    { onDelete: 'CASCADE' }
  )
  tblMbfCommunityProjectMessageEscalations: tblMBFCommunityProjectMessageEscalation[];

  @OneToMany(type => tblModelCode, tblModelCode => tblModelCode.intModelCodeCommunityProject, {
    onDelete: 'CASCADE'
  })
  tblModelCodes: tblModelCode[];

  @OneToMany(
    type => tblModelPlanProject,
    tblModelPlanProject => tblModelPlanProject.intModelPlanProjectCommunityProject
  )
  tblModelPlanProjects: tblModelPlanProject[];
}
