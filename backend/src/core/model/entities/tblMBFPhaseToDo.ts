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

@Entity('tblMBFPhaseToDo', { schema: 'public' })
@Index(
  'idx_18665_IX_tblMBFPhaseToDo',
  [
    'dteMBFPhaseToDoModifiedDate',
    'intMBFPhaseToDoID',
    'intMBFPhaseToDoNavOrder',
    'intMBFPhaseToDoPhaseID',
    'varMBFPhaseToDoName',
    'varMBFPhaseToDoStatus'
  ],
  { unique: true }
)
export class tblMBFPhaseToDo {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFPhaseToDoID'
  })
  intMBFPhaseToDoID: string;

  @Column('integer', {
    nullable: false,
    name: 'intMBFPhaseToDoPhaseID'
  })
  intMBFPhaseToDoPhaseID: number;

  @Column('text', {
    nullable: false,
    name: 'varMBFPhaseToDoName'
  })
  varMBFPhaseToDoName: string;

  @Column('text', {
    nullable: true,
    name: 'varMBFPhaseToDoDescription'
  })
  varMBFPhaseToDoDescription: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intMBFPhaseToDoNavOrder'
  })
  intMBFPhaseToDoNavOrder: number;

  @Column('text', {
    nullable: false,
    default: () => "'Active'",
    name: 'varMBFPhaseToDoStatus'
  })
  varMBFPhaseToDoStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFPhaseToDoCreatedDate'
  })
  dteMBFPhaseToDoCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFPhaseToDoModifiedDate'
  })
  dteMBFPhaseToDoModifiedDate: Date;
}
