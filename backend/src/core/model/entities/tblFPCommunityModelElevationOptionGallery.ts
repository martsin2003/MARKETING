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
import { tblFPCommunityModelElevation } from './tblFPCommunityModelElevation';

@Entity('tblFPCommunityModelElevationOptionGallery', { schema: 'public' })
export class tblFPCommunityModelElevationOptionGallery {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPCommunityModelElevationOptionGalleryID'
  })
  intFPCommunityModelElevationOptionGalleryID: string;

  @ManyToOne(
    type => tblFPFloorOption,
    tblFPFloorOption => tblFPFloorOption.tblFpCommunityModelElevationOptionGallerys,
    { nullable: false }
  )
  @JoinColumn({ name: 'intFPCommunityModelElevationOptionGalleryFPFloorOptionID' })
  intFpCommunityModelElevationOptionGalleryFpFloorOption: tblFPFloorOption | null;

  @ManyToOne(
    type => tblFPCommunityModelElevation,
    tblFPCommunityModelElevation =>
      tblFPCommunityModelElevation.tblFpCommunityModelElevationOptionGallerys,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intFPCommunityModelElevationOptionGalleryFPCommunityModelElevat' })
  intFpCommunityModelElevationOptionGalleryFpCommunityModelElevat: tblFPCommunityModelElevation | null;

  @Column('text', {
    nullable: true,
    name: 'varFPCommunityModelElevationOptionGalleryImageFile'
  })
  varFPCommunityModelElevationOptionGalleryImageFile: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPCommunityModelElevationOptionGalleryCaption'
  })
  varFPCommunityModelElevationOptionGalleryCaption: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intFPCommunityModelElevationOptionGalleryNavOrder'
  })
  intFPCommunityModelElevationOptionGalleryNavOrder: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPCommunityModelElevationOptionGalleryDefault'
  })
  bFPCommunityModelElevationOptionGalleryDefault: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPCommunityModelElevationOptionGalleryDeletedFlg'
  })
  bFPCommunityModelElevationOptionGalleryDeletedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPCommunityModelElevationOptionGalleryCreatedDate'
  })
  dteFPCommunityModelElevationOptionGalleryCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPCommunityModelElevationOptionGalleryModifiedDate'
  })
  dteFPCommunityModelElevationOptionGalleryModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPCommunityModelElevationOptionGalleryCreatedBy'
  })
  intFPCommunityModelElevationOptionGalleryCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPCommunityModelElevationOptionGalleryModifiedBy'
  })
  intFPCommunityModelElevationOptionGalleryModifiedBy: number | null;
}
