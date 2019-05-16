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

@Entity('tblMBFPhaseVideo', { schema: 'public' })
@Index(
  'idx_18685_IX_tblMBFPhaseVideo',
  [
    'dteMBFPhaseVideoModifiedDate',
    'intMBFPhaseVideoID',
    'intMBFPhaseVideoPhaseID',
    'varMBFPhaseVideoImageFile',
    'varMBFPhaseVideoName',
    'varMBFPhaseVideoStatus',
    'varMBFPhaseVideoURL'
  ],
  { unique: true }
)
export class tblMBFPhaseVideo {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFPhaseVideoID'
  })
  intMBFPhaseVideoID: string;

  @Column('integer', {
    nullable: false,
    name: 'intMBFPhaseVideoPhaseID'
  })
  intMBFPhaseVideoPhaseID: number;

  @Column('text', {
    nullable: false,
    name: 'varMBFPhaseVideoName'
  })
  varMBFPhaseVideoName: string;

  @Column('text', {
    nullable: true,
    name: 'varMBFPhaseVideoURL'
  })
  varMBFPhaseVideoURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFPhaseVideoImageFile'
  })
  varMBFPhaseVideoImageFile: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFPhaseVideoDescription'
  })
  varMBFPhaseVideoDescription: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intMBFPhaseVideoNavOrder'
  })
  intMBFPhaseVideoNavOrder: number;

  @Column('text', {
    nullable: false,
    default: () => "'Active'",
    name: 'varMBFPhaseVideoStatus'
  })
  varMBFPhaseVideoStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFPhaseVideoCreatedDate'
  })
  dteMBFPhaseVideoCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFPhaseVideoModifiedDate'
  })
  dteMBFPhaseVideoModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varMBFPhaseVideoImageFile2'
  })
  varMBFPhaseVideoImageFile2: string | null;
}
