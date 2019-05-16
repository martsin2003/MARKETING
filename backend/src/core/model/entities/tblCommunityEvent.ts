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
import { tblCommunity } from './tblCommunity';

@Entity('tblCommunityEvent', { schema: 'public' })
export class tblCommunityEvent {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunityEventID'
  })
  intCommunityEventID: string;

  @ManyToOne(type => tblCommunity, tblCommunity => tblCommunity.tblCommunityEvents, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intCommunityEventCommunityID' })
  intCommunityEventCommunity: tblCommunity | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEventType'
  })
  varCommunityEventType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEventHeadline'
  })
  varCommunityEventHeadline: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEventDescription'
  })
  varCommunityEventDescription: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEventLocation'
  })
  varCommunityEventLocation: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteCommunityEventStartDate'
  })
  dteCommunityEventStartDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEventStartTime'
  })
  varCommunityEventStartTime: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteCommunityEventEndDate'
  })
  dteCommunityEventEndDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEventEndTime'
  })
  varCommunityEventEndTime: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEventURL'
  })
  varCommunityEventURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityEventFilename'
  })
  varCommunityEventFilename: string | null;
}
