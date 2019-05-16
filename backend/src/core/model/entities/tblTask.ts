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

@Entity('tblTask', { schema: 'public' })
export class tblTask {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intTaskID'
  })
  intTaskID: string;

  @Column('integer', {
    nullable: true,
    name: 'intTaskCampaignID'
  })
  intTaskCampaignID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varTaskName'
  })
  varTaskName: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intTaskTaskTypeID'
  })
  intTaskTaskTypeID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intTaskDefaultDay'
  })
  intTaskDefaultDay: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intTaskTaskResponsibleID'
  })
  intTaskTaskResponsibleID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varTaskAutomatedFile'
  })
  varTaskAutomatedFile: string | null;

  @Column('text', {
    nullable: true,
    name: 'varTaskSubject'
  })
  varTaskSubject: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTaskDesc'
  })
  txtTaskDesc: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTaskScript'
  })
  txtTaskScript: string | null;
}
