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

@Entity('tblCommunitySiteplanGallery', { schema: 'public' })
export class tblCommunitySiteplanGallery {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunitySiteplanGalleryID'
  })
  intCommunitySiteplanGalleryID: string;

  @ManyToOne(type => tblCommunity, tblCommunity => tblCommunity.tblCommunitySiteplanGallerys, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intCommunitySiteplanGalleryCommunityID' })
  intCommunitySiteplanGalleryCommunity: tblCommunity | null;

  @Column('text', {
    nullable: false,
    name: 'varCommunitySiteplanGalleryCaption'
  })
  varCommunitySiteplanGalleryCaption: string;

  @Column('text', {
    nullable: false,
    name: 'varCommunitySiteplanGalleryImageFile'
  })
  varCommunitySiteplanGalleryImageFile: string;

  @Column('integer', {
    nullable: false,
    name: 'intCommunitySiteplanGalleryNavOrder'
  })
  intCommunitySiteplanGalleryNavOrder: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bCommunitySiteplanGalleryDefault'
  })
  bCommunitySiteplanGalleryDefault: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCommunitySiteplanGalleryCreatedDate'
  })
  dteCommunitySiteplanGalleryCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCommunitySiteplanGalleryModifiedDate'
  })
  dteCommunitySiteplanGalleryModifiedDate: Date;
}
