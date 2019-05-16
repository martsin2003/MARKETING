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
import { tblCommunityARHeaderGraphicCategory } from './tblCommunityARHeaderGraphicCategory';

@Entity('tblCommunityARHeaderGraphicARType', { schema: 'public' })
export class tblCommunityARHeaderGraphicARType {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunityARHeaderGraphicARTypeID'
  })
  intCommunityARHeaderGraphicARTypeID: string;

  @Column('text', {
    nullable: false,
    name: 'varCommunityARHeaderGraphicARType'
  })
  varCommunityARHeaderGraphicARType: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varCommunityARHeaderGraphicARTypeStatus'
  })
  varCommunityARHeaderGraphicARTypeStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCommunityARHeaderGraphicARTypeCreatedDate'
  })
  dteCommunityARHeaderGraphicARTypeCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteCommunityARHeaderGraphicARTypeModifiedDate'
  })
  dteCommunityARHeaderGraphicARTypeModifiedDate: Date;

  @OneToMany(
    type => tblCommunityARHeaderGraphicCategory,
    tblCommunityARHeaderGraphicCategory =>
      tblCommunityARHeaderGraphicCategory.intCommunityArHeaderGraphicCategoryCommunityArHeaderGraphicArTy,
    { onDelete: 'CASCADE' }
  )
  tblCommunityArHeaderGraphicCategorys: tblCommunityARHeaderGraphicCategory[];
}
