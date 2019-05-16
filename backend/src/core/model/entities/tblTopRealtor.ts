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

@Entity('tblTopRealtor', { schema: 'public' })
export class tblTopRealtor {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'lngTopRealtorID'
  })
  lngTopRealtorID: string;

  @ManyToOne(type => tblTrafficReport, tblTrafficReport => tblTrafficReport.tblTopRealtors, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'lngTrafficReportID' })
  lngTrafficReport: tblTrafficReport | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopRealtorLastName'
  })
  txtTopRealtorLastName: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopRealtorFirstName'
  })
  txtTopRealtorFirstName: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopRealtorPhone'
  })
  txtTopRealtorPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopRealtorEmail'
  })
  txtTopRealtorEmail: string | null;

  @Column('integer', {
    nullable: true,
    name: 'lngTopRealtorCnt'
  })
  lngTopRealtorCnt: number | null;

  @Column('text', {
    nullable: true,
    name: 'txtTopRealtorAffiliation'
  })
  txtTopRealtorAffiliation: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intTopRealtorRealtorID'
  })
  intTopRealtorRealtorID: number | null;
}
