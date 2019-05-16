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
import { tblMBFLot } from './tblMBFLot';
import { tblMBFPhase } from './tblMBFPhase';
import { tblMBFLotToDoAssociation } from './tblMBFLotToDoAssociation';
import { tblMBFLotToDoDependency } from './tblMBFLotToDoDependency';

@Entity('tblMBFLotToDo', { schema: 'public' })
@Index('idx_18540_IX_tblMBFLotToDo', [
  'bMBFLotToDoCompleted',
  'dteMBFLotToDoDueDate',
  'dteMBFLotToDoModifiedDate',
  'intMBFLotToDoID',
  'intMbfLotToDoLot',
  'intMbfLotToDoPhase',
  'intMBFLotToDoPhaseToDoID',
  'varMBFLotToDoName',
  'varMBFLotToDoNameOther',
  'varMBFLotToDoStatus'
])
export class tblMBFLotToDo {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFLotToDoID'
  })
  intMBFLotToDoID: string;

  @Column('integer', {
    nullable: false,
    name: 'intMBFLotToDoPhaseToDoID'
  })
  intMBFLotToDoPhaseToDoID: number;

  @ManyToOne(type => tblMBFLot, tblMBFLot => tblMBFLot.tblMbfLotToDos, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMBFLotToDoLotID' })
  intMbfLotToDoLot: tblMBFLot | null;

  @ManyToOne(type => tblMBFPhase, tblMBFPhase => tblMBFPhase.tblMbfLotToDos, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMBFLotToDoPhaseID' })
  intMbfLotToDoPhase: tblMBFPhase | null;

  @Column('text', {
    nullable: false,
    name: 'varMBFLotToDoName'
  })
  varMBFLotToDoName: string;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotToDoNameOther'
  })
  varMBFLotToDoNameOther: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFLotToDoDueDate'
  })
  dteMBFLotToDoDueDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotToDoDescription'
  })
  varMBFLotToDoDescription: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bMBFLotToDoCompleted'
  })
  bMBFLotToDoCompleted: boolean;

  @Column('text', {
    nullable: false,
    default: () => "'Active'",
    name: 'varMBFLotToDoStatus'
  })
  varMBFLotToDoStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFLotToDoCreatedDate'
  })
  dteMBFLotToDoCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFLotToDoModifiedDate'
  })
  dteMBFLotToDoModifiedDate: Date;

  @OneToMany(
    type => tblMBFLotToDoAssociation,
    tblMBFLotToDoAssociation => tblMBFLotToDoAssociation.intMbfLotToDoAssociationToDo,
    { onDelete: 'CASCADE' }
  )
  tblMbfLotToDoAssociations: tblMBFLotToDoAssociation[];

  @OneToMany(
    type => tblMBFLotToDoDependency,
    tblMBFLotToDoDependency => tblMBFLotToDoDependency.intMbfLotToDoDependencyToDoDependent,
    { onDelete: 'CASCADE' }
  )
  tblMbfLotToDoDependencys: tblMBFLotToDoDependency[];
}
