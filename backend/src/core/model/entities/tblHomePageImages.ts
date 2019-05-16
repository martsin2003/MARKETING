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

@Entity('tblHomePageImages', { schema: 'public' })
export class tblHomePageImages {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intHomeImageID'
  })
  intHomeImageID: string;

  @Column('text', {
    nullable: false,
    name: 'varHomePageImage'
  })
  varHomePageImage: string;

  @Column('text', {
    nullable: true,
    name: 'varHomePageImageAltTag'
  })
  varHomePageImageAltTag: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intNavOrder'
  })
  intNavOrder: number | null;
}
