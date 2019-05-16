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

@Entity('tblCommunityPromotion', { schema: 'public' })
export class tblCommunityPromotion {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunityPromotionID'
  })
  intCommunityPromotionID: string;

  @ManyToOne(type => tblCommunity, tblCommunity => tblCommunity.tblCommunityPromotions, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intCommunityPromotionCommunityID' })
  intCommunityPromotionCommunity: tblCommunity | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityPromotionType'
  })
  varCommunityPromotionType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityPromotionHeadline'
  })
  varCommunityPromotionHeadline: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityPromotionDescription'
  })
  varCommunityPromotionDescription: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteCommunityPromotionStartDate'
  })
  dteCommunityPromotionStartDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteCommunityPromotionEndDate'
  })
  dteCommunityPromotionEndDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityPromotionURL'
  })
  varCommunityPromotionURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityPromotionFilename'
  })
  varCommunityPromotionFilename: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCommunityPromotionCreatedDate'
  })
  dteCommunityPromotionCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCommunityPromotionModifiedDate'
  })
  dteCommunityPromotionModifiedDate: Date;
}
