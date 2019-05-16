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
import { tblWMRecipient } from './tblWMRecipient';
import { tblWMReport } from './tblWMReport';

@Entity('tblWMDistribution', { schema: 'public' })
export class tblWMDistribution {
  @ManyToOne(type => tblWMRecipient, tblWMRecipient => tblWMRecipient.tblWmDistributions, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intWMDistributionWMRecipientID' })
  intWmDistributionWmRecipient: tblWMRecipient | null;

  @ManyToOne(type => tblWMReport, tblWMReport => tblWMReport.tblWmDistributions, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intWMDistributionWMReportID' })
  intWmDistributionWmReport: tblWMReport | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMDistributionCreatedDate'
  })
  dteWMDistributionCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMDistributionModifiedDate'
  })
  dteWMDistributionModifiedDate: Date;
}
