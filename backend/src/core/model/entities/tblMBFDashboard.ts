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
import { tblMBFBuyer } from './tblMBFBuyer';
import { tblMBFNotificationType } from './tblMBFNotificationType';

@Entity('tblMBFDashboard', { schema: 'public' })
@Index(
  'idx_18395_IX_tblMBFDashboard',
  [
    'bMBFDashboardNotificationDeleted',
    'bMBFDashboardNotificationViewed',
    'dteMBFDashboardModifiedDate',
    'dteMBFDashboardNotifiedDate',
    'intMbfDashboardBuyer',
    'intMBFDashboardDocumentTypeID',
    'intMBFDashboardID',
    'intMBFDashboardLotID',
    'intMBFDashboardNotificationID',
    'intMbfDashboardNotificationType',
    'varMBFDashboardNotificationName'
  ],
  { unique: true }
)
export class tblMBFDashboard {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFDashboardID'
  })
  intMBFDashboardID: string;

  @ManyToOne(type => tblMBFBuyer, tblMBFBuyer => tblMBFBuyer.tblMbfDashboards, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMBFDashboardBuyerID' })
  intMbfDashboardBuyer: tblMBFBuyer | null;

  @Column('integer', {
    nullable: false,
    name: 'intMBFDashboardLotID'
  })
  intMBFDashboardLotID: number;

  @ManyToOne(
    type => tblMBFNotificationType,
    tblMBFNotificationType => tblMBFNotificationType.tblMbfDashboards,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intMBFDashboardNotificationTypeID' })
  intMbfDashboardNotificationType: tblMBFNotificationType | null;

  @Column('integer', {
    nullable: false,
    name: 'intMBFDashboardNotificationID'
  })
  intMBFDashboardNotificationID: number;

  @Column('text', {
    nullable: false,
    name: 'varMBFDashboardNotificationName'
  })
  varMBFDashboardNotificationName: string;

  @Column('text', {
    nullable: true,
    name: 'varMBFDashboardNotificationDescription'
  })
  varMBFDashboardNotificationDescription: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bMBFDashboardNotificationViewed'
  })
  bMBFDashboardNotificationViewed: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bMBFDashboardNotificationDeleted'
  })
  bMBFDashboardNotificationDeleted: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFDashboardCreatedDate'
  })
  dteMBFDashboardCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFDashboardModifiedDate'
  })
  dteMBFDashboardModifiedDate: Date;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteMBFDashboardNotifiedDate'
  })
  dteMBFDashboardNotifiedDate: Date | null;

  @Column('integer', {
    nullable: true,
    name: 'intMBFDashboardDocumentTypeID'
  })
  intMBFDashboardDocumentTypeID: number | null;
}
