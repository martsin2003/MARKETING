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

@Entity('tblFavoriteType', { schema: 'public' })
export class tblFavoriteType {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFavoriteTypeID'
  })
  intFavoriteTypeID: string;

  @Column('text', {
    nullable: true,
    name: 'txtFavoriteTypeLabel'
  })
  txtFavoriteTypeLabel: string | null;
}
