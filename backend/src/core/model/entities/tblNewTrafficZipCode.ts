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

@Entity('tblNewTrafficZipCode', { schema: 'public' })
export class tblNewTrafficZipCode {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'lngNewTrafficZipCodeID'
  })
  lngNewTrafficZipCodeID: string;

  @ManyToOne(type => tblTrafficReport, tblTrafficReport => tblTrafficReport.tblNewTrafficZipCodes, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'lngTrafficReportID' })
  lngTrafficReport: tblTrafficReport | null;

  @Column('text', {
    nullable: true,
    name: 'txtNewTrafficZipCodeCity'
  })
  txtNewTrafficZipCodeCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtNewTrafficZipCodeZip'
  })
  txtNewTrafficZipCodeZip: string | null;

  @Column('integer', {
    nullable: true,
    name: 'lngNewTrafficZipCodeCount'
  })
  lngNewTrafficZipCodeCount: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngNewTrafficZipID'
  })
  lngNewTrafficZipID: number | null;
}
