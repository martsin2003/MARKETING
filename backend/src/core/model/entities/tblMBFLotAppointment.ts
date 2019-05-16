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
import { tblMBFAppointmentStatus } from './tblMBFAppointmentStatus';
import { tblMBFAppointmentBuyer } from './tblMBFAppointmentBuyer';

@Entity('tblMBFLotAppointment', { schema: 'public' })
@Index('idx_18480_IX_tblMBFLotAppointment', [
  'bMBFLotAppointmentRequestReschedule',
  'dteMBFLotAppointmentDate',
  'dteMBFLotAppointmentModifiedDate',
  'intMBFLotAppointmentID',
  'intMBFLotAppointmentLotID',
  'intMBFLotAppointmentPhaseID',
  'intMBFLotAppointmentScheduledBy',
  'intMbfLotAppointmentStatus',
  'varMBFLotAppointmentEndTime',
  'varMBFLotAppointmentName',
  'varMBFLotAppointmentNameOther',
  'varMBFLotAppointmentTime'
])
@Index('idx_18480_IX2_tblMBFLotAppointment', [
  'bMBFLotAppointmentRequestReschedule',
  'dteMBFLotAppointmentDate',
  'dteMBFLotAppointmentModifiedDate',
  'intMBFLotAppointmentID',
  'intMBFLotAppointmentID_Org',
  'intMBFLotAppointmentLotID',
  'intMBFLotAppointmentPhaseID',
  'intMBFLotAppointmentScheduledBy',
  'intMbfLotAppointmentStatus',
  'varMBFLotAppointmentEndTime',
  'varMBFLotAppointmentName',
  'varMBFLotAppointmentNameOther',
  'varMBFLotAppointmentTime'
])
export class tblMBFLotAppointment {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFLotAppointmentID'
  })
  intMBFLotAppointmentID: string;

  @Column('integer', {
    nullable: false,
    name: 'intMBFLotAppointmentLotID'
  })
  intMBFLotAppointmentLotID: number;

  @Column('integer', {
    nullable: false,
    name: 'intMBFLotAppointmentPhaseID'
  })
  intMBFLotAppointmentPhaseID: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFLotAppointmentDate'
  })
  dteMBFLotAppointmentDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotAppointmentTime'
  })
  varMBFLotAppointmentTime: string | null;

  @Column('text', {
    nullable: false,
    name: 'varMBFLotAppointmentName'
  })
  varMBFLotAppointmentName: string;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotAppointmentDescription'
  })
  varMBFLotAppointmentDescription: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotAppointmentAddress'
  })
  varMBFLotAppointmentAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotAppointmentCity'
  })
  varMBFLotAppointmentCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotAppointmentState'
  })
  varMBFLotAppointmentState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotAppointmentZip'
  })
  varMBFLotAppointmentZip: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intMBFLotAppointmentScheduledBy'
  })
  intMBFLotAppointmentScheduledBy: number | null;

  @ManyToOne(
    type => tblMBFAppointmentStatus,
    tblMBFAppointmentStatus => tblMBFAppointmentStatus.tblMbfLotAppointments,
    { onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intMBFLotAppointmentStatusID' })
  intMbfLotAppointmentStatus: tblMBFAppointmentStatus | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bMBFLotAppointmentRequestReschedule'
  })
  bMBFLotAppointmentRequestReschedule: boolean;

  @Column('integer', {
    nullable: true,
    name: 'intMBFLotAppointmentID_Org'
  })
  intMBFLotAppointmentID_Org: number | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFLotAppointmentCreatedDate'
  })
  dteMBFLotAppointmentCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFLotAppointmentModifiedDate'
  })
  dteMBFLotAppointmentModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotAppointmentEndTime'
  })
  varMBFLotAppointmentEndTime: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotAppointmentNameOther'
  })
  varMBFLotAppointmentNameOther: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intMBFLotAppointmentAppLocationTemplateID'
  })
  intMBFLotAppointmentAppLocationTemplateID: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bMBFLotAppointmentAppLocationTemplateIsMasterTemplateFlg'
  })
  bMBFLotAppointmentAppLocationTemplateIsMasterTemplateFlg: boolean;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotAppointmentLocationName'
  })
  varMBFLotAppointmentLocationName: string | null;

  @OneToMany(
    type => tblMBFAppointmentBuyer,
    tblMBFAppointmentBuyer => tblMBFAppointmentBuyer.intMbfAppointmentBuyerAppointment,
    { onDelete: 'CASCADE' }
  )
  tblMbfAppointmentBuyers: tblMBFAppointmentBuyer[];
}
