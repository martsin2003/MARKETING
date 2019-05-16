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
import { tblRealResultsRoute } from './tblRealResultsRoute';

@Entity('tblRealResultsRoutePermission', { schema: 'public' })
@Index('idx_19394_IX_tblRealResultsRoutePermission', [
  'bAllowSubrouteAccessFlg',
  'dteRealResultsRoutePermissionCreatedDate',
  'intRealResultsRoutePermissionCreatedBy'
])
export class tblRealResultsRoutePermission {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'lngUserID'
  })
  lngUserID: number;

  @ManyToOne(
    type => tblRealResultsRoute,
    tblRealResultsRoute => tblRealResultsRoute.tblRealResultsRoutePermissions,
    { primary: true, nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRealResultsRouteID' })
  intRealResultsRoute: tblRealResultsRoute | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bAllowSubrouteAccessFlg'
  })
  bAllowSubrouteAccessFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRealResultsRoutePermissionCreatedDate'
  })
  dteRealResultsRoutePermissionCreatedDate: Date;

  @Column('integer', {
    nullable: false,
    name: 'intRealResultsRoutePermissionCreatedBy'
  })
  intRealResultsRoutePermissionCreatedBy: number;
}
