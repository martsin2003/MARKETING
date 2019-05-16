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
import { tblNewTrafficSource } from './tblNewTrafficSource';
import { tblNewTrafficZipCode } from './tblNewTrafficZipCode';
import { tblSettlement } from './tblSettlement';
import { tblTopProspect } from './tblTopProspect';
import { tblTopRealtor } from './tblTopRealtor';

@Entity('tblTrafficReport', { schema: 'public' })
export class tblTrafficReport {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'lngTrafficReportID'
  })
  lngTrafficReportID: string;

  @Column('integer', {
    nullable: true,
    name: 'lngReportDate'
  })
  lngReportDate: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intCommunityID'
  })
  intCommunityID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intHomeTypeID'
  })
  intHomeTypeID: number | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bArchive'
  })
  bArchive: boolean;

  @Column('text', {
    nullable: true,
    name: 'txtSalesRep'
  })
  txtSalesRep: string | null;

  @Column('integer', {
    nullable: true,
    name: 'lngSalesRepID'
  })
  lngSalesRepID: number | null;

  @Column('text', {
    nullable: true,
    name: 'txtSalesStatus'
  })
  txtSalesStatus: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtSettlementStatus'
  })
  txtSettlementStatus: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intGrpCommunityID'
  })
  intGrpCommunityID: number | null;

  @Column('text', {
    nullable: true,
    default: () => "'In Progress'",
    name: 'varTrafficReportStatus'
  })
  varTrafficReportStatus: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteTrafficReportModified'
  })
  dteTrafficReportModified: Date | null;

  @OneToMany(
    type => tblNewTrafficSource,
    tblNewTrafficSource => tblNewTrafficSource.lngTrafficReport,
    { onDelete: 'CASCADE' }
  )
  tblNewTrafficSources: tblNewTrafficSource[];

  @OneToMany(
    type => tblNewTrafficZipCode,
    tblNewTrafficZipCode => tblNewTrafficZipCode.lngTrafficReport,
    { onDelete: 'CASCADE' }
  )
  tblNewTrafficZipCodes: tblNewTrafficZipCode[];

  @OneToMany(type => tblSettlement, tblSettlement => tblSettlement.lngTrafficReport, {
    onDelete: 'CASCADE'
  })
  tblSettlements: tblSettlement[];

  @OneToMany(type => tblTopProspect, tblTopProspect => tblTopProspect.lngTrafficReport, {
    onDelete: 'CASCADE'
  })
  tblTopProspects: tblTopProspect[];

  @OneToMany(type => tblTopRealtor, tblTopRealtor => tblTopRealtor.lngTrafficReport, {
    onDelete: 'CASCADE'
  })
  tblTopRealtors: tblTopRealtor[];
}
