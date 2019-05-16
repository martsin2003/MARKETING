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

@Entity('tblMBFDocumentConfig', { schema: 'public' })
@Index(
  'idx_18426_IX_tblMBFDocumentConfig',
  [
    'intMBFDocumentConfigID',
    'varMBFDocumentConfigDescription',
    'varMBFDocumentConfigStatus',
    'varMBFDocumentConfigTitle'
  ],
  { unique: true }
)
export class tblMBFDocumentConfig {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFDocumentConfigID'
  })
  intMBFDocumentConfigID: string;

  @Column('text', {
    nullable: false,
    name: 'varMBFDocumentConfigTitle'
  })
  varMBFDocumentConfigTitle: string;

  @Column('text', {
    nullable: true,
    name: 'varMBFDocumentConfigDescription'
  })
  varMBFDocumentConfigDescription: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varMBFDocumentConfigStatus'
  })
  varMBFDocumentConfigStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFDocumentConfigCreatedDate'
  })
  dteMBFDocumentConfigCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFDocumentConfigModifiedDate'
  })
  dteMBFDocumentConfigModifiedDate: Date;
}
