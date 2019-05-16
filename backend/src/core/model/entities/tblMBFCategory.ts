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
import { tblMBFDocument } from './tblMBFDocument';
import { tblMBFLotDocument } from './tblMBFLotDocument';
import { tblMBFPushNotification } from './tblMBFPushNotification';

@Entity('tblMBFCategory', { schema: 'public' })
export class tblMBFCategory {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFCategoryID'
  })
  intMBFCategoryID: string;

  @Column('text', {
    nullable: false,
    name: 'varMBFCategoryName'
  })
  varMBFCategoryName: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFCategoryCreatedDate'
  })
  dteMBFCategoryCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFCategoryModifiedDate'
  })
  dteMBFCategoryModifiedDate: Date;

  @Column('text', {
    nullable: false,
    name: 'varMBFCategoryDisplayName'
  })
  varMBFCategoryDisplayName: string;

  @OneToMany(type => tblMBFDocument, tblMBFDocument => tblMBFDocument.intMbfDocumentCategory, {
    onDelete: 'CASCADE'
  })
  tblMbfDocuments: tblMBFDocument[];

  @OneToMany(
    type => tblMBFLotDocument,
    tblMBFLotDocument => tblMBFLotDocument.intMbfLotDocumentCategory,
    { onDelete: 'CASCADE' }
  )
  tblMbfLotDocuments: tblMBFLotDocument[];

  @OneToMany(
    type => tblMBFPushNotification,
    tblMBFPushNotification => tblMBFPushNotification.intMbfPushNotificationMbfCategory,
    { onDelete: 'CASCADE' }
  )
  tblMbfPushNotifications: tblMBFPushNotification[];
}
