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
import { tblSourceStandard2 } from './tblSourceStandard2';

@Entity('tblCommunitySourceStandard', { schema: 'public' })
export class tblCommunitySourceStandard {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunitySourceStandardID'
  })
  intCommunitySourceStandardID: string;

  @Column('integer', {
    nullable: false,
    name: 'intCommunitySourceStandardCRMCommunityID'
  })
  intCommunitySourceStandardCRMCommunityID: number;

  @ManyToOne(
    type => tblSourceStandard2,
    tblSourceStandard2 => tblSourceStandard2.tblCommunitySourceStandards,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intCommunitySourceStandardSourceID' })
  intCommunitySourceStandardSource: tblSourceStandard2 | null;
}
