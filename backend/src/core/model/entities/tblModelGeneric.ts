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

@Entity('tblModelGeneric', { schema: 'public' })
export class tblModelGeneric {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intModelGenericID'
  })
  intModelGenericID: string;

  @Column('integer', {
    nullable: true,
    name: 'id'
  })
  id: number | null;

  @Column('text', {
    nullable: true,
    name: 'varModelGenericName'
  })
  varModelGenericName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varModelGenericHomeType'
  })
  varModelGenericHomeType: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericInteractiveFloorPlanID'
  })
  intModelGenericInteractiveFloorPlanID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varModelGenericFloorplanPDF'
  })
  varModelGenericFloorplanPDF: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericBedsMin'
  })
  intModelGenericBedsMin: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericBedsMax'
  })
  intModelGenericBedsMax: number | null;

  @Column('text', {
    nullable: true,
    name: 'varModelGenericMasterBedroomLocation'
  })
  varModelGenericMasterBedroomLocation: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericBathsFullMin'
  })
  intModelGenericBathsFullMin: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericBathsFullMax'
  })
  intModelGenericBathsFullMax: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericBathsHalfMin'
  })
  intModelGenericBathsHalfMin: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericBathsHalfMax'
  })
  intModelGenericBathsHalfMax: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericSqFtMin'
  })
  intModelGenericSqFtMin: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericSqFtMax'
  })
  intModelGenericSqFtMax: number | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bModelGenericLALivingRoom'
  })
  bModelGenericLALivingRoom: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bModelGenericLADiningRoom'
  })
  bModelGenericLADiningRoom: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bModelGenericLAFamilyRoom'
  })
  bModelGenericLAFamilyRoom: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bModelGenericLASunRoom'
  })
  bModelGenericLASunRoom: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bModelGenericLAStudy'
  })
  bModelGenericLAStudy: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bModelGenericLALoft'
  })
  bModelGenericLALoft: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bModelGenericLAOffice'
  })
  bModelGenericLAOffice: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bModelGenericLAGameRoom'
  })
  bModelGenericLAGameRoom: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bModelGenericLAMediaRoom'
  })
  bModelGenericLAMediaRoom: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bModelGenericLAGuestRoom'
  })
  bModelGenericLAGuestRoom: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bModelGenericLABonusRoom'
  })
  bModelGenericLABonusRoom: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericStories'
  })
  intModelGenericStories: number | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bModelGenericHasBasement'
  })
  bModelGenericHasBasement: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericGarageSpacesMin'
  })
  intModelGenericGarageSpacesMin: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intModelGenericGarageSpacesMax'
  })
  intModelGenericGarageSpacesMax: number | null;

  @Column('text', {
    nullable: true,
    default: () => "'NA'",
    name: 'varModelGenericGarageEntry'
  })
  varModelGenericGarageEntry: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'NA'",
    name: 'varModelGenericGarageDetached'
  })
  varModelGenericGarageDetached: string | null;

  @Column('numeric', {
    nullable: true,
    default: () => "'0'",
    name: 'curModelGenericPriceBase'
  })
  curModelGenericPriceBase: string | null;

  @Column('text', {
    nullable: true,
    name: 'varModelGenericMarketingHeadline'
  })
  varModelGenericMarketingHeadline: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtModelGenericMarketingFeatures'
  })
  txtModelGenericMarketingFeatures: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtModelGenericMarketingDescription'
  })
  txtModelGenericMarketingDescription: string | null;

  @Column('text', {
    nullable: true,
    name: 'varModelGenericMarketingVideoTourURL'
  })
  varModelGenericMarketingVideoTourURL: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'Active'",
    name: 'varModelGenericStatus'
  })
  varModelGenericStatus: string | null;

  @Column('text', {
    nullable: true,
    name: 'seo_name'
  })
  seo_name: string | null;

  @Column('double precision', {
    nullable: true,
    precision: 53,
    name: 'baths_low'
  })
  baths_low: number | null;

  @Column('double precision', {
    nullable: true,
    precision: 53,
    name: 'baths_high'
  })
  baths_high: number | null;

  @Column('text', {
    nullable: true,
    name: 'floorplan_filename'
  })
  floorplan_filename: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'syndicate'
  })
  syndicate: boolean | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteModelGenericCreatedDate'
  })
  dteModelGenericCreatedDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteModelGenericModifiedDate'
  })
  dteModelGenericModifiedDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varModelGenericVersion'
  })
  varModelGenericVersion: string | null;

  @Column('text', {
    nullable: true,
    name: 'varLivingAreaList'
  })
  varLivingAreaList: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bModelGenericDisplayOnSite'
  })
  bModelGenericDisplayOnSite: boolean;

  @OneToMany(
    type => tblHomeEstimate,
    tblHomeEstimate => tblHomeEstimate.intHomeEstimateModelGeneric,
    { onDelete: 'SET NULL' }
  )
  tblHomeEstimates: tblHomeEstimate[];
}
