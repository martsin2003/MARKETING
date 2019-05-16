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
import { tblMBFLotNotification } from './tblMBFLotNotification';
import { tblMBFLotToDo } from './tblMBFLotToDo';

@Entity('tblMBFPhase', { schema: 'public' })
@Index(
  'idx_18625_IX_tblMBFPhase',
  ['dteMBFPhaseModifiedDate', 'intMBFPhaseID', 'intMBFPhaseNavOrder', 'varMBFPhaseName'],
  { unique: true }
)
export class tblMBFPhase {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFPhaseID'
  })
  intMBFPhaseID: string;

  @Column('text', {
    nullable: false,
    name: 'varMBFPhaseName'
  })
  varMBFPhaseName: string;

  @Column('text', {
    nullable: true,
    name: 'varMBFPhaseDescription'
  })
  varMBFPhaseDescription: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intMBFPhaseNavOrder'
  })
  intMBFPhaseNavOrder: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFPhaseCreatedDate'
  })
  dteMBFPhaseCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFPhaseModifiedDate'
  })
  dteMBFPhaseModifiedDate: Date;

  @OneToMany(
    type => tblMBFLotNotification,
    tblMBFLotNotification => tblMBFLotNotification.intMbfLotNotificationPhase,
    { onDelete: 'CASCADE' }
  )
  tblMbfLotNotifications: tblMBFLotNotification[];

  @OneToMany(type => tblMBFLotToDo, tblMBFLotToDo => tblMBFLotToDo.intMbfLotToDoPhase, {
    onDelete: 'CASCADE'
  })
  tblMbfLotToDos: tblMBFLotToDo[];
}
