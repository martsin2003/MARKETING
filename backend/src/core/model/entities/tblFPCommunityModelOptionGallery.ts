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
import { tblFPFloorOption } from './tblFPFloorOption';
import { tblCommunity } from './tblCommunity';
import { tblModel } from './tblModel';

@Entity('tblFPCommunityModelOptionGallery', { schema: 'public' })
export class tblFPCommunityModelOptionGallery {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPCommunityModelOptionGalleryID'
  })
  intFPCommunityModelOptionGalleryID: string;

  @ManyToOne(
    type => tblFPFloorOption,
    tblFPFloorOption => tblFPFloorOption.tblFpCommunityModelOptionGallerys,
    { nullable: false }
  )
  @JoinColumn({ name: 'intFPCommunityModelOptionGalleryFPFloorOptionID' })
  intFpCommunityModelOptionGalleryFpFloorOption: tblFPFloorOption | null;

  @ManyToOne(type => tblCommunity, tblCommunity => tblCommunity.tblFpCommunityModelOptionGallerys, {
    nullable: false
  })
  @JoinColumn({ name: 'intFPCommunityModelOptionGalleryCommunityID' })
  intFpCommunityModelOptionGalleryCommunity: tblCommunity | null;

  @ManyToOne(type => tblModel, tblModel => tblModel.tblFpCommunityModelOptionGallerys, {
    nullable: false
  })
  @JoinColumn({ name: 'intFPCommunityModelOptionGalleryModelID' })
  intFpCommunityModelOptionGalleryModel: tblModel | null;

  @Column('text', {
    nullable: true,
    name: 'varFPCommunityModelOptionGalleryImageFile'
  })
  varFPCommunityModelOptionGalleryImageFile: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPCommunityModelOptionGalleryCaption'
  })
  varFPCommunityModelOptionGalleryCaption: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intFPCommunityModelOptionGalleryNavOrder'
  })
  intFPCommunityModelOptionGalleryNavOrder: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPCommunityModelOptionGalleryDefault'
  })
  bFPCommunityModelOptionGalleryDefault: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPCommunityModelOptionGalleryDeletedFlg'
  })
  bFPCommunityModelOptionGalleryDeletedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPCommunityModelOptionGalleryCreatedDate'
  })
  dteFPCommunityModelOptionGalleryCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPCommunityModelOptionGalleryModifiedDate'
  })
  dteFPCommunityModelOptionGalleryModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPCommunityModelOptionGalleryCreatedBy'
  })
  intFPCommunityModelOptionGalleryCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPCommunityModelOptionGalleryModifiedBy'
  })
  intFPCommunityModelOptionGalleryModifiedBy: number | null;
}
