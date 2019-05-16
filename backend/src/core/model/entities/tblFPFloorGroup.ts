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
import { tblFPFloor } from './tblFPFloor';
import { tblFPCommunityModelElevationGroupGallery } from './tblFPCommunityModelElevationGroupGallery';
import { tblFPCommunityModelGroupGallery } from './tblFPCommunityModelGroupGallery';
import { tblFPFloorGroupGallery } from './tblFPFloorGroupGallery';
import { tblFPFloorGroupOption } from './tblFPFloorGroupOption';
import { tblFPFloorNav } from './tblFPFloorNav';
import { tblFPModelGenericElevationGroupGallery } from './tblFPModelGenericElevationGroupGallery';

@Entity('tblFPFloorGroup', { schema: 'public' })
export class tblFPFloorGroup {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPFloorGroupID'
  })
  intFPFloorGroupID: string;

  @ManyToOne(type => tblFPFloor, tblFPFloor => tblFPFloor.tblFpFloorGroups, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intFPFloorGroupFPFloorID' })
  intFpFloorGroupFpFloor: tblFPFloor | null;

  @Column('text', {
    nullable: false,
    name: 'varFPFloorGroupName'
  })
  varFPFloorGroupName: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPFloorGroupCreatedDate'
  })
  dteFPFloorGroupCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPFloorGroupModifiedDate'
  })
  dteFPFloorGroupModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPFloorGroupCreatedBy'
  })
  intFPFloorGroupCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPFloorGroupModifiedBy'
  })
  intFPFloorGroupModifiedBy: number | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varFPFloorGroupStatus'
  })
  varFPFloorGroupStatus: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPFloorGroupDeletedFlg'
  })
  bFPFloorGroupDeletedFlg: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPFloorGroupHasPicsFlg'
  })
  bFPFloorGroupHasPicsFlg: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPFloorGroupHiddenFlg'
  })
  bFPFloorGroupHiddenFlg: boolean;

  @OneToMany(
    type => tblFPCommunityModelElevationGroupGallery,
    tblFPCommunityModelElevationGroupGallery =>
      tblFPCommunityModelElevationGroupGallery.intFpCommunityModelElevationGroupGalleryFpFloorGroup
  )
  tblFpCommunityModelElevationGroupGallerys: tblFPCommunityModelElevationGroupGallery[];

  @OneToMany(
    type => tblFPCommunityModelGroupGallery,
    tblFPCommunityModelGroupGallery =>
      tblFPCommunityModelGroupGallery.intFpCommunityModelGroupGalleryFpFloorGroup
  )
  tblFpCommunityModelGroupGallerys: tblFPCommunityModelGroupGallery[];

  @OneToMany(
    type => tblFPFloorGroupGallery,
    tblFPFloorGroupGallery => tblFPFloorGroupGallery.intFpFloorGroupGalleryFpFloorGroup
  )
  tblFpFloorGroupGallerys: tblFPFloorGroupGallery[];

  @OneToMany(
    type => tblFPFloorGroupOption,
    tblFPFloorGroupOption => tblFPFloorGroupOption.intFpFloorGroupOptionFpFloorGroup
  )
  tblFpFloorGroupOptions: tblFPFloorGroupOption[];

  @OneToMany(type => tblFPFloorNav, tblFPFloorNav => tblFPFloorNav.intFpFloorNavFpFloorGroup)
  tblFpFloorNavs: tblFPFloorNav[];

  @OneToMany(
    type => tblFPModelGenericElevationGroupGallery,
    tblFPModelGenericElevationGroupGallery =>
      tblFPModelGenericElevationGroupGallery.intFpModelGenericElevationGroupGalleryFpFloorGroup
  )
  tblFpModelGenericElevationGroupGallerys: tblFPModelGenericElevationGroupGallery[];
}
