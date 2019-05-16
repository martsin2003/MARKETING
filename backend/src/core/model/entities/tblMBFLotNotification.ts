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

@Entity('tblMBFLotNotification', { schema: 'public' })
@Index(
  'idx_18524_IX_tblMBFLotNotification',
  [
    'dteMBFLotNotificationDueDate',
    'dteMBFLotNotificationModifiedDate',
    'intMBFLotNotificationID',
    'intMbfLotNotificationLot',
    'intMbfLotNotificationPhase',
    'intMBFLotNotificationPhaseUpdateID',
    'varMBFLotNotificationName',
    'varMBFLotNotificationNameOther',
    'varMBFLotNotificationStatus'
  ],
  { unique: true }
)
export class tblMBFLotNotification {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFLotNotificationID'
  })
  intMBFLotNotificationID: string;

  @Column('integer', {
    nullable: false,
    name: 'intMBFLotNotificationPhaseUpdateID'
  })
  intMBFLotNotificationPhaseUpdateID: number;

  @ManyToOne(type => tblMBFLot, tblMBFLot => tblMBFLot.tblMbfLotNotifications, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMBFLotNotificationLotID' })
  intMbfLotNotificationLot: tblMBFLot | null;

  @ManyToOne(type => tblMBFPhase, tblMBFPhase => tblMBFPhase.tblMbfLotNotifications, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMBFLotNotificationPhaseID' })
  intMbfLotNotificationPhase: tblMBFPhase | null;

  @Column('text', {
    nullable: false,
    name: 'varMBFLotNotificationName'
  })
  varMBFLotNotificationName: string;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotNotificationNameOther'
  })
  varMBFLotNotificationNameOther: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFLotNotificationDueDate'
  })
  dteMBFLotNotificationDueDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotNotificationDescription'
  })
  varMBFLotNotificationDescription: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'Active'",
    name: 'varMBFLotNotificationStatus'
  })
  varMBFLotNotificationStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFLotNotificationCreatedDate'
  })
  dteMBFLotNotificationCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFLotNotificationModifiedDate'
  })
  dteMBFLotNotificationModifiedDate: Date;
}
