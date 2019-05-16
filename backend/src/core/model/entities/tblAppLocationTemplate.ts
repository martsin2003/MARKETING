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
import { tblWMProject } from './tblWMProject';

@Entity('tblAppLocationTemplate', { schema: 'public' })
export class tblAppLocationTemplate {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intAppLocationTemplateID'
  })
  intAppLocationTemplateID: string;

  @ManyToOne(type => tblWMProject, tblWMProject => tblWMProject.tblAppLocationTemplates, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intAppLocationTemplateWMProjectID' })
  intAppLocationTemplateWmProject: tblWMProject | null;

  @Column('text', {
    nullable: false,
    name: 'varAppLocationTemplateName'
  })
  varAppLocationTemplateName: string;

  @Column('text', {
    nullable: false,
    name: 'varAppLocationTemplateAddress'
  })
  varAppLocationTemplateAddress: string;

  @Column('text', {
    nullable: false,
    name: 'varAppLocationTemplateCity'
  })
  varAppLocationTemplateCity: string;

  @Column('text', {
    nullable: false,
    name: 'varAppLocationTemplateState'
  })
  varAppLocationTemplateState: string;

  @Column('text', {
    nullable: false,
    name: 'varAppLocationTemplateZip'
  })
  varAppLocationTemplateZip: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteAppLocationTemplateCreatedDate'
  })
  dteAppLocationTemplateCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteAppLocationTemplateModifiedDate'
  })
  dteAppLocationTemplateModifiedDate: Date;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varAppLocationTemplateStatus'
  })
  varAppLocationTemplateStatus: string;
}
