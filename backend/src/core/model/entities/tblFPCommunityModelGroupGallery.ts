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
import { tblFPFloorGroup } from './tblFPFloorGroup';
import { tblCommunity } from './tblCommunity';
import { tblModel } from './tblModel';

@Entity('tblFPCommunityModelGroupGallery', { schema: 'public' })
export class tblFPCommunityModelGroupGallery {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPCommunityModelGroupGalleryID'
  })
  intFPCommunityModelGroupGalleryID: string;

  @ManyToOne(
    type => tblFPFloorGroup,
    tblFPFloorGroup => tblFPFloorGroup.tblFpCommunityModelGroupGallerys,
    { nullable: false }
  )
  @JoinColumn({ name: 'intFPCommunityModelGroupGalleryFPFloorGroupID' })
  intFpCommunityModelGroupGalleryFpFloorGroup: tblFPFloorGroup | null;

  @ManyToOne(type => tblCommunity, tblCommunity => tblCommunity.tblFpCommunityModelGroupGallerys, {
    nullable: false
  })
  @JoinColumn({ name: 'intFPCommunityModelGroupGalleryCommunityID' })
  intFpCommunityModelGroupGalleryCommunity: tblCommunity | null;

  @ManyToOne(type => tblModel, tblModel => tblModel.tblFpCommunityModelGroupGallerys, {
    nullable: false
  })
  @JoinColumn({ name: 'intFPCommunityModelGroupGalleryModelID' })
  intFpCommunityModelGroupGalleryModel: tblModel | null;

  @Column('text', {
    nullable: true,
    name: 'varFPCommunityModelGroupGalleryImageFile'
  })
  varFPCommunityModelGroupGalleryImageFile: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPCommunityModelGroupGalleryCaption'
  })
  varFPCommunityModelGroupGalleryCaption: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intFPCommunityModelGroupGalleryNavOrder'
  })
  intFPCommunityModelGroupGalleryNavOrder: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPCommunityModelGroupGalleryDefault'
  })
  bFPCommunityModelGroupGalleryDefault: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPCommunityModelGroupGalleryDeletedFlg'
  })
  bFPCommunityModelGroupGalleryDeletedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPCommunityModelGroupGalleryCreatedDate'
  })
  dteFPCommunityModelGroupGalleryCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPCommunityModelGroupGalleryModifiedDate'
  })
  dteFPCommunityModelGroupGalleryModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPCommunityModelGroupGalleryCreatedBy'
  })
  intFPCommunityModelGroupGalleryCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPCommunityModelGroupGalleryModifiedBy'
  })
  intFPCommunityModelGroupGalleryModifiedBy: number | null;
}
