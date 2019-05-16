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

@Entity('tblMBFPhaseTip', { schema: 'public' })
@Index(
  'idx_18655_IX_tblMBFPhaseTip',
  [
    'dteMBFPhaseTipModifiedDate',
    'intMBFPhaseTipID',
    'intMBFPhaseTipPhaseID',
    'varMBFPhaseTipName',
    'varMBFPhaseTipStatus'
  ],
  { unique: true }
)
export class tblMBFPhaseTip {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFPhaseTipID'
  })
  intMBFPhaseTipID: string;

  @Column('integer', {
    nullable: false,
    name: 'intMBFPhaseTipPhaseID'
  })
  intMBFPhaseTipPhaseID: number;

  @Column('text', {
    nullable: false,
    name: 'varMBFPhaseTipName'
  })
  varMBFPhaseTipName: string;

  @Column('text', {
    nullable: true,
    name: 'varMBFPhaseTipDescription'
  })
  varMBFPhaseTipDescription: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'Active'",
    name: 'varMBFPhaseTipStatus'
  })
  varMBFPhaseTipStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFPhaseTipCreatedDate'
  })
  dteMBFPhaseTipCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFPhaseTipModifiedDate'
  })
  dteMBFPhaseTipModifiedDate: Date;
}
