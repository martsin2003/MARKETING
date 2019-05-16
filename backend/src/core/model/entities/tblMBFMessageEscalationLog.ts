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
import { tblMBFMessage } from './tblMBFMessage';

@Entity('tblMBFMessageEscalationLog', { schema: 'public' })
@Index(
  'idx_18574_IX_tblMBFMessageEscalationLog',
  [
    'dteMBFMessageEscalationLogModifiedDate',
    'intMBFMessageEscalationLogMBFCommunityProjectMessageEscalationI',
    'intMbfMessageEscalationLogMbfMessage',
    'varMBFMessageEscalationLogRecipients'
  ],
  { unique: true }
)
export class tblMBFMessageEscalationLog {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFMessageEscalationLogID'
  })
  intMBFMessageEscalationLogID: string;

  @ManyToOne(type => tblMBFMessage, tblMBFMessage => tblMBFMessage.tblMbfMessageEscalationLogs, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMBFMessageEscalationLogMBFMessageID' })
  intMbfMessageEscalationLogMbfMessage: tblMBFMessage | null;

  @Column('integer', {
    nullable: false,
    name: 'intMBFMessageEscalationLogMBFCommunityProjectMessageEscalationI'
  })
  intMBFMessageEscalationLogMBFCommunityProjectMessageEscalationI: number;

  @Column('text', {
    nullable: false,
    name: 'varMBFMessageEscalationLogRecipients'
  })
  varMBFMessageEscalationLogRecipients: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFMessageEscalationLogCreatedDate'
  })
  dteMBFMessageEscalationLogCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFMessageEscalationLogModifiedDate'
  })
  dteMBFMessageEscalationLogModifiedDate: Date;
}
