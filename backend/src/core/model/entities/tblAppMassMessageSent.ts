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
import { tblAppMassMessage } from './tblAppMassMessage';

@Entity('tblAppMassMessageSent', { schema: 'public' })
@Index(
  'idx_16471_IX_tblAppMassMessageSent',
  [
    'dteAppMassMessageSentTimestamp',
    'intAppMassMessageSentID',
    'intAppMassMessageSentMessage',
    'intAppMassMessageSentPushNotificationsSentCount',
    'intAppMassMessageSentRecipientCount'
  ],
  { unique: true }
)
export class tblAppMassMessageSent {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intAppMassMessageSentID'
  })
  intAppMassMessageSentID: string;

  @ManyToOne(
    type => tblAppMassMessage,
    tblAppMassMessage => tblAppMassMessage.tblAppMassMessageSents,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intAppMassMessageSentMessageID' })
  intAppMassMessageSentMessage: tblAppMassMessage | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteAppMassMessageSentTimestamp'
  })
  dteAppMassMessageSentTimestamp: Date;

  @Column('integer', {
    nullable: false,
    name: 'intAppMassMessageSentRecipientCount'
  })
  intAppMassMessageSentRecipientCount: number;

  @Column('integer', {
    nullable: false,
    name: 'intAppMassMessageSentPushNotificationsSentCount'
  })
  intAppMassMessageSentPushNotificationsSentCount: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteAppMassMessageSentCreatedDate'
  })
  dteAppMassMessageSentCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteAppMassMessageSentModifiedDate'
  })
  dteAppMassMessageSentModifiedDate: Date;
}
