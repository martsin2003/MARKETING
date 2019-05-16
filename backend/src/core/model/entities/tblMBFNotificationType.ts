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
import { tblMBFDashboard } from './tblMBFDashboard';
import { tblMBFPushNotification } from './tblMBFPushNotification';

@Entity('tblMBFNotificationType', { schema: 'public' })
export class tblMBFNotificationType {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFNotificationTypeID'
  })
  intMBFNotificationTypeID: string;

  @Column('text', {
    nullable: false,
    name: 'varMBFNotificationTypeName'
  })
  varMBFNotificationTypeName: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFNotificationTypeCreatedDate'
  })
  dteMBFNotificationTypeCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFNotificationTypeModifiedDate'
  })
  dteMBFNotificationTypeModifiedDate: Date;

  @Column('text', {
    nullable: false,
    name: 'varMBFNotificationTypeDisplayName'
  })
  varMBFNotificationTypeDisplayName: string;

  @Column('integer', {
    nullable: false,
    name: 'intMBFNotificationNavOrder'
  })
  intMBFNotificationNavOrder: number;

  @OneToMany(
    type => tblMBFDashboard,
    tblMBFDashboard => tblMBFDashboard.intMbfDashboardNotificationType,
    { onDelete: 'CASCADE' }
  )
  tblMbfDashboards: tblMBFDashboard[];

  @OneToMany(
    type => tblMBFPushNotification,
    tblMBFPushNotification => tblMBFPushNotification.intMbfPushNotificationMbfNotificationType,
    { onDelete: 'CASCADE' }
  )
  tblMbfPushNotifications: tblMBFPushNotification[];
}
