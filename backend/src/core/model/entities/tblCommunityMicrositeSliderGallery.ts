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

@Entity('tblCommunityMicrositeSliderGallery', { schema: 'public' })
@Index(
  'idx_16895_IX_tblCommunityMicrositeSliderGallery',
  [
    'bCommunityMicrositeSliderGalleryDefault',
    'dteCommunityMicrositeSliderGalleryModifiedDate',
    'intCommunityMicrositeSliderGalleryCommunity',
    'intCommunityMicrositeSliderGalleryID',
    'intCommunityMicrositeSliderGalleryNavOrder',
    'varCommunityMicrositeSliderGalleryImageFile'
  ],
  { unique: true }
)
export class tblCommunityMicrositeSliderGallery {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunityMicrositeSliderGalleryID'
  })
  intCommunityMicrositeSliderGalleryID: string;

  @ManyToOne(
    type => tblCommunity,
    tblCommunity => tblCommunity.tblCommunityMicrositeSliderGallerys,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intCommunityMicrositeSliderGalleryCommunityID' })
  intCommunityMicrositeSliderGalleryCommunity: tblCommunity | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityMicrositeSliderGalleryCaption'
  })
  varCommunityMicrositeSliderGalleryCaption: string | null;

  @Column('text', {
    nullable: false,
    name: 'varCommunityMicrositeSliderGalleryImageFile'
  })
  varCommunityMicrositeSliderGalleryImageFile: string;

  @Column('integer', {
    nullable: false,
    name: 'intCommunityMicrositeSliderGalleryNavOrder'
  })
  intCommunityMicrositeSliderGalleryNavOrder: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bCommunityMicrositeSliderGalleryDefault'
  })
  bCommunityMicrositeSliderGalleryDefault: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCommunityMicrositeSliderGalleryCreatedDate'
  })
  dteCommunityMicrositeSliderGalleryCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCommunityMicrositeSliderGalleryModifiedDate'
  })
  dteCommunityMicrositeSliderGalleryModifiedDate: Date;
}
