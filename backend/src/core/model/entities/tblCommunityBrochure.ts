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

@Entity('tblCommunityBrochure', { schema: 'public' })
export class tblCommunityBrochure {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunityBrochureID'
  })
  intCommunityBrochureID: string;

  @ManyToOne(type => tblCommunity, tblCommunity => tblCommunity.tblCommunityBrochures, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intCommunityBrochureCommunityID' })
  intCommunityBrochureCommunity: tblCommunity | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bitCommunityBrochureIncludeWithHomeBrochure'
  })
  bitCommunityBrochureIncludeWithHomeBrochure: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'intCommunityBrochureNavOrder'
  })
  intCommunityBrochureNavOrder: number | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityBrochureTitle'
  })
  varCommunityBrochureTitle: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityBrochureType'
  })
  varCommunityBrochureType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityBrochureURLPDF'
  })
  varCommunityBrochureURLPDF: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCommunityBrochureCreatedDate'
  })
  dteCommunityBrochureCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCommunityBrochureModifiedDate'
  })
  dteCommunityBrochureModifiedDate: Date;
}
