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

@Entity('tblRTFBIMonthlyAnalysis', { schema: 'public' })
export class tblRTFBIMonthlyAnalysis {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTFBIMonthlyAnalysisID'
  })
  intRTFBIMonthlyAnalysisID: string;

  @ManyToOne(type => tblRTCampaign, tblRTCampaign => tblRTCampaign.tblRtfbiMonthlyAnalysiss, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTFBIMonthlyAnalysisRTCampaignID' })
  intRtfbiMonthlyAnalysisRtCampaign: tblRTCampaign | null;

  @Column('integer', {
    nullable: false,
    name: 'intRTFBIMonthlyAnalysisMonthYear'
  })
  intRTFBIMonthlyAnalysisMonthYear: number;

  @Column('text', {
    nullable: true,
    name: 'varRTFBIMonthlyAnalysisOverview'
  })
  varRTFBIMonthlyAnalysisOverview: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTFBIMonthlyAnalysisConclusion'
  })
  varRTFBIMonthlyAnalysisConclusion: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBIMonthlyAnalysisCreatedDate'
  })
  dteRTFBIMonthlyAnalysisCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBIMonthlyAnalysisModifiedDate'
  })
  dteRTFBIMonthlyAnalysisModifiedDate: Date;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varRTFBIMonthlyAnalysisStatus'
  })
  varRTFBIMonthlyAnalysisStatus: string;
}
