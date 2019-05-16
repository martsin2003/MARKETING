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
import { tblFlags } from './tblFlags';

@Entity('tblCommunityFlag', { schema: 'public' })
@Index(
  'idx_16859_IX_tblCommunityFlag',
  [
    'bCommunityFlagDisplay',
    'dteCommunityFlagCreatedDate',
    'dteCommunityFlagModifiedDate',
    'intCommunityFlagCommunity',
    'intCommunityFlagFlag',
    'intCommunityFlagOrder'
  ],
  { unique: true }
)
export class tblCommunityFlag {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunityFlagID'
  })
  intCommunityFlagID: string;

  @ManyToOne(type => tblCommunity, tblCommunity => tblCommunity.tblCommunityFlags, {
    onDelete: 'SET NULL'
  })
  @JoinColumn({ name: 'intCommunityFlagCommunityID' })
  intCommunityFlagCommunity: tblCommunity | null;

  @ManyToOne(type => tblFlags, tblFlags => tblFlags.tblCommunityFlags, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'intCommunityFlagFlagID' })
  intCommunityFlagFlag: tblFlags | null;

  @Column('integer', {
    nullable: false,
    name: 'intCommunityFlagOrder'
  })
  intCommunityFlagOrder: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bCommunityFlagDisplay'
  })
  bCommunityFlagDisplay: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCommunityFlagCreatedDate'
  })
  dteCommunityFlagCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCommunityFlagModifiedDate'
  })
  dteCommunityFlagModifiedDate: Date;
}
