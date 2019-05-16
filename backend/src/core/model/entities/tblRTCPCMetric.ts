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
import { tblRTCampaign } from './tblRTCampaign';

@Entity('tblRTCPCMetric', { schema: 'public' })
export class tblRTCPCMetric {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTCPCMetricID'
  })
  intRTCPCMetricID: string;

  @Column('integer', {
    nullable: true,
    name: 'intRTCPCMetricNameID'
  })
  intRTCPCMetricNameID: number | null;

  @ManyToOne(type => tblRTCampaign, tblRTCampaign => tblRTCampaign.tblRtcpcMetrics, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTCPCMetricCampaignID' })
  intRtcpcMetricCampaign: tblRTCampaign | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCPCMetricJan'
  })
  varRTCPCMetricJan: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCPCMetricFeb'
  })
  varRTCPCMetricFeb: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCPCMetricMar'
  })
  varRTCPCMetricMar: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCPCMetricApr'
  })
  varRTCPCMetricApr: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCPCMetricMay'
  })
  varRTCPCMetricMay: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCPCMetricJun'
  })
  varRTCPCMetricJun: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCPCMetricJul'
  })
  varRTCPCMetricJul: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCPCMetricAug'
  })
  varRTCPCMetricAug: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCPCMetricSep'
  })
  varRTCPCMetricSep: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCPCMetricOct'
  })
  varRTCPCMetricOct: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCPCMetricNov'
  })
  varRTCPCMetricNov: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTCPCMetricDec'
  })
  varRTCPCMetricDec: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTCPCMetricCreatedDate'
  })
  dteRTCPCMetricCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTCPCMetricModifiedDate'
  })
  dteRTCPCMetricModifiedDate: Date;
}
