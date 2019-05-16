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
import { tblTaskType } from './tblTaskType';

@Entity('tblTaskStandard', { schema: 'public' })
export class tblTaskStandard {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intTaskID'
  })
  intTaskID: string;

  @Column('integer', {
    nullable: false,
    name: 'intTaskCampaignID'
  })
  intTaskCampaignID: number;

  @Column('text', {
    nullable: false,
    name: 'varTaskName'
  })
  varTaskName: string;

  @ManyToOne(type => tblTaskType, tblTaskType => tblTaskType.tblTaskStandards, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intTaskTaskTypeID' })
  intTaskTaskType: tblTaskType | null;

  @Column('integer', {
    nullable: false,
    name: 'intTaskDefaultDay'
  })
  intTaskDefaultDay: number;

  @Column('integer', {
    nullable: true,
    name: 'intTaskTaskResponsibleID'
  })
  intTaskTaskResponsibleID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varTaskSubject'
  })
  varTaskSubject: string | null;

  @Column('text', {
    nullable: false,
    name: 'txtTaskDesc'
  })
  txtTaskDesc: string;

  @Column('text', {
    nullable: true,
    name: 'txtTaskScript'
  })
  txtTaskScript: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteTaskStandardCreatedDate'
  })
  dteTaskStandardCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteTaskStandardModifiedDate'
  })
  dteTaskStandardModifiedDate: Date;
}
