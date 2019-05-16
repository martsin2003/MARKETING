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
import { tblMBFLotDocument } from './tblMBFLotDocument';
import { tblMBFLotEmergencyContact } from './tblMBFLotEmergencyContact';
import { tblMBFLotGallery } from './tblMBFLotGallery';
import { tblMBFLotNotification } from './tblMBFLotNotification';
import { tblMBFLotPhaseDocument } from './tblMBFLotPhaseDocument';
import { tblMBFLotToDo } from './tblMBFLotToDo';
import { tblMBFTeamMemberLot } from './tblMBFTeamMemberLot';

@Entity('tblMBFLot', { schema: 'public' })
@Index(
  'idx_18468_IX_tblMBFLot',
  [
    'dteMBFLotModifiedDate',
    'intMBFLotID',
    'intMBFLotPhaseID',
    'intMBFLotProjectID',
    'varMBFLotAddress',
    'varMBFLotCity',
    'varMBFLotIdentifier',
    'varMBFLotState'
  ],
  { unique: true }
)
export class tblMBFLot {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFLotID'
  })
  intMBFLotID: string;

  @Column('integer', {
    nullable: false,
    name: 'intMBFLotProjectID'
  })
  intMBFLotProjectID: number;

  @Column('text', {
    nullable: false,
    name: 'varMBFLotIdentifier'
  })
  varMBFLotIdentifier: string;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotAddress'
  })
  varMBFLotAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotCity'
  })
  varMBFLotCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotState'
  })
  varMBFLotState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotZip'
  })
  varMBFLotZip: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotBuyerFirstName'
  })
  varMBFLotBuyerFirstName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotBuyerLastName'
  })
  varMBFLotBuyerLastName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotCoBuyerFirstName'
  })
  varMBFLotCoBuyerFirstName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotCoBuyerLastName'
  })
  varMBFLotCoBuyerLastName: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteMBFLotContractDate'
  })
  dteMBFLotContractDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteMBFLotEstDeliveryDate'
  })
  dteMBFLotEstDeliveryDate: Date | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curMBFLotSalesPrice'
  })
  curMBFLotSalesPrice: string;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotModel'
  })
  varMBFLotModel: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotModelDescription'
  })
  varMBFLotModelDescription: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotModelImage'
  })
  varMBFLotModelImage: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intMBFLotSalesStatus'
  })
  intMBFLotSalesStatus: number;

  @Column('integer', {
    nullable: false,
    name: 'intMBFLotConstructionStatus'
  })
  intMBFLotConstructionStatus: number;

  @Column('text', {
    nullable: false,
    default: () => "'Available'",
    name: 'varMBFLotStatus'
  })
  varMBFLotStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFLotCreatedDate'
  })
  dteMBFLotCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFLotModifiedDate'
  })
  dteMBFLotModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intMBFLotPhaseID'
  })
  intMBFLotPhaseID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotModelPlanCode'
  })
  varMBFLotModelPlanCode: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bMBFLotArchivedFlg'
  })
  bMBFLotArchivedFlg: boolean;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotBuyerEmailAddress'
  })
  varMBFLotBuyerEmailAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotBuyerPhone'
  })
  varMBFLotBuyerPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotModelElevation'
  })
  varMBFLotModelElevation: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotAPIID'
  })
  varMBFLotAPIID: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intMBFLotMessageIndex'
  })
  intMBFLotMessageIndex: number;

  @OneToMany(type => tblMBFBuyer, tblMBFBuyer => tblMBFBuyer.intMbfBuyerLot, {
    onDelete: 'CASCADE'
  })
  tblMbfBuyers: tblMBFBuyer[];

  @OneToMany(
    type => tblMBFLotDocument,
    tblMBFLotDocument => tblMBFLotDocument.intMbfLotDocumentLot,
    { onDelete: 'CASCADE' }
  )
  tblMbfLotDocuments: tblMBFLotDocument[];

  @OneToMany(
    type => tblMBFLotEmergencyContact,
    tblMBFLotEmergencyContact => tblMBFLotEmergencyContact.intMbfLotEmergencyContactLot,
    { onDelete: 'CASCADE' }
  )
  tblMbfLotEmergencyContacts: tblMBFLotEmergencyContact[];

  @OneToMany(type => tblMBFLotGallery, tblMBFLotGallery => tblMBFLotGallery.intMbfLotGalleryLot, {
    onDelete: 'CASCADE'
  })
  tblMbfLotGallerys: tblMBFLotGallery[];

  @OneToMany(
    type => tblMBFLotNotification,
    tblMBFLotNotification => tblMBFLotNotification.intMbfLotNotificationLot,
    { onDelete: 'CASCADE' }
  )
  tblMbfLotNotifications: tblMBFLotNotification[];

  @OneToMany(
    type => tblMBFLotPhaseDocument,
    tblMBFLotPhaseDocument => tblMBFLotPhaseDocument.intMbfLotPhaseDocumentLot,
    { onDelete: 'CASCADE' }
  )
  tblMbfLotPhaseDocuments: tblMBFLotPhaseDocument[];

  @OneToMany(type => tblMBFLotToDo, tblMBFLotToDo => tblMBFLotToDo.intMbfLotToDoLot, {
    onDelete: 'CASCADE'
  })
  tblMbfLotToDos: tblMBFLotToDo[];

  @OneToMany(
    type => tblMBFTeamMemberLot,
    tblMBFTeamMemberLot => tblMBFTeamMemberLot.intMbfTeamMemberLotLot,
    { onDelete: 'CASCADE' }
  )
  tblMbfTeamMemberLots: tblMBFTeamMemberLot[];
}
