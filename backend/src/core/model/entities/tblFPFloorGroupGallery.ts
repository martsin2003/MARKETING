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

@Entity('tblFPFloorGroupGallery', { schema: 'public' })
@Index(
  'idx_17797_IX_tblFPFloorGroupGallery',
  [
    'bFPFloorGroupGalleryDefault',
    'bFPFloorGroupGalleryDeletedFlg',
    'dteFPFloorGroupGalleryModifiedDate',
    'intFpFloorGroupGalleryFpFloorGroup',
    'intFPFloorGroupGalleryModifiedBy',
    'intFPFloorGroupGalleryNavOrder',
    'varFPFloorGroupGalleryImageFile'
  ],
  { unique: true }
)
export class tblFPFloorGroupGallery {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPFloorGroupGalleryID'
  })
  intFPFloorGroupGalleryID: string;

  @ManyToOne(type => tblFPFloorGroup, tblFPFloorGroup => tblFPFloorGroup.tblFpFloorGroupGallerys, {
    nullable: false
  })
  @JoinColumn({ name: 'intFPFloorGroupGalleryFPFloorGroupID' })
  intFpFloorGroupGalleryFpFloorGroup: tblFPFloorGroup | null;

  @Column('text', {
    nullable: true,
    name: 'varFPFloorGroupGalleryImageFile'
  })
  varFPFloorGroupGalleryImageFile: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPFloorGroupGalleryCaption'
  })
  varFPFloorGroupGalleryCaption: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intFPFloorGroupGalleryNavOrder'
  })
  intFPFloorGroupGalleryNavOrder: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPFloorGroupGalleryDefault'
  })
  bFPFloorGroupGalleryDefault: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPFloorGroupGalleryDeletedFlg'
  })
  bFPFloorGroupGalleryDeletedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPFloorGroupGalleryCreatedDate'
  })
  dteFPFloorGroupGalleryCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPFloorGroupGalleryModifiedDate'
  })
  dteFPFloorGroupGalleryModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPFloorGroupGalleryCreatedBy'
  })
  intFPFloorGroupGalleryCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPFloorGroupGalleryModifiedBy'
  })
  intFPFloorGroupGalleryModifiedBy: number | null;
}
