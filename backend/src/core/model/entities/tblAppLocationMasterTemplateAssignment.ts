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
import { tblAppLocationMasterTemplate } from './tblAppLocationMasterTemplate';
import { tblWMProject } from './tblWMProject';

@Entity('tblAppLocationMasterTemplateAssignment', { schema: 'public' })
export class tblAppLocationMasterTemplateAssignment {
  @ManyToOne(
    type => tblAppLocationMasterTemplate,
    tblAppLocationMasterTemplate =>
      tblAppLocationMasterTemplate.tblAppLocationMasterTemplateAssignments,
    { primary: true, nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intAppLocationMasterTemplateAssignmentAppLocationMasterTemplate' })
  intAppLocationMasterTemplateAssignmentAppLocationMasterTemplate: tblAppLocationMasterTemplate | null;

  @ManyToOne(
    type => tblWMProject,
    tblWMProject => tblWMProject.tblAppLocationMasterTemplateAssignments,
    { primary: true, nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intAppLocationMasterTemplateAssignmentWMProjectID' })
  intAppLocationMasterTemplateAssignmentWmProject: tblWMProject | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteAppLocationMasterTemplateAssignmentCreatedDate'
  })
  dteAppLocationMasterTemplateAssignmentCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteAppLocationMasterTemplateAssignmentModifiedDate'
  })
  dteAppLocationMasterTemplateAssignmentModifiedDate: Date;
}
