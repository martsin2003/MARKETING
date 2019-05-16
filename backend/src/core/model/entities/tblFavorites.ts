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

@Entity('tblFavorites', { schema: 'public' })
export class tblFavorites {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFavoriteID'
  })
  intFavoriteID: string;

  @Column('integer', {
    nullable: false,
    name: 'intFavoriteCommunityID'
  })
  intFavoriteCommunityID: number;

  @Column('integer', {
    nullable: false,
    name: 'intFavoriteModelID'
  })
  intFavoriteModelID: number;

  @Column('integer', {
    nullable: true,
    name: 'intFavoriteUserID'
  })
  intFavoriteUserID: number | null;

  @Column('timestamp with time zone', {
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'dtDateAdded'
  })
  dtDateAdded: Date | null;

  @Column('integer', {
    nullable: true,
    name: 'intFavoriteType'
  })
  intFavoriteType: number | null;

  @Column('integer', {
    nullable: false,
    name: 'intFavoriteElevationID'
  })
  intFavoriteElevationID: number;
}
