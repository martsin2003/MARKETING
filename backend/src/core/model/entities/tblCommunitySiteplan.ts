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
import { tblCommunityProject } from './tblCommunityProject';

@Entity('tblCommunitySiteplan', { schema: 'public' })
export class tblCommunitySiteplan {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunitySiteplanID'
  })
  intCommunitySiteplanID: string;

  @ManyToOne(
    type => tblCommunityProject,
    tblCommunityProject => tblCommunityProject.tblCommunitySiteplans,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intCommunitySiteplanCommunityProjectID' })
  intCommunitySiteplanCommunityProject: tblCommunityProject | null;

  @Column('text', {
    nullable: false,
    name: 'varSiteplanLotIdentifier'
  })
  varSiteplanLotIdentifier: string;

  @Column('integer', {
    nullable: false,
    name: 'intSiteplanLotSqFt'
  })
  intSiteplanLotSqFt: number;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'intSiteplanLotAcres'
  })
  intSiteplanLotAcres: number;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curSiteplanLotPrice'
  })
  curSiteplanLotPrice: string;

  @Column('text', {
    nullable: false,
    name: 'varSiteplanLotStatus'
  })
  varSiteplanLotStatus: string;

  @Column('text', {
    nullable: true,
    name: 'varSiteplanAddress'
  })
  varSiteplanAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSiteplanCity'
  })
  varSiteplanCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSiteplanState'
  })
  varSiteplanState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSiteplanZip'
  })
  varSiteplanZip: string | null;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'fltSiteplanLotLat'
  })
  fltSiteplanLotLat: number;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'fltSiteplanLotLong'
  })
  fltSiteplanLotLong: number;

  @Column('integer', {
    nullable: false,
    name: 'rnk'
  })
  rnk: number;

  @Column('integer', {
    nullable: true,
    name: 'intSiteplanIDOrig'
  })
  intSiteplanIDOrig: number | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteSiteplanLotCreatedDate'
  })
  dteSiteplanLotCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteSiteplanLotModifiedDate'
  })
  dteSiteplanLotModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varSiteplanLotSection'
  })
  varSiteplanLotSection: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSiteplanLotAmenityDetails'
  })
  varSiteplanLotAmenityDetails: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSiteplanLotImgPath'
  })
  varSiteplanLotImgPath: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intSiteplanCountyID'
  })
  intSiteplanCountyID: number | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bCommunitySiteplanMarketAsSoldFlg'
  })
  bCommunitySiteplanMarketAsSoldFlg: boolean;

  @Column('integer', {
    nullable: true,
    name: 'intSiteplanTouchUserID'
  })
  intSiteplanTouchUserID: number | null;
}
