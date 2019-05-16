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
import { tblWMProject } from './tblWMProject';
import { tblWMLot } from './tblWMLot';
import { tblWMSectionOutlyingLotMarking } from './tblWMSectionOutlyingLotMarking';

@Entity('tblWMSection', { schema: 'public' })
@Index(
  'idx_20916_IX_tblWMSection',
  ['intWMSectionID', 'intWmSectionWmProject', 'varWMSectionName', 'varWMSectionStatus'],
  { unique: true }
)
export class tblWMSection {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intWMSectionID'
  })
  intWMSectionID: string;

  @ManyToOne(type => tblWMProject, tblWMProject => tblWMProject.tblWmSections, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intWMSectionWMProjectID' })
  intWmSectionWmProject: tblWMProject | null;

  @Column('text', {
    nullable: false,
    name: 'varWMSectionName'
  })
  varWMSectionName: string;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'fltWMSectionCenterLatitude'
  })
  fltWMSectionCenterLatitude: number;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'fltWMSectionCenterLongitude'
  })
  fltWMSectionCenterLongitude: number;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'fltWMSectionNWLatitude'
  })
  fltWMSectionNWLatitude: number;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'fltWMSectionNWLongitude'
  })
  fltWMSectionNWLongitude: number;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'fltWMSectionNELatitude'
  })
  fltWMSectionNELatitude: number;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'fltWMSectionNELongitude'
  })
  fltWMSectionNELongitude: number;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'fltWMSectionSWLatitude'
  })
  fltWMSectionSWLatitude: number;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'fltWMSectionSWLongitude'
  })
  fltWMSectionSWLongitude: number;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'fltWMSectionSELatitude'
  })
  fltWMSectionSELatitude: number;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'fltWMSectionSELongitude'
  })
  fltWMSectionSELongitude: number;

  @Column('integer', {
    nullable: false,
    name: 'intWMSectionInitialZoom'
  })
  intWMSectionInitialZoom: number;

  @Column('double precision', {
    nullable: false,
    default: () => "'100'",
    precision: 53,
    name: 'fltWMSectionIconScale'
  })
  fltWMSectionIconScale: number;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varWMSectionStatus'
  })
  varWMSectionStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMSectionCreatedDate'
  })
  dteWMSectionCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMSectionModifiedDate'
  })
  dteWMSectionModifiedDate: Date;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteWMSectionEffectiveDate'
  })
  dteWMSectionEffectiveDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varWMSectionPavingLineJSON'
  })
  varWMSectionPavingLineJSON: string | null;

  @Column('text', {
    nullable: true,
    name: 'varWMSectionElectricLineJSON'
  })
  varWMSectionElectricLineJSON: string | null;

  @Column('text', {
    nullable: true,
    name: 'varWMSectionGasLineJSON'
  })
  varWMSectionGasLineJSON: string | null;

  @Column('integer', {
    nullable: false,
    name: 'intWMSectionOutlyingLotFontSize'
  })
  intWMSectionOutlyingLotFontSize: number;

  @Column('double precision', {
    nullable: false,
    default: () => "'2'",
    precision: 53,
    name: 'fltWMSectionZoomScaleFactor'
  })
  fltWMSectionZoomScaleFactor: number;

  @OneToMany(type => tblWMLot, tblWMLot => tblWMLot.intWmLotWmSection, { onDelete: 'CASCADE' })
  tblWmLots: tblWMLot[];

  @OneToMany(
    type => tblWMSectionOutlyingLotMarking,
    tblWMSectionOutlyingLotMarking =>
      tblWMSectionOutlyingLotMarking.intWmSectionOutlyingLotMarkingWmSection,
    { onDelete: 'CASCADE' }
  )
  tblWmSectionOutlyingLotMarkings: tblWMSectionOutlyingLotMarking[];
}
