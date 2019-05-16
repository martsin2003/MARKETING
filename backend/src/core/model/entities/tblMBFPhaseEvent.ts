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

@Entity('tblMBFPhaseEvent', { schema: 'public' })
export class tblMBFPhaseEvent {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFPhaseEventID'
  })
  intMBFPhaseEventID: string;

  @Column('integer', {
    nullable: false,
    name: 'intMBFPhaseEventPhaseID'
  })
  intMBFPhaseEventPhaseID: number;

  @Column('text', {
    nullable: false,
    name: 'varMBFPhaseEventName'
  })
  varMBFPhaseEventName: string;

  @Column('text', {
    nullable: true,
    name: 'varMBFPhaseEventDescription'
  })
  varMBFPhaseEventDescription: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intMBFPhaseEventNavOrder'
  })
  intMBFPhaseEventNavOrder: number;

  @Column('text', {
    nullable: false,
    default: () => "'Active'",
    name: 'varMBFPhaseEventStatus'
  })
  varMBFPhaseEventStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFPhaseEventCreatedDate'
  })
  dteMBFPhaseEventCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFPhaseEventModifiedDate'
  })
  dteMBFPhaseEventModifiedDate: Date;
}
