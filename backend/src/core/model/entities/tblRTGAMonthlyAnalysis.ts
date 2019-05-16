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

@Entity('tblRTGAMonthlyAnalysis', { schema: 'public' })
export class tblRTGAMonthlyAnalysis {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTGAMonthlyAnalysisID'
  })
  intRTGAMonthlyAnalysisID: string;

  @ManyToOne(type => tblRTCampaign, tblRTCampaign => tblRTCampaign.tblRtgaMonthlyAnalysiss, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTGAMonthlyAnalysisRTCampaignID' })
  intRtgaMonthlyAnalysisRtCampaign: tblRTCampaign | null;

  @Column('integer', {
    nullable: false,
    name: 'intRTGAMonthlyAnalysisMonthYear'
  })
  intRTGAMonthlyAnalysisMonthYear: number;

  @Column('text', {
    nullable: true,
    name: 'varRTGAMonthlyAnalysisOverview'
  })
  varRTGAMonthlyAnalysisOverview: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTGAMonthlyAnalysisConclusion'
  })
  varRTGAMonthlyAnalysisConclusion: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varRTGAMonthlyAnalysisStatus'
  })
  varRTGAMonthlyAnalysisStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGAMonthlyAnalysisCreatedDate'
  })
  dteRTGAMonthlyAnalysisCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGAMonthlyAnalysisModifiedDate'
  })
  dteRTGAMonthlyAnalysisModifiedDate: Date;
}
