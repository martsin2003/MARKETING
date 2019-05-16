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
import { tblHomeEstimate } from './tblHomeEstimate';
import { tblMoveInNowStatusLog } from './tblMoveInNowStatusLog';
import { tblMoveInNowWMLot } from './tblMoveInNowWMLot';
import { tblMyTimeAcceptTerms } from './tblMyTimeAcceptTerms';

@Entity('tblMoveInNow', { schema: 'public' })
@Index('idx_18958_IX_tblMoveInNow_community_status', [
  'intMoveInNowCommunityID',
  'varMoveInNowStatus'
])
export class tblMoveInNow {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMoveInNowID'
  })
  intMoveInNowID: string;

  @Column('integer', {
    nullable: true,
    name: 'intMoveInNowCommunityID'
  })
  intMoveInNowCommunityID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intMoveInNowModelGenericID'
  })
  intMoveInNowModelGenericID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowHomeType'
  })
  varMoveInNowHomeType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowHomesiteNumber'
  })
  varMoveInNowHomesiteNumber: string | null;

  @Column('double precision', {
    nullable: true,
    default: () => "'0'",
    precision: 53,
    name: 'intMoveInNowHomesiteSize'
  })
  intMoveInNowHomesiteSize: number | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowHomesiteSizeType'
  })
  varMoveInNowHomesiteSizeType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowHomesiteAddress'
  })
  varMoveInNowHomesiteAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowHomesiteAddress2'
  })
  varMoveInNowHomesiteAddress2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowHomesiteCity'
  })
  varMoveInNowHomesiteCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowHomesiteState'
  })
  varMoveInNowHomesiteState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowHomesiteCounty'
  })
  varMoveInNowHomesiteCounty: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowHomesiteZip'
  })
  varMoveInNowHomesiteZip: string | null;

  @Column('double precision', {
    nullable: true,
    default: () => "'0'",
    precision: 53,
    name: 'fltMoveInNowLatitude'
  })
  fltMoveInNowLatitude: number | null;

  @Column('double precision', {
    nullable: true,
    default: () => "'0'",
    precision: 53,
    name: 'fltMoveInNowLongitude'
  })
  fltMoveInNowLongitude: number | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bMoveInNowUseLatLongDirections'
  })
  bMoveInNowUseLatLongDirections: boolean | null;

  @Column('text', {
    nullable: true,
    name: 'txtMoveInNowDirections'
  })
  txtMoveInNowDirections: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowMLSNumber'
  })
  varMoveInNowMLSNumber: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowMLSListingURL'
  })
  varMoveInNowMLSListingURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowListingType'
  })
  varMoveInNowListingType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowFloorplanFilenamePDF'
  })
  varMoveInNowFloorplanFilenamePDF: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intMoveInNowBeds'
  })
  intMoveInNowBeds: number | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowMasterBedroomLocation'
  })
  varMoveInNowMasterBedroomLocation: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intMoveInNowBathsFull'
  })
  intMoveInNowBathsFull: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intMoveInNowBathsHalf'
  })
  intMoveInNowBathsHalf: number | null;

  @Column('double precision', {
    nullable: true,
    default: () => "'0'",
    precision: 53,
    name: 'fltMoveInNowBaths'
  })
  fltMoveInNowBaths: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intMoveInNowSqft'
  })
  intMoveInNowSqft: number | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bMoveInNowLALivingRoom'
  })
  bMoveInNowLALivingRoom: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bMoveInNowLADiningRoom'
  })
  bMoveInNowLADiningRoom: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bMoveInNowLAFamilyRoom'
  })
  bMoveInNowLAFamilyRoom: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bMoveInNowLASunRoom'
  })
  bMoveInNowLASunRoom: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bMoveInNowLAStudy'
  })
  bMoveInNowLAStudy: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bMoveInNowLALoft'
  })
  bMoveInNowLALoft: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bMoveInNowLAOffice'
  })
  bMoveInNowLAOffice: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bMoveInNowLAGameRoom'
  })
  bMoveInNowLAGameRoom: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bMoveInNowLAMediaRoom'
  })
  bMoveInNowLAMediaRoom: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bMoveInNowLAGuestRoom'
  })
  bMoveInNowLAGuestRoom: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bMoveInNowLABonusRoom'
  })
  bMoveInNowLABonusRoom: boolean | null;

  @Column('numeric', {
    nullable: true,
    default: () => "'0'",
    name: 'curMoveInNowPrice'
  })
  curMoveInNowPrice: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intMoveInNowStories'
  })
  intMoveInNowStories: number | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bMoveInNowHasBasement'
  })
  bMoveInNowHasBasement: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'intMoveInNowGarage'
  })
  intMoveInNowGarage: number | null;

  @Column('text', {
    nullable: true,
    default: () => "'NA'",
    name: 'varMoveInNowGarageEntry'
  })
  varMoveInNowGarageEntry: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'NA'",
    name: 'varMoveInNowGarageDetached'
  })
  varMoveInNowGarageDetached: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowYearBuilt'
  })
  varMoveInNowYearBuilt: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtMoveInNowFeatures'
  })
  txtMoveInNowFeatures: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtMoveInNowDescription'
  })
  txtMoveInNowDescription: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtMoveInNowIncentiveDescription'
  })
  txtMoveInNowIncentiveDescription: string | null;

  @Column('text', {
    nullable: true,
    name: 'vartMoveInNowIncentiveURL'
  })
  vartMoveInNowIncentiveURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtMoveInNowIncentiveDisclaimer'
  })
  txtMoveInNowIncentiveDisclaimer: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowSalesFlyerPDF'
  })
  varMoveInNowSalesFlyerPDF: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowVideoTourURL'
  })
  varMoveInNowVideoTourURL: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intMoveInNowModelGenericElevationID'
  })
  intMoveInNowModelGenericElevationID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intMoveInNowFloorplanConfigurationID'
  })
  intMoveInNowFloorplanConfigurationID: number | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteMoveInNowCompletionDate'
  })
  dteMoveInNowCompletionDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowCompletionDate'
  })
  varMoveInNowCompletionDate: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowStatus'
  })
  varMoveInNowStatus: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteMoveInNowCreatedDate'
  })
  dteMoveInNowCreatedDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteMoveInNowModifiedDate'
  })
  dteMoveInNowModifiedDate: Date | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bMoveInNowSyndicate'
  })
  bMoveInNowSyndicate: boolean;

  @Column('integer', {
    nullable: true,
    name: 'id'
  })
  id: number | null;

  @Column('integer', {
    nullable: true,
    name: 'residence_id'
  })
  residence_id: number | null;

  @Column('text', {
    nullable: true,
    name: 'residence'
  })
  residence: string | null;

  @Column('integer', {
    nullable: true,
    name: 'community_idOld'
  })
  community_idOld: number | null;

  @Column('integer', {
    nullable: true,
    name: 'elevation_id'
  })
  elevation_id: number | null;

  @Column('text', {
    nullable: true,
    name: 'image_path'
  })
  image_path: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowHeadline'
  })
  varMoveInNowHeadline: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteMoveInNowSoldDate'
  })
  dteMoveInNowSoldDate: Date | null;

  @Column('integer', {
    nullable: true,
    name: 'intMoveInNowInteractiveFloorPlanID'
  })
  intMoveInNowInteractiveFloorPlanID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowFloorplanDisplay'
  })
  varMoveInNowFloorplanDisplay: string | null;

  @Column('text', {
    nullable: true,
    name: 'floorplan_filename'
  })
  floorplan_filename: string | null;

  @Column('boolean', {
    nullable: true,
    name: 'sold'
  })
  sold: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'live'
  })
  live: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'intSiteplanId'
  })
  intSiteplanId: number | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bBDXHotHome'
  })
  bBDXHotHome: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'intCommunitySiteplanID'
  })
  intCommunitySiteplanID: number | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'true',
    name: 'bMoveInNowDisplayOnSiteAndXML'
  })
  bMoveInNowDisplayOnSiteAndXML: boolean;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curMoveInNowPreviousPrice'
  })
  curMoveInNowPreviousPrice: string;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteMoveInNowDisplayDate'
  })
  dteMoveInNowDisplayDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowTourURL'
  })
  varMoveInNowTourURL: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bMyStyleHome'
  })
  bMyStyleHome: boolean;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteMoveInNowActivatedDate'
  })
  dteMoveInNowActivatedDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowMyVisionDesignMyHomeURL'
  })
  varMoveInNowMyVisionDesignMyHomeURL: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bMoveInNowMyEnergyFlg'
  })
  bMoveInNowMyEnergyFlg: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bMoveInNowMLOSFlg'
  })
  bMoveInNowMLOSFlg: boolean;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteMoveInNowReportingActiveDate'
  })
  dteMoveInNowReportingActiveDate: Date | null;

  @Column('numeric', {
    nullable: false,
    default: () => "'0'",
    name: 'curMoveInNowFlashPrice'
  })
  curMoveInNowFlashPrice: string;

  @Column('text', {
    nullable: true,
    name: 'varMoveInNowConstructionPhase'
  })
  varMoveInNowConstructionPhase: string | null;

  @Column('numeric', {
    nullable: true,
    name: 'curMoveInNowFullPrice'
  })
  curMoveInNowFullPrice: string | null;

  @OneToMany(type => tblHomeEstimate, tblHomeEstimate => tblHomeEstimate.intHomeEstimateMoveInNow, {
    onDelete: 'SET NULL'
  })
  tblHomeEstimates: tblHomeEstimate[];

  @OneToMany(
    type => tblMoveInNowStatusLog,
    tblMoveInNowStatusLog => tblMoveInNowStatusLog.intMoveInNowStatusLogMoveInNow,
    { onDelete: 'CASCADE' }
  )
  tblMoveInNowStatusLogs: tblMoveInNowStatusLog[];

  @OneToMany(
    type => tblMoveInNowWMLot,
    tblMoveInNowWMLot => tblMoveInNowWMLot.intMoveInNowWmLotMoveInNow,
    { onDelete: 'CASCADE' }
  )
  tblMoveInNowWmLots: tblMoveInNowWMLot[];

  @OneToMany(
    type => tblMyTimeAcceptTerms,
    tblMyTimeAcceptTerms => tblMyTimeAcceptTerms.intMyTimeAcceptTermsMoveInNow,
    { onDelete: 'CASCADE' }
  )
  tblMyTimeAcceptTermss: tblMyTimeAcceptTerms[];
}
