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

@Entity('tblEDYearlyDashboard', { schema: 'public' })
export class tblEDYearlyDashboard {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intEDYearlyDashboardID'
  })
  intEDYearlyDashboardID: string;

  @ManyToOne(type => tblCommunity, tblCommunity => tblCommunity.tblEdYearlyDashboards, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intEDYearlyDashboardCommunityID' })
  intEdYearlyDashboardCommunity: tblCommunity | null;

  @Column('integer', {
    nullable: false,
    name: 'intEDYearlyDashboardYear'
  })
  intEDYearlyDashboardYear: number;

  @Column('integer', {
    nullable: false,
    name: 'intEDYearlyDashboardAverageBuildingDays'
  })
  intEDYearlyDashboardAverageBuildingDays: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteEDYearlyDashboardCreatedDate'
  })
  dteEDYearlyDashboardCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteEDYearlyDashboardModifiedDate'
  })
  dteEDYearlyDashboardModifiedDate: Date;
}
