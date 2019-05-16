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

@Entity('tblModelInvestPhoto', { schema: 'public' })
export class tblModelInvestPhoto {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intModelInvestPhotoID'
  })
  intModelInvestPhotoID: string;

  @Column('integer', {
    nullable: true,
    name: 'intModelInvestPhotoModelInvestID'
  })
  intModelInvestPhotoModelInvestID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varModelInvestPhotoSrc'
  })
  varModelInvestPhotoSrc: string | null;

  @Column('text', {
    nullable: true,
    name: 'varModelInvestPhotoCaption'
  })
  varModelInvestPhotoCaption: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intNavOrder'
  })
  intNavOrder: number | null;

  @Column('text', {
    nullable: true,
    name: 'varModelInvestPhotoCategory'
  })
  varModelInvestPhotoCategory: string | null;
}
