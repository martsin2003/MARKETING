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

@Entity('tblModelGallery', { schema: 'public' })
export class tblModelGallery {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intModelGalleryID'
  })
  intModelGalleryID: string;

  @Column('integer', {
    nullable: true,
    name: 'intModelGalleryModelID'
  })
  intModelGalleryModelID: number | null;

  @Column('text', {
    nullable: true,
    default: () => "'Exterior'",
    name: 'varModelGalleryCategory'
  })
  varModelGalleryCategory: string | null;

  @Column('text', {
    nullable: true,
    name: 'varModelGalleryCaption'
  })
  varModelGalleryCaption: string | null;

  @Column('text', {
    nullable: true,
    name: 'varModelGalleryImageFile'
  })
  varModelGalleryImageFile: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelGalleryNavOrder'
  })
  intModelGalleryNavOrder: number | null;

  @Column('text', {
    nullable: true,
    default: () => "'0'",
    name: 'bModelGalleryDefault'
  })
  bModelGalleryDefault: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteModelGalleryCreatedDate'
  })
  dteModelGalleryCreatedDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteModelGalleryModifiedDate'
  })
  dteModelGalleryModifiedDate: Date | null;
}
