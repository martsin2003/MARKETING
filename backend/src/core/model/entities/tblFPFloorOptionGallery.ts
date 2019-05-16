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

@Entity('tblFPFloorOptionGallery', { schema: 'public' })
@Index(
  'idx_17861_IX_tblFPFloorOptionGallery',
  [
    'bFPFloorOptionGalleryDefault',
    'bFPFloorOptionGalleryDeletedFlg',
    'dteFPFloorOptionGalleryModifiedDate',
    'intFpFloorOptionGalleryFpFloorOption',
    'intFPFloorOptionGalleryModifiedBy',
    'intFPFloorOptionGalleryNavOrder',
    'varFPFloorOptionGalleryImageFile'
  ],
  { unique: true }
)
export class tblFPFloorOptionGallery {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPFloorOptionGalleryID'
  })
  intFPFloorOptionGalleryID: string;

  @ManyToOne(
    type => tblFPFloorOption,
    tblFPFloorOption => tblFPFloorOption.tblFpFloorOptionGallerys,
    { nullable: false }
  )
  @JoinColumn({ name: 'intFPFloorOptionGalleryFPFloorOptionID' })
  intFpFloorOptionGalleryFpFloorOption: tblFPFloorOption | null;

  @Column('text', {
    nullable: true,
    name: 'varFPFloorOptionGalleryImageFile'
  })
  varFPFloorOptionGalleryImageFile: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPFloorOptionGalleryCaption'
  })
  varFPFloorOptionGalleryCaption: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intFPFloorOptionGalleryNavOrder'
  })
  intFPFloorOptionGalleryNavOrder: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPFloorOptionGalleryDefault'
  })
  bFPFloorOptionGalleryDefault: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPFloorOptionGalleryDeletedFlg'
  })
  bFPFloorOptionGalleryDeletedFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPFloorOptionGalleryCreatedDate'
  })
  dteFPFloorOptionGalleryCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPFloorOptionGalleryModifiedDate'
  })
  dteFPFloorOptionGalleryModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPFloorOptionGalleryCreatedBy'
  })
  intFPFloorOptionGalleryCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPFloorOptionGalleryModifiedBy'
  })
  intFPFloorOptionGalleryModifiedBy: number | null;
}
