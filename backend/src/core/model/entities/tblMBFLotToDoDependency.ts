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
import { tblMBFLotToDo } from './tblMBFLotToDo';

@Entity('tblMBFLotToDoDependency', { schema: 'public' })
@Index(
  'idx_18557_IX_tblMBFLotToDoDependency',
  [
    'intMBFLotToDoDependencyID',
    'intMBFLotToDoDependencyOrder',
    'intMbfLotToDoDependencyToDoDependent',
    'intMBFLotToDoDependencyToDoID'
  ],
  { unique: true }
)
export class tblMBFLotToDoDependency {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFLotToDoDependencyID'
  })
  intMBFLotToDoDependencyID: string;

  @Column('integer', {
    nullable: false,
    name: 'intMBFLotToDoDependencyToDoID'
  })
  intMBFLotToDoDependencyToDoID: number;

  @ManyToOne(type => tblMBFLotToDo, tblMBFLotToDo => tblMBFLotToDo.tblMbfLotToDoDependencys, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMBFLotToDoDependencyToDoDependentID' })
  intMbfLotToDoDependencyToDoDependent: tblMBFLotToDo | null;

  @Column('integer', {
    nullable: false,
    name: 'intMBFLotToDoDependencyOrder'
  })
  intMBFLotToDoDependencyOrder: number;
}
