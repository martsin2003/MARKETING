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
import { tblAppMassMessageTemplate } from './tblAppMassMessageTemplate';
import { tblAppMassMessageSent } from './tblAppMassMessageSent';
import { tblAppMassMessageSentEmail } from './tblAppMassMessageSentEmail';

@Entity('tblAppMassMessage', { schema: 'public' })
@Index(
  'idx_16459_IX_tblAppMassMessage',
  [
    'bAppMassMessageIsScheduledFlg',
    'bAppMassMessageSendEmailFlg',
    'dteAppMassMessageScheduledSendDateTime',
    'intAppMassMessageID',
    'intAppMassMessageTemplate',
    'varAppMassMessageNonce',
    'varAppMassMessageStatus',
    'varAppMassMessageSubject'
  ],
  { unique: true }
)
export class tblAppMassMessage {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intAppMassMessageID'
  })
  intAppMassMessageID: string;

  @ManyToOne(
    type => tblAppMassMessageTemplate,
    tblAppMassMessageTemplate => tblAppMassMessageTemplate.tblAppMassMessages,
    { onDelete: 'SET NULL' }
  )
  @JoinColumn({ name: 'intAppMassMessageTemplateID' })
  intAppMassMessageTemplate: tblAppMassMessageTemplate | null;

  @Column('text', {
    nullable: false,
    name: 'varAppMassMessageSubject'
  })
  varAppMassMessageSubject: string;

  @Column('text', {
    nullable: false,
    name: 'varAppMassMessageMessage'
  })
  varAppMassMessageMessage: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bAppMassMessageIsScheduledFlg'
  })
  bAppMassMessageIsScheduledFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteAppMassMessageScheduledSendDateTime'
  })
  dteAppMassMessageScheduledSendDateTime: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varAppMassMessageFiltersJSON'
  })
  varAppMassMessageFiltersJSON: string | null;

  @Column('text', {
    nullable: true,
    name: 'varAppMassMessageFiltersDisplay'
  })
  varAppMassMessageFiltersDisplay: string | null;

  @Column('text', {
    nullable: true,
    name: 'varAppMassMessageExcludes'
  })
  varAppMassMessageExcludes: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteAppMassMessageCreatedDate'
  })
  dteAppMassMessageCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteAppMassMessageModifiedDate'
  })
  dteAppMassMessageModifiedDate: Date;

  @Column('text', {
    nullable: false,
    name: 'varAppMassMessageNonce'
  })
  varAppMassMessageNonce: string;

  @Column('text', {
    nullable: true,
    default: () => "'new'",
    name: 'varAppMassMessageStatus'
  })
  varAppMassMessageStatus: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bAppMassMessageSendEmailFlg'
  })
  bAppMassMessageSendEmailFlg: boolean;

  @Column('text', {
    nullable: true,
    name: 'varAppMassMessageReplyTo'
  })
  varAppMassMessageReplyTo: string | null;

  @OneToMany(
    type => tblAppMassMessageSent,
    tblAppMassMessageSent => tblAppMassMessageSent.intAppMassMessageSentMessage,
    { onDelete: 'CASCADE' }
  )
  tblAppMassMessageSents: tblAppMassMessageSent[];

  @OneToMany(
    type => tblAppMassMessageSentEmail,
    tblAppMassMessageSentEmail => tblAppMassMessageSentEmail.intAppMassMessageSentEmailMessage,
    { onDelete: 'CASCADE' }
  )
  tblAppMassMessageSentEmails: tblAppMassMessageSentEmail[];
}
