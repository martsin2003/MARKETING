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
import { tblWMReportDistribution } from './tblWMReportDistribution';

@Entity('tblWMDistributionRecipient', { schema: 'public' })
@Index(
  'idx_20838_IX_tblWMDistributionRecipient',
  [
    'intWMDistributionRecipientID',
    'varWMDistributionRecipientEmailAddress',
    'varWMDistributionRecipientName',
    'varWMDistributionRecipientStatus'
  ],
  { unique: true }
)
export class tblWMDistributionRecipient {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intWMDistributionRecipientID'
  })
  intWMDistributionRecipientID: string;

  @Column('text', {
    nullable: false,
    name: 'varWMDistributionRecipientName'
  })
  varWMDistributionRecipientName: string;

  @Column('text', {
    nullable: false,
    name: 'varWMDistributionRecipientEmailAddress'
  })
  varWMDistributionRecipientEmailAddress: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varWMDistributionRecipientStatus'
  })
  varWMDistributionRecipientStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMDistributionRecipientCreatedDate'
  })
  dteWMDistributionRecipientCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMDistributionRecipientModifiedDate'
  })
  dteWMDistributionRecipientModifiedDate: Date;

  @OneToMany(
    type => tblWMReportDistribution,
    tblWMReportDistribution =>
      tblWMReportDistribution.intWmReportDistributionWmDistributionRecipient,
    { onDelete: 'CASCADE' }
  )
  tblWmReportDistributions: tblWMReportDistribution[];
}
