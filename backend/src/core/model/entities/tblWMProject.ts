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
import { tblWMCommunity } from './tblWMCommunity';
import { tblAppLocationMasterTemplateAssignment } from './tblAppLocationMasterTemplateAssignment';
import { tblAppLocationTemplate } from './tblAppLocationTemplate';
import { tblWMSection } from './tblWMSection';

@Entity('tblWMProject', { schema: 'public' })
@Index(
  'idx_20862_IX_tblWMProject',
  [
    'intWMProjectCommunityProjectID',
    'intWMProjectID',
    'intWmProjectWmCommunity',
    'varWMProjectStatus'
  ],
  { unique: true }
)
export class tblWMProject {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intWMProjectID'
  })
  intWMProjectID: string;

  @ManyToOne(type => tblWMCommunity, tblWMCommunity => tblWMCommunity.tblWmProjects, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intWMProjectWMCommunityID' })
  intWmProjectWmCommunity: tblWMCommunity | null;

  @Column('integer', {
    nullable: false,
    name: 'intWMProjectCommunityProjectID'
  })
  intWMProjectCommunityProjectID: number;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varWMProjectStatus'
  })
  varWMProjectStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMProjectCreatedDate'
  })
  dteWMProjectCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMProjectModifiedDate'
  })
  dteWMProjectModifiedDate: Date;

  @OneToMany(
    type => tblAppLocationMasterTemplateAssignment,
    tblAppLocationMasterTemplateAssignment =>
      tblAppLocationMasterTemplateAssignment.intAppLocationMasterTemplateAssignmentWmProject,
    { onDelete: 'CASCADE' }
  )
  tblAppLocationMasterTemplateAssignments: tblAppLocationMasterTemplateAssignment[];

  @OneToMany(
    type => tblAppLocationTemplate,
    tblAppLocationTemplate => tblAppLocationTemplate.intAppLocationTemplateWmProject,
    { onDelete: 'CASCADE' }
  )
  tblAppLocationTemplates: tblAppLocationTemplate[];

  @OneToMany(type => tblWMSection, tblWMSection => tblWMSection.intWmSectionWmProject, {
    onDelete: 'CASCADE'
  })
  tblWmSections: tblWMSection[];
}
