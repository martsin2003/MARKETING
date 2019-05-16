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
import { tblMBFBuyer } from './tblMBFBuyer';
import { tblMBFMessageEscalationLog } from './tblMBFMessageEscalationLog';
import { tblMBFMessageResolution } from './tblMBFMessageResolution';
import { tblMBFMessageThread } from './tblMBFMessageThread';

@Entity('tblMBFMessage', { schema: 'public' })
@Index(
  'idx_18563_IX_tblMBFMessage',
  [
    'bMBFMessageUrgentFlg',
    'dteMBFMessageCreatedDate',
    'dteMBFMessageModifiedDate',
    'intMBFMessageInitialMBFTeamMemberID',
    'intMbfMessageMbfBuyer',
    'varMBFMessageEmailMessageID',
    'varMBFMessageNonce',
    'varMBFMessagePublicID',
    'varMBFMessageStatus',
    'varMBFMessageSubject'
  ],
  { unique: true }
)
@Index('idx_18563_IX2_tblMBFMessage', [
  'dteMBFMessageModifiedDate',
  'intMBFMessageID',
  'varMBFMessageStatus'
])
export class tblMBFMessage {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFMessageID'
  })
  intMBFMessageID: string;

  @Column('text', {
    nullable: false,
    name: 'varMBFMessageEmailMessageID'
  })
  varMBFMessageEmailMessageID: string;

  @ManyToOne(type => tblMBFBuyer, tblMBFBuyer => tblMBFBuyer.tblMbfMessages, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intMBFMessageMBFBuyerID' })
  intMbfMessageMbfBuyer: tblMBFBuyer | null;

  @Column('integer', {
    nullable: false,
    name: 'intMBFMessageInitialMBFTeamMemberID'
  })
  intMBFMessageInitialMBFTeamMemberID: number;

  @Column('text', {
    nullable: false,
    name: 'varMBFMessagePublicID'
  })
  varMBFMessagePublicID: string;

  @Column('text', {
    nullable: false,
    default: () => "'New'",
    name: 'varMBFMessageStatus'
  })
  varMBFMessageStatus: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bMBFMessageUrgentFlg'
  })
  bMBFMessageUrgentFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFMessageCreatedDate'
  })
  dteMBFMessageCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFMessageModifiedDate'
  })
  dteMBFMessageModifiedDate: Date;

  @Column('text', {
    nullable: false,
    name: 'varMBFMessageSubject'
  })
  varMBFMessageSubject: string;

  @Column('text', {
    nullable: false,
    name: 'varMBFMessageNonce'
  })
  varMBFMessageNonce: string;

  @Column('integer', {
    nullable: false,
    name: 'intMBFMessageViews'
  })
  intMBFMessageViews: number;

  @OneToMany(
    type => tblMBFMessageEscalationLog,
    tblMBFMessageEscalationLog => tblMBFMessageEscalationLog.intMbfMessageEscalationLogMbfMessage,
    { onDelete: 'CASCADE' }
  )
  tblMbfMessageEscalationLogs: tblMBFMessageEscalationLog[];

  @OneToMany(
    type => tblMBFMessageResolution,
    tblMBFMessageResolution => tblMBFMessageResolution.intMbfMessageResolutionMbfMessage,
    { onDelete: 'CASCADE' }
  )
  tblMbfMessageResolutions: tblMBFMessageResolution[];

  @OneToMany(
    type => tblMBFMessageThread,
    tblMBFMessageThread => tblMBFMessageThread.intMbfMessageThreadMbfMessage,
    { onDelete: 'CASCADE' }
  )
  tblMbfMessageThreads: tblMBFMessageThread[];
}
