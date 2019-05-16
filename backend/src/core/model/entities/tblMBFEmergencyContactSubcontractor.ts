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
import { tblMBFEmergencyContactSubcontractorType } from './tblMBFEmergencyContactSubcontractorType';

@Entity('tblMBFEmergencyContactSubcontractor', { schema: 'public' })
@Index(
  'idx_18436_IX_tblMBFEmergencyContactSubcontractor',
  ['varMBFEmergencyContactSubcontractorName', 'varMBFEmergencyContactSubcontractorStatus'],
  { unique: true }
)
export class tblMBFEmergencyContactSubcontractor {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFEmergencyContactSubcontractorID'
  })
  intMBFEmergencyContactSubcontractorID: string;

  @Column('text', {
    nullable: false,
    name: 'varMBFEmergencyContactSubcontractorName'
  })
  varMBFEmergencyContactSubcontractorName: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFEmergencyContactSubcontractorCreatedDate'
  })
  dteMBFEmergencyContactSubcontractorCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFEmergencyContactSubcontractorModifiedDate'
  })
  dteMBFEmergencyContactSubcontractorModifiedDate: Date;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varMBFEmergencyContactSubcontractorStatus'
  })
  varMBFEmergencyContactSubcontractorStatus: string;

  @OneToMany(
    type => tblMBFEmergencyContactSubcontractorType,
    tblMBFEmergencyContactSubcontractorType =>
      tblMBFEmergencyContactSubcontractorType.intMbfEmergencyContactSubcontractorTypeSubcontractor,
    { onDelete: 'CASCADE' }
  )
  tblMbfEmergencyContactSubcontractorTypes: tblMBFEmergencyContactSubcontractorType[];
}
