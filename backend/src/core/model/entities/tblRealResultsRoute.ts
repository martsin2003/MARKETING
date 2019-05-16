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
import { tblRealResultsRoutePermission } from './tblRealResultsRoutePermission';

@Entity('tblRealResultsRoute', { schema: 'public' })
@Index(
  'idx_19386_IX_tblRealResultsRoute',
  [
    'dteRealResultsRouteCreatedDate',
    'dteRealResultsRouteModifiedDate',
    'intRealResultsRouteCreatedBy',
    'intRealResultsRouteModifiedBy',
    'varRealResultsRoute',
    'varRealResultsRouteAction',
    'varRealResultsRouteAlias',
    'varRealResultsRouteController',
    'varRealResultsRoutePattern'
  ],
  { unique: true }
)
export class tblRealResultsRoute {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRealResultsRouteID'
  })
  intRealResultsRouteID: string;

  @Column('text', {
    nullable: false,
    name: 'varRealResultsRoute'
  })
  varRealResultsRoute: string;

  @Column('text', {
    nullable: false,
    name: 'varRealResultsRouteAlias'
  })
  varRealResultsRouteAlias: string;

  @Column('text', {
    nullable: false,
    name: 'varRealResultsRoutePattern'
  })
  varRealResultsRoutePattern: string;

  @Column('text', {
    nullable: false,
    name: 'varRealResultsRouteController'
  })
  varRealResultsRouteController: string;

  @Column('text', {
    nullable: true,
    name: 'varRealResultsRouteAction'
  })
  varRealResultsRouteAction: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRealResultsRouteCreatedDate'
  })
  dteRealResultsRouteCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRealResultsRouteModifiedDate'
  })
  dteRealResultsRouteModifiedDate: Date;

  @Column('integer', {
    nullable: false,
    name: 'intRealResultsRouteCreatedBy'
  })
  intRealResultsRouteCreatedBy: number;

  @Column('integer', {
    nullable: false,
    name: 'intRealResultsRouteModifiedBy'
  })
  intRealResultsRouteModifiedBy: number;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRealResultsRouteShowInURMFlg'
  })
  bRealResultsRouteShowInURMFlg: boolean;

  @Column('text', {
    nullable: true,
    name: 'varRealResultsRouteDefaultAction'
  })
  varRealResultsRouteDefaultAction: string | null;

  @OneToMany(
    type => tblRealResultsRoutePermission,
    tblRealResultsRoutePermission => tblRealResultsRoutePermission.intRealResultsRoute,
    { onDelete: 'CASCADE' }
  )
  tblRealResultsRoutePermissions: tblRealResultsRoutePermission[];
}
