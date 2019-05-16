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

@Entity('tblMBFLotEmergencyContact', { schema: 'public' })
@Index(
  'idx_18503_IX_tblMBFLotEmergencyContact',
  [
    'intMbfLotEmergencyContactLot',
    'intMBFLotEmergencyContactSubcontractorID',
    'intMBFLotEmergencyContactTypeID',
    'varMBFLotEmergencyContactPhone',
    'varMBFLotEmergencyContactPhone2',
    'varMBFLotEmergencyContactWebsite'
  ],
  { unique: true }
)
export class tblMBFLotEmergencyContact {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFLotEmergencyContactID'
  })
  intMBFLotEmergencyContactID: string;

  @ManyToOne(type => tblMBFLot, tblMBFLot => tblMBFLot.tblMbfLotEmergencyContacts, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMBFLotEmergencyContactLotID' })
  intMbfLotEmergencyContactLot: tblMBFLot | null;

  @Column('integer', {
    nullable: false,
    name: 'intMBFLotEmergencyContactTypeID'
  })
  intMBFLotEmergencyContactTypeID: number;

  @Column('integer', {
    nullable: false,
    name: 'intMBFLotEmergencyContactSubcontractorID'
  })
  intMBFLotEmergencyContactSubcontractorID: number;

  @Column('text', {
    nullable: false,
    name: 'varMBFLotEmergencyContactPhone'
  })
  varMBFLotEmergencyContactPhone: string;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotEmergencyContactWebsite'
  })
  varMBFLotEmergencyContactWebsite: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varMBFLotEmergencyContactStatus'
  })
  varMBFLotEmergencyContactStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFLotEmergencyContactCreatedDate'
  })
  dteMBFLotEmergencyContactCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFLotEmergencyContactModifiedDate'
  })
  dteMBFLotEmergencyContactModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varMBFLotEmergencyContactPhone2'
  })
  varMBFLotEmergencyContactPhone2: string | null;
}
