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
import { tblFP } from './tblFP';
import { tblCommunity } from './tblCommunity';
import { tblModel } from './tblModel';
import { tblFPCommunityModelElevationGroupGallery } from './tblFPCommunityModelElevationGroupGallery';
import { tblFPCommunityModelElevationOptionDesc } from './tblFPCommunityModelElevationOptionDesc';
import { tblFPCommunityModelElevationOptionDisplayAsStandard } from './tblFPCommunityModelElevationOptionDisplayAsStandard';
import { tblFPCommunityModelElevationOptionGallery } from './tblFPCommunityModelElevationOptionGallery';
import { tblFPCommunityModelElevationOptionRemove } from './tblFPCommunityModelElevationOptionRemove';

@Entity('tblFPCommunityModelElevation', { schema: 'public' })
@Index('idx_17615_IX_tblFPCommunityModelElevation_byModel', [
  'bFPCommunityModelElevationDeletedFlg',
  'intFpCommunityModelElevationCommunity',
  'intFpCommunityModelElevationFp',
  'intFPCommunityModelElevationModelElevationID',
  'intFpCommunityModelElevationModel'
])
@Index('idx_17615_IX_tblFPCommunityModelElevation_byCommunity', [
  'bFPCommunityModelElevationDeletedFlg',
  'intFpCommunityModelElevationCommunity',
  'intFpCommunityModelElevationFp',
  'intFPCommunityModelElevationModelElevationID',
  'intFpCommunityModelElevationModel'
])
@Index('idx_17615_IX_tblFPCommunityModelElevation_byModelElevation', [
  'bFPCommunityModelElevationDeletedFlg',
  'intFpCommunityModelElevationCommunity',
  'intFpCommunityModelElevationFp',
  'intFPCommunityModelElevationModelElevationID',
  'intFpCommunityModelElevationModel'
])
@Index('idx_17615_IX_tblFPCommunityModelElevation_byFP', [
  'bFPCommunityModelElevationDeletedFlg',
  'intFpCommunityModelElevationCommunity',
  'intFpCommunityModelElevationFp',
  'intFPCommunityModelElevationModelElevationID',
  'intFpCommunityModelElevationModel'
])
export class tblFPCommunityModelElevation {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPCommunityModelElevationID'
  })
  intFPCommunityModelElevationID: string;

  @ManyToOne(type => tblFP, tblFP => tblFP.tblFpCommunityModelElevations, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intFPCommunityModelElevationFPID' })
  intFpCommunityModelElevationFp: tblFP | null;

  @ManyToOne(type => tblCommunity, tblCommunity => tblCommunity.tblFpCommunityModelElevations, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intFPCommunityModelElevationCommunityID' })
  intFpCommunityModelElevationCommunity: tblCommunity | null;

  @ManyToOne(type => tblModel, tblModel => tblModel.tblFpCommunityModelElevations, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intFPCommunityModelElevationModelID' })
  intFpCommunityModelElevationModel: tblModel | null;

  @Column('integer', {
    nullable: false,
    name: 'intFPCommunityModelElevationModelElevationID'
  })
  intFPCommunityModelElevationModelElevationID: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPCommunityModelElevationCreatedDate'
  })
  dteFPCommunityModelElevationCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPCommunityModelElevationModifiedDate'
  })
  dteFPCommunityModelElevationModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPCommunityModelElevationCreatedBy'
  })
  intFPCommunityModelElevationCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPCommunityModelElevationModifiedBy'
  })
  intFPCommunityModelElevationModifiedBy: number | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varFPCommunityModelElevationStatus'
  })
  varFPCommunityModelElevationStatus: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPCommunityModelElevationDeletedFlg'
  })
  bFPCommunityModelElevationDeletedFlg: boolean;

  @Column('integer', {
    nullable: false,
    name: 'intFPCommunityModelElevationFPElevationID'
  })
  intFPCommunityModelElevationFPElevationID: number;

  @OneToMany(
    type => tblFPCommunityModelElevationGroupGallery,
    tblFPCommunityModelElevationGroupGallery =>
      tblFPCommunityModelElevationGroupGallery.intFpCommunityModelElevationGroupGalleryFpCommunityModelElevati
  )
  tblFpCommunityModelElevationGroupGallerys: tblFPCommunityModelElevationGroupGallery[];

  @OneToMany(
    type => tblFPCommunityModelElevationOptionDesc,
    tblFPCommunityModelElevationOptionDesc =>
      tblFPCommunityModelElevationOptionDesc.intFpCommunityModelElevationOptionDescFpCommunityModelElevation,
    { onDelete: 'CASCADE' }
  )
  tblFpCommunityModelElevationOptionDescs: tblFPCommunityModelElevationOptionDesc[];

  @OneToMany(
    type => tblFPCommunityModelElevationOptionDisplayAsStandard,
    tblFPCommunityModelElevationOptionDisplayAsStandard =>
      tblFPCommunityModelElevationOptionDisplayAsStandard.intFpCommunityModelElevationOptionDisplayAsStandardFpCommunityM,
    { onDelete: 'CASCADE' }
  )
  tblFpCommunityModelElevationOptionDisplayAsStandards: tblFPCommunityModelElevationOptionDisplayAsStandard[];

  @OneToMany(
    type => tblFPCommunityModelElevationOptionGallery,
    tblFPCommunityModelElevationOptionGallery =>
      tblFPCommunityModelElevationOptionGallery.intFpCommunityModelElevationOptionGalleryFpCommunityModelElevat,
    { onDelete: 'CASCADE' }
  )
  tblFpCommunityModelElevationOptionGallerys: tblFPCommunityModelElevationOptionGallery[];

  @OneToMany(
    type => tblFPCommunityModelElevationOptionRemove,
    tblFPCommunityModelElevationOptionRemove =>
      tblFPCommunityModelElevationOptionRemove.intFpCommunityModelElevationOptionRemoveFpCommunityModelElevati,
    { onDelete: 'CASCADE' }
  )
  tblFpCommunityModelElevationOptionRemoves: tblFPCommunityModelElevationOptionRemove[];
}
