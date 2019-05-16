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

@Entity('tblMBFCommunityEmergencyContact', { schema: 'public' })
@Index(
  'idx_18375_IX_tblMBFCommunityEmergencyContact',
  [
    'intMBFCommunityEmergencyContactProjectID',
    'intMBFCommunityEmergencyContactSubcontractorID',
    'intMBFCommunityEmergencyContactTypeID',
    'varMBFCommunityEmergencyContactPhone',
    'varMBFCommunityEmergencyContactPhone2',
    'varMBFCommunityEmergencyContactWebsite'
  ],
  { unique: true }
)
export class tblMBFCommunityEmergencyContact {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFCommunityEmergencyContactID'
  })
  intMBFCommunityEmergencyContactID: string;

  @Column('integer', {
    nullable: false,
    name: 'intMBFCommunityEmergencyContactProjectID'
  })
  intMBFCommunityEmergencyContactProjectID: number;

  @Column('integer', {
    nullable: false,
    name: 'intMBFCommunityEmergencyContactTypeID'
  })
  intMBFCommunityEmergencyContactTypeID: number;

  @Column('integer', {
    nullable: false,
    name: 'intMBFCommunityEmergencyContactSubcontractorID'
  })
  intMBFCommunityEmergencyContactSubcontractorID: number;

  @Column('text', {
    nullable: false,
    name: 'varMBFCommunityEmergencyContactPhone'
  })
  varMBFCommunityEmergencyContactPhone: string;

  @Column('text', {
    nullable: true,
    name: 'varMBFCommunityEmergencyContactWebsite'
  })
  varMBFCommunityEmergencyContactWebsite: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varMBFCommunityEmergencyContactStatus'
  })
  varMBFCommunityEmergencyContactStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFCommunityEmergencyContactCreatedDate'
  })
  dteMBFCommunityEmergencyContactCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFCommunityEmergencyContactModifiedDate'
  })
  dteMBFCommunityEmergencyContactModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varMBFCommunityEmergencyContactPhone2'
  })
  varMBFCommunityEmergencyContactPhone2: string | null;
}
