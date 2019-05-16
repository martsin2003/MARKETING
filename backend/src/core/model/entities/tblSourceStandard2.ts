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
import { tblCommunitySourceStandard } from './tblCommunitySourceStandard';

@Entity('tblSourceStandard2', { schema: 'public' })
export class tblSourceStandard2 {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'lngSourceID'
  })
  lngSourceID: string;

  @Column('text', {
    nullable: true,
    name: 'txtSourceName'
  })
  txtSourceName: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intSourceSpecialSort'
  })
  intSourceSpecialSort: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intCRMCommunityID'
  })
  intCRMCommunityID: number | null;

  @OneToMany(
    type => tblCommunitySourceStandard,
    tblCommunitySourceStandard => tblCommunitySourceStandard.intCommunitySourceStandardSource,
    { onDelete: 'CASCADE' }
  )
  tblCommunitySourceStandards: tblCommunitySourceStandard[];
}
