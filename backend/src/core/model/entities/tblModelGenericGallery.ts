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

@Entity('tblModelGenericGallery', { schema: 'public' })
export class tblModelGenericGallery {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intModelGenericGalleryID'
  })
  intModelGenericGalleryID: string;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericGalleryModelGenericID'
  })
  intModelGenericGalleryModelGenericID: number | null;

  @Column('text', {
    nullable: true,
    default: () => "'Exterior'",
    name: 'varModelGenericGalleryCategory'
  })
  varModelGenericGalleryCategory: string | null;

  @Column('text', {
    nullable: true,
    name: 'varModelGenericGalleryCaption'
  })
  varModelGenericGalleryCaption: string | null;

  @Column('text', {
    nullable: true,
    name: 'varModelGenericGalleryImageFile'
  })
  varModelGenericGalleryImageFile: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericGalleryNavOrder'
  })
  intModelGenericGalleryNavOrder: number | null;

  @Column('text', {
    nullable: true,
    default: () => "'0'",
    name: 'bModelGenericGalleryDefault'
  })
  bModelGenericGalleryDefault: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteModelGenericGalleryCreatedDate'
  })
  dteModelGenericGalleryCreatedDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteModelGenericGalleryModifiedDate'
  })
  dteModelGenericGalleryModifiedDate: Date | null;
}
