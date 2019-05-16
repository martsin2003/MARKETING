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

@Entity('tblSiteRouteCommonParam', { schema: 'public' })
export class tblSiteRouteCommonParam {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intSiteRouteCommonParamID'
  })
  intSiteRouteCommonParamID: string;

  @Column('int', {
    nullable: false,
    name: 'intSiteRouteCommonParamSiteRoute'
  })
  intSiteRouteCommonParamSiteRoute: tblSiteRouteCommonParam | null;

  @Column('text', {
    nullable: false,
    name: 'varSiteRouteCommonParamDesktopName'
  })
  varSiteRouteCommonParamDesktopName: string;

  @Column('text', {
    nullable: false,
    name: 'varSiteRouteCommonParamMobileName'
  })
  varSiteRouteCommonParamMobileName: string;

  @Column('text', {
    nullable: false,
    name: 'varSiteRouteCommonParamDataType'
  })
  varSiteRouteCommonParamDataType: string;

  @Column('text', {
    nullable: true,
    name: 'varSiteRouteCommonParamDefault'
  })
  varSiteRouteCommonParamDefault: string | null;
}
