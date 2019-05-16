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
import { tblAppLocationMasterTemplateAssignment } from './tblAppLocationMasterTemplateAssignment';

@Entity('tblAppLocationMasterTemplate', { schema: 'public' })
@Index(
  'idx_16436_IX_tblAppLocationMasterTemplate',
  [
    'intAppLocationMasterTemplateID',
    'varAppLocationMasterTemplateAddress',
    'varAppLocationMasterTemplateCity',
    'varAppLocationMasterTemplateName',
    'varAppLocationMasterTemplateState',
    'varAppLocationMasterTemplateStatus',
    'varAppLocationMasterTemplateZip'
  ],
  { unique: true }
)
export class tblAppLocationMasterTemplate {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intAppLocationMasterTemplateID'
  })
  intAppLocationMasterTemplateID: string;

  @Column('text', {
    nullable: false,
    name: 'varAppLocationMasterTemplateName'
  })
  varAppLocationMasterTemplateName: string;

  @Column('text', {
    nullable: false,
    name: 'varAppLocationMasterTemplateAddress'
  })
  varAppLocationMasterTemplateAddress: string;

  @Column('text', {
    nullable: false,
    name: 'varAppLocationMasterTemplateCity'
  })
  varAppLocationMasterTemplateCity: string;

  @Column('text', {
    nullable: false,
    name: 'varAppLocationMasterTemplateState'
  })
  varAppLocationMasterTemplateState: string;

  @Column('text', {
    nullable: false,
    name: 'varAppLocationMasterTemplateZip'
  })
  varAppLocationMasterTemplateZip: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varAppLocationMasterTemplateStatus'
  })
  varAppLocationMasterTemplateStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteAppLocationMasterTemplateCreatedDate'
  })
  dteAppLocationMasterTemplateCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteAppLocationMasterTemplateModifiedDate'
  })
  dteAppLocationMasterTemplateModifiedDate: Date;

  @OneToMany(
    type => tblAppLocationMasterTemplateAssignment,
    tblAppLocationMasterTemplateAssignment =>
      tblAppLocationMasterTemplateAssignment.intAppLocationMasterTemplateAssignmentAppLocationMasterTemplate,
    { onDelete: 'CASCADE' }
  )
  tblAppLocationMasterTemplateAssignments: tblAppLocationMasterTemplateAssignment[];
}
