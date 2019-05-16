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
import { tblTrafficReport } from './tblTrafficReport';

@Entity('tblTopProspect', { schema: 'public' })
export class tblTopProspect {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'lngTopProspectID'
  })
  lngTopProspectID: string;

  @ManyToOne(type => tblTrafficReport, tblTrafficReport => tblTrafficReport.tblTopProspects, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'lngTrafficReportID' })
  lngTrafficReport: tblTrafficReport | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopProspectLastName'
  })
  txtTopProspectLastName: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopProspectFirstName'
  })
  txtTopProspectFirstName: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopProspectPhone'
  })
  txtTopProspectPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopProspectEmail'
  })
  txtTopProspectEmail: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopProspectContNonCont'
  })
  txtTopProspectContNonCont: string | null;

  @Column('text', {
    nullable: true,
    name: 'memTopProspectStatus'
  })
  memTopProspectStatus: string | null;

  @Column('integer', {
    nullable: true,
    name: 'lngTopProspectCnt'
  })
  lngTopProspectCnt: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intTopProspectOrder'
  })
  intTopProspectOrder: number | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopProspectAddress1'
  })
  txtTopProspectAddress1: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopProspectAddress2'
  })
  txtTopProspectAddress2: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intTopProspectHomeTypeID'
  })
  intTopProspectHomeTypeID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intTopProspectModelID'
  })
  intTopProspectModelID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varTopProspectContactLevel'
  })
  varTopProspectContactLevel: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intTopProspectContactID'
  })
  intTopProspectContactID: number | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteTopProspectContract'
  })
  dteTopProspectContract: Date | null;

  @Column('integer', {
    nullable: true,
    name: 'intTopProspectContactLeadTypeID'
  })
  intTopProspectContactLeadTypeID: number | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopProspectLot'
  })
  txtTopProspectLot: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopProspectSource'
  })
  txtTopProspectSource: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopProspectHomeForSale'
  })
  txtTopProspectHomeForSale: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopProspectHold'
  })
  txtTopProspectHold: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopProspectModelName'
  })
  txtTopProspectModelName: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopProspectHomeType'
  })
  txtTopProspectHomeType: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopProspectRealtor'
  })
  txtTopProspectRealtor: string | null;
}
