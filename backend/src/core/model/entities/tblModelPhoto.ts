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

@Entity('tblModelPhoto', { schema: 'public' })
export class tblModelPhoto {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intModelPhotoID'
  })
  intModelPhotoID: string;

  @Column('integer', {
    nullable: true,
    name: 'intModelID'
  })
  intModelID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varModelPhotoSrc'
  })
  varModelPhotoSrc: string | null;

  @Column('text', {
    nullable: true,
    name: 'varModelPhotoCaption'
  })
  varModelPhotoCaption: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intNavOrder'
  })
  intNavOrder: number | null;

  @Column('text', {
    nullable: true,
    name: 'varModelPhotoCategory'
  })
  varModelPhotoCategory: string | null;
}
