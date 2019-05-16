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

@Entity('tblPersonalizedTask', { schema: 'public' })
export class tblPersonalizedTask {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intPersonalizedTaskID'
  })
  intPersonalizedTaskID: string;

  @Column('integer', {
    nullable: true,
    name: 'intPersonalizedTaskContactID'
  })
  intPersonalizedTaskContactID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varPersonalizedTaskName'
  })
  varPersonalizedTaskName: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtPersonalizedTaskDesc'
  })
  txtPersonalizedTaskDesc: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intPersonalizedTaskTypeID'
  })
  intPersonalizedTaskTypeID: number | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dtePersonalizedTaskDue'
  })
  dtePersonalizedTaskDue: Date | null;

  @Column('integer', {
    nullable: true,
    name: 'intPersonalizedTaskTaskID'
  })
  intPersonalizedTaskTaskID: number | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dtePersonalizedTaskFinished'
  })
  dtePersonalizedTaskFinished: Date | null;

  @Column('integer', {
    nullable: true,
    name: 'intPersonalizedTaskStatusID'
  })
  intPersonalizedTaskStatusID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varPersonalizedTaskTaskType'
  })
  varPersonalizedTaskTaskType: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intPersonalizedTaskContactTypeID'
  })
  intPersonalizedTaskContactTypeID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intPersonalizedTaskResponsibleID'
  })
  intPersonalizedTaskResponsibleID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intPersonalizedTaskUserID'
  })
  intPersonalizedTaskUserID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intPersonalizedTaskCommunityID'
  })
  intPersonalizedTaskCommunityID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varPersonalizedTaskComments'
  })
  varPersonalizedTaskComments: string | null;
}
