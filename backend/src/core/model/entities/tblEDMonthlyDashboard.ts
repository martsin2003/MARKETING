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
import { tblCommunity } from './tblCommunity';

@Entity('tblEDMonthlyDashboard', { schema: 'public' })
export class tblEDMonthlyDashboard {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intEDMonthlyDashboardID'
  })
  intEDMonthlyDashboardID: string;

  @ManyToOne(type => tblCommunity, tblCommunity => tblCommunity.tblEdMonthlyDashboards, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intEDMonthlyDashboardCommunityID' })
  intEdMonthlyDashboardCommunity: tblCommunity | null;

  @Column('integer', {
    nullable: false,
    name: 'intEDMonthlyDashboardMonth'
  })
  intEDMonthlyDashboardMonth: number;

  @Column('integer', {
    nullable: false,
    name: 'intEDMonthlyDashboardYear'
  })
  intEDMonthlyDashboardYear: number;

  @Column('integer', {
    nullable: false,
    name: 'intEDMonthlyDashboardForecastClosings'
  })
  intEDMonthlyDashboardForecastClosings: number;

  @Column('integer', {
    nullable: false,
    name: 'intEDMonthlyDashboardForecastNetSales'
  })
  intEDMonthlyDashboardForecastNetSales: number;

  @Column('integer', {
    nullable: false,
    name: 'intEDMonthlyDashboardForecastSiteCosts'
  })
  intEDMonthlyDashboardForecastSiteCosts: number;

  @Column('integer', {
    nullable: false,
    name: 'intEDMonthlyDashboardActualClosings'
  })
  intEDMonthlyDashboardActualClosings: number;

  @Column('integer', {
    nullable: false,
    name: 'intEDMonthlyDashboardActualNetSales'
  })
  intEDMonthlyDashboardActualNetSales: number;

  @Column('integer', {
    nullable: false,
    name: 'intEDMonthlyDashboardActualSiteCosts'
  })
  intEDMonthlyDashboardActualSiteCosts: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteEDMonthlyDashboardCreatedDate'
  })
  dteEDMonthlyDashboardCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteEDMonthlyDashboardModifiedDate'
  })
  dteEDMonthlyDashboardModifiedDate: Date;
}
