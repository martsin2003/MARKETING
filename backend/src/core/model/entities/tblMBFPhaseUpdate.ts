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

@Entity('tblMBFPhaseUpdate', { schema: 'public' })
@Index(
  'idx_18675_IX_tblMBFPhaseUpdate',
  [
    'dteMBFPhaseUpdateModifiedDate',
    'intMBFPhaseUpdateID',
    'intMBFPhaseUpdateNavOrder',
    'intMBFPhaseUpdatePhaseID',
    'varMBFPhaseUpdateName',
    'varMBFPhaseUpdateStatus'
  ],
  { unique: true }
)
export class tblMBFPhaseUpdate {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFPhaseUpdateID'
  })
  intMBFPhaseUpdateID: string;

  @Column('integer', {
    nullable: false,
    name: 'intMBFPhaseUpdatePhaseID'
  })
  intMBFPhaseUpdatePhaseID: number;

  @Column('text', {
    nullable: false,
    name: 'varMBFPhaseUpdateName'
  })
  varMBFPhaseUpdateName: string;

  @Column('text', {
    nullable: true,
    name: 'varMBFPhaseUpdateDescription'
  })
  varMBFPhaseUpdateDescription: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intMBFPhaseUpdateNavOrder'
  })
  intMBFPhaseUpdateNavOrder: number;

  @Column('text', {
    nullable: false,
    default: () => "'Active'",
    name: 'varMBFPhaseUpdateStatus'
  })
  varMBFPhaseUpdateStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFPhaseUpdateCreatedDate'
  })
  dteMBFPhaseUpdateCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFPhaseUpdateModifiedDate'
  })
  dteMBFPhaseUpdateModifiedDate: Date;
}
