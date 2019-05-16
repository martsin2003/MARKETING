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
import { tblFPCommunityModelElevationOptionDesc } from './tblFPCommunityModelElevationOptionDesc';
import { tblFPCommunityModelElevationOptionDisplayAsStandard } from './tblFPCommunityModelElevationOptionDisplayAsStandard';
import { tblFPCommunityModelElevationOptionGallery } from './tblFPCommunityModelElevationOptionGallery';
import { tblFPCommunityModelElevationOptionRemove } from './tblFPCommunityModelElevationOptionRemove';
import { tblFPCommunityModelOptionGallery } from './tblFPCommunityModelOptionGallery';
import { tblFPElevationOptionAltPNG } from './tblFPElevationOptionAltPNG';
import { tblFPElevationOptionDisplayOnLoad } from './tblFPElevationOptionDisplayOnLoad';
import { tblFPElevationOptionRemove } from './tblFPElevationOptionRemove';
import { tblFPFloorGroupOption } from './tblFPFloorGroupOption';
import { tblFPFloorNav } from './tblFPFloorNav';
import { tblFPFloorOptionAutoTurnOn } from './tblFPFloorOptionAutoTurnOn';
import { tblFPFloorOptionConditional } from './tblFPFloorOptionConditional';
import { tblFPFloorOptionConditionalCondition } from './tblFPFloorOptionConditionalCondition';
import { tblFPFloorOptionExclude } from './tblFPFloorOptionExclude';
import { tblFPFloorOptionGallery } from './tblFPFloorOptionGallery';
import { tblFPFloorOptionRequire } from './tblFPFloorOptionRequire';
import { tblFPFloorOptionRequireOne } from './tblFPFloorOptionRequireOne';
import { tblFPModelGenericElevationOptionGallery } from './tblFPModelGenericElevationOptionGallery';

@Entity('tblFPFloorOption', { schema: 'public' })
export class tblFPFloorOption {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPFloorOptionID'
  })
  intFPFloorOptionID: string;

  @ManyToOne(type => tblFPFloor, tblFPFloor => tblFPFloor.tblFpFloorOptions, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intFPFloorOptionFPFloorID' })
  intFpFloorOptionFpFloor: tblFPFloor | null;

  @ManyToOne(type => tblFPFloorOption, tblFPFloorOption => tblFPFloorOption.tblFpFloorOptions, {})
  @JoinColumn({ name: 'intFPFloorOptionFPFloorOptionID' })
  intFpFloorOptionFpFloorOption: tblFPFloorOption | null;

  @Column('text', {
    nullable: false,
    name: 'varFPFloorOptionName'
  })
  varFPFloorOptionName: string;

  @Column('text', {
    nullable: true,
    name: 'varFPFloorOptionDesc'
  })
  varFPFloorOptionDesc: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPFloorOptionPNG'
  })
  varFPFloorOptionPNG: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varFPFloorOptionStatus'
  })
  varFPFloorOptionStatus: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPFloorOptionHasPicsFlg'
  })
  bFPFloorOptionHasPicsFlg: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'true',
    name: 'bFPFloorOptionShowDetailFlg'
  })
  bFPFloorOptionShowDetailFlg: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPFloorOptionHiddenFlg'
  })
  bFPFloorOptionHiddenFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPFloorOptionCreatedDate'
  })
  dteFPFloorOptionCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPFloorOptionModifiedDate'
  })
  dteFPFloorOptionModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPFloorOptionCreatedBy'
  })
  intFPFloorOptionCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPFloorOptionModifiedBy'
  })
  intFPFloorOptionModifiedBy: number | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPFloorOptionDeletedFlg'
  })
  bFPFloorOptionDeletedFlg: boolean;

  @OneToMany(
    type => tblFPCommunityModelElevationOptionDesc,
    tblFPCommunityModelElevationOptionDesc =>
      tblFPCommunityModelElevationOptionDesc.intFpCommunityModelElevationOptionDescFpFloorOption
  )
  tblFpCommunityModelElevationOptionDescs: tblFPCommunityModelElevationOptionDesc[];

  @OneToMany(
    type => tblFPCommunityModelElevationOptionDisplayAsStandard,
    tblFPCommunityModelElevationOptionDisplayAsStandard =>
      tblFPCommunityModelElevationOptionDisplayAsStandard.intFpCommunityModelElevationOptionDisplayAsStandardFpFloorOptio
  )
  tblFpCommunityModelElevationOptionDisplayAsStandards: tblFPCommunityModelElevationOptionDisplayAsStandard[];

  @OneToMany(
    type => tblFPCommunityModelElevationOptionGallery,
    tblFPCommunityModelElevationOptionGallery =>
      tblFPCommunityModelElevationOptionGallery.intFpCommunityModelElevationOptionGalleryFpFloorOption
  )
  tblFpCommunityModelElevationOptionGallerys: tblFPCommunityModelElevationOptionGallery[];

  @OneToMany(
    type => tblFPCommunityModelElevationOptionRemove,
    tblFPCommunityModelElevationOptionRemove =>
      tblFPCommunityModelElevationOptionRemove.intFpCommunityModelElevationOptionRemoveFpFloorOption
  )
  tblFpCommunityModelElevationOptionRemoves: tblFPCommunityModelElevationOptionRemove[];

  @OneToMany(
    type => tblFPCommunityModelOptionGallery,
    tblFPCommunityModelOptionGallery =>
      tblFPCommunityModelOptionGallery.intFpCommunityModelOptionGalleryFpFloorOption
  )
  tblFpCommunityModelOptionGallerys: tblFPCommunityModelOptionGallery[];

  @OneToMany(
    type => tblFPElevationOptionAltPNG,
    tblFPElevationOptionAltPNG => tblFPElevationOptionAltPNG.intFpElevationOptionAltPngfpFloorOption
  )
  tblFpElevationOptionAltPngs: tblFPElevationOptionAltPNG[];

  @OneToMany(
    type => tblFPElevationOptionDisplayOnLoad,
    tblFPElevationOptionDisplayOnLoad =>
      tblFPElevationOptionDisplayOnLoad.intFpElevationOptionDisplayOnLoadFpFloorOption
  )
  tblFpElevationOptionDisplayOnLoads: tblFPElevationOptionDisplayOnLoad[];

  @OneToMany(
    type => tblFPElevationOptionRemove,
    tblFPElevationOptionRemove => tblFPElevationOptionRemove.intFpElevationOptionRemoveFpFloorOption
  )
  tblFpElevationOptionRemoves: tblFPElevationOptionRemove[];

  @OneToMany(
    type => tblFPFloorGroupOption,
    tblFPFloorGroupOption => tblFPFloorGroupOption.intFpFloorGroupOptionFpFloorOption
  )
  tblFpFloorGroupOptions: tblFPFloorGroupOption[];

  @OneToMany(type => tblFPFloorNav, tblFPFloorNav => tblFPFloorNav.intFpFloorNavFpFloorOption)
  tblFpFloorNavs: tblFPFloorNav[];

  @OneToMany(
    type => tblFPFloorOption,
    tblFPFloorOption => tblFPFloorOption.intFpFloorOptionFpFloorOption
  )
  tblFpFloorOptions: tblFPFloorOption[];

  @OneToMany(
    type => tblFPFloorOptionAutoTurnOn,
    tblFPFloorOptionAutoTurnOn =>
      tblFPFloorOptionAutoTurnOn.intFpFloorOptionAutoTurnOnFpFloorOption,
    { onDelete: 'CASCADE' }
  )
  tblFpFloorOptionAutoTurnOns: tblFPFloorOptionAutoTurnOn[];

  @OneToMany(
    type => tblFPFloorOptionAutoTurnOn,
    tblFPFloorOptionAutoTurnOn =>
      tblFPFloorOptionAutoTurnOn.intFpFloorOptionAutoTurnOnTargetFpFloorOption
  )
  tblFpFloorOptionAutoTurnOns2: tblFPFloorOptionAutoTurnOn[];

  @OneToMany(
    type => tblFPFloorOptionConditional,
    tblFPFloorOptionConditional =>
      tblFPFloorOptionConditional.intFpFloorOptionConditionalFpFloorOption,
    { onDelete: 'CASCADE' }
  )
  tblFpFloorOptionConditionals: tblFPFloorOptionConditional[];

  @OneToMany(
    type => tblFPFloorOptionConditionalCondition,
    tblFPFloorOptionConditionalCondition =>
      tblFPFloorOptionConditionalCondition.intFpFloorOptionConditionalConditionTargetFpFloorOption
  )
  tblFpFloorOptionConditionalConditions: tblFPFloorOptionConditionalCondition[];

  @OneToMany(
    type => tblFPFloorOptionExclude,
    tblFPFloorOptionExclude => tblFPFloorOptionExclude.intFpFloorOptionExcludeFpFloorOption,
    { onDelete: 'CASCADE' }
  )
  tblFpFloorOptionExcludes: tblFPFloorOptionExclude[];

  @OneToMany(
    type => tblFPFloorOptionExclude,
    tblFPFloorOptionExclude => tblFPFloorOptionExclude.intFpFloorOptionExcludeTargetFpFloorOption
  )
  tblFpFloorOptionExcludes2: tblFPFloorOptionExclude[];

  @OneToMany(
    type => tblFPFloorOptionGallery,
    tblFPFloorOptionGallery => tblFPFloorOptionGallery.intFpFloorOptionGalleryFpFloorOption
  )
  tblFpFloorOptionGallerys: tblFPFloorOptionGallery[];

  @OneToMany(
    type => tblFPFloorOptionRequire,
    tblFPFloorOptionRequire => tblFPFloorOptionRequire.intFpFloorOptionRequireFpFloorOption,
    { onDelete: 'CASCADE' }
  )
  tblFpFloorOptionRequires: tblFPFloorOptionRequire[];

  @OneToMany(
    type => tblFPFloorOptionRequire,
    tblFPFloorOptionRequire => tblFPFloorOptionRequire.intFpFloorOptionRequireTargetFpFloorOption
  )
  tblFpFloorOptionRequires2: tblFPFloorOptionRequire[];

  @OneToMany(
    type => tblFPFloorOptionRequireOne,
    tblFPFloorOptionRequireOne =>
      tblFPFloorOptionRequireOne.intFpFloorOptionRequireOneTargetFpFloorOption
  )
  tblFpFloorOptionRequireOnes: tblFPFloorOptionRequireOne[];

  @OneToMany(
    type => tblFPModelGenericElevationOptionGallery,
    tblFPModelGenericElevationOptionGallery =>
      tblFPModelGenericElevationOptionGallery.intFpModelGenericElevationOptionGalleryFpFloorOption
  )
  tblFpModelGenericElevationOptionGallerys: tblFPModelGenericElevationOptionGallery[];
}
