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

@Entity('tblRTAnalysis', { schema: 'public' })
export class tblRTAnalysis {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTAnalysisID'
  })
  intRTAnalysisID: string;

  @Column('text', {
    nullable: false,
    default: () => "'M'",
    name: 'varRTAnalysisPeriod'
  })
  varRTAnalysisPeriod: string;

  @Column('integer', {
    nullable: false,
    name: 'intRTAnalysisYear'
  })
  intRTAnalysisYear: number;

  @Column('integer', {
    nullable: false,
    name: 'intRTAnalysisMonth'
  })
  intRTAnalysisMonth: number;

  @Column('text', {
    nullable: true,
    name: 'varRTAnalysisOverview'
  })
  varRTAnalysisOverview: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTAnalysisConclusion'
  })
  varRTAnalysisConclusion: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varRTAnalysisStatus'
  })
  varRTAnalysisStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTAnalysisCreatedDate'
  })
  dteRTAnalysisCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTAnalysisModifiedDate'
  })
  dteRTAnalysisModifiedDate: Date;

  @Column('text', {
    nullable: false,
    name: 'varRTAnalysisFuseaction'
  })
  varRTAnalysisFuseaction: string;
}
