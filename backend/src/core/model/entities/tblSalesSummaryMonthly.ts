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

@Entity('tblSalesSummaryMonthly', { schema: 'public' })
export class tblSalesSummaryMonthly {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'lngSalesSummaryID'
  })
  lngSalesSummaryID: string;

  @Column('integer', {
    nullable: true,
    name: 'lngReportDate'
  })
  lngReportDate: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngSalesSummaryCommunityID'
  })
  lngSalesSummaryCommunityID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngSalesSummaryYear'
  })
  lngSalesSummaryYear: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngSalesSummaryMonth'
  })
  lngSalesSummaryMonth: number | null;

  @Column('text', {
    nullable: true,
    name: 'varSalesSummaryDivision'
  })
  varSalesSummaryDivision: string | null;

  @Column('integer', {
    nullable: true,
    name: 'lngSalesSummarySalesDirt'
  })
  lngSalesSummarySalesDirt: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngSalesSummarySalesSpec'
  })
  lngSalesSummarySalesSpec: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngSalesSummaryCancels'
  })
  lngSalesSummaryCancels: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngSalesSummaryTraffic'
  })
  lngSalesSummaryTraffic: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngSalesSummaryRealtors'
  })
  lngSalesSummaryRealtors: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngSalesSummaryRealtorBeBacks'
  })
  lngSalesSummaryRealtorBeBacks: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngSalesSummarySalesTotal'
  })
  lngSalesSummarySalesTotal: number | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteSalesSummaryCreatedDate'
  })
  dteSalesSummaryCreatedDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteSalesSummaryModifiedDate'
  })
  dteSalesSummaryModifiedDate: Date | null;
}
