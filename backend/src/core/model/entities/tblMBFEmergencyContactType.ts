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

@Entity('tblMBFEmergencyContactType', { schema: 'public' })
@Index(
  'idx_18449_IX_tblMBFEmergencyContactType',
  ['varMBFEmergencyContactType', 'varMBFEmergencyContactTypeStatus'],
  { unique: true }
)
export class tblMBFEmergencyContactType {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFEmergencyContactTypeID'
  })
  intMBFEmergencyContactTypeID: string;

  @Column('text', {
    nullable: false,
    name: 'varMBFEmergencyContactType'
  })
  varMBFEmergencyContactType: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varMBFEmergencyContactTypeStatus'
  })
  varMBFEmergencyContactTypeStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFEmergencyContactTypeCreatedDate'
  })
  dteMBFEmergencyContactTypeCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFEmergencyContactTypeModifiedDate'
  })
  dteMBFEmergencyContactTypeModifiedDate: Date;

  @Column('integer', {
    nullable: false,
    name: 'intMBFEmergencyContactTypeOrder'
  })
  intMBFEmergencyContactTypeOrder: number;
}
