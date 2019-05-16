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
import { tblMBFDevice } from './tblMBFDevice';
import { tblMBFNotificationType } from './tblMBFNotificationType';
import { tblMBFCategory } from './tblMBFCategory';

@Entity('tblMBFPushNotification', { schema: 'public' })
@Index(
  'idx_18695_IX_tblMBFPushNotification',
  [
    'dteMBFPushNotificationNotifiedDate',
    'intMBFPushNotificationID',
    'intMbfPushNotificationMbfCategory',
    'intMbfPushNotificationMbfDevice',
    'intMbfPushNotificationMbfNotificationType',
    'intMBFPushNotificationNotificationID',
    'varMBFPushNotificationContent',
    'varMBFPushNotificationMessageCode'
  ],
  { unique: true }
)
export class tblMBFPushNotification {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFPushNotificationID'
  })
  intMBFPushNotificationID: string;

  @ManyToOne(type => tblMBFDevice, tblMBFDevice => tblMBFDevice.tblMbfPushNotifications, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMBFPushNotificationMBFDeviceID' })
  intMbfPushNotificationMbfDevice: tblMBFDevice | null;

  @ManyToOne(
    type => tblMBFNotificationType,
    tblMBFNotificationType => tblMBFNotificationType.tblMbfPushNotifications,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intMBFPushNotificationMBFNotificationTypeID' })
  intMbfPushNotificationMbfNotificationType: tblMBFNotificationType | null;

  @ManyToOne(type => tblMBFCategory, tblMBFCategory => tblMBFCategory.tblMbfPushNotifications, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMBFPushNotificationMBFCategoryID' })
  intMbfPushNotificationMbfCategory: tblMBFCategory | null;

  @Column('text', {
    nullable: false,
    name: 'intMBFPushNotificationNotificationID'
  })
  intMBFPushNotificationNotificationID: string;

  @Column('text', {
    nullable: false,
    name: 'varMBFPushNotificationContent'
  })
  varMBFPushNotificationContent: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFPushNotificationNotifiedDate'
  })
  dteMBFPushNotificationNotifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varMBFPushNotificationMessageCode'
  })
  varMBFPushNotificationMessageCode: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFPushNotificationCreatedDate'
  })
  dteMBFPushNotificationCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFPushNotificationModifiedDate'
  })
  dteMBFPushNotificationModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varMBFPushNotificationNotificationData'
  })
  varMBFPushNotificationNotificationData: string | null;
}
