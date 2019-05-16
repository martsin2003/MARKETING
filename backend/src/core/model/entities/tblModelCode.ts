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

@Entity('tblModelCode', { schema: 'public' })
export class tblModelCode {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intModelCodeID'
  })
  intModelCodeID: string;

  @ManyToOne(
    type => tblCommunityProject,
    tblCommunityProject => tblCommunityProject.tblModelCodes,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intModelCodeCommunityProjectID' })
  intModelCodeCommunityProject: tblCommunityProject | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelCodeModelPlanProjectID'
  })
  intModelCodeModelPlanProjectID: number | null;

  @Column('text', {
    nullable: false,
    name: 'varModelCode'
  })
  varModelCode: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteModelCodeCreatedDate'
  })
  dteModelCodeCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteModelCodeModifiedDate'
  })
  dteModelCodeModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varModelCodePlanCode'
  })
  varModelCodePlanCode: string | null;
}
