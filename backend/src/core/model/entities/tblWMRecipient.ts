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
import { tblWMDistribution } from './tblWMDistribution';

@Entity('tblWMRecipient', { schema: 'public' })
@Index(
  'idx_20872_IX_tblWMRecipient',
  [
    'lngUserID',
    'varWMRecipientEmail',
    'varWMRecipientFName',
    'varWMRecipientLName',
    'varWMRecipientStatus'
  ],
  { unique: true }
)
export class tblWMRecipient {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intWMRecipientID'
  })
  intWMRecipientID: string;

  @Column('text', {
    nullable: false,
    name: 'varWMRecipientFName'
  })
  varWMRecipientFName: string;

  @Column('text', {
    nullable: false,
    name: 'varWMRecipientLName'
  })
  varWMRecipientLName: string;

  @Column('text', {
    nullable: false,
    name: 'varWMRecipientEmail'
  })
  varWMRecipientEmail: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varWMRecipientStatus'
  })
  varWMRecipientStatus: string;

  @Column('integer', {
    nullable: true,
    name: 'lngUserID'
  })
  lngUserID: number | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMRecipientCreatedDate'
  })
  dteWMRecipientCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMRecipientModifiedDate'
  })
  dteWMRecipientModifiedDate: Date;

  @OneToMany(
    type => tblWMDistribution,
    tblWMDistribution => tblWMDistribution.intWmDistributionWmRecipient,
    { onDelete: 'CASCADE' }
  )
  tblWmDistributions: tblWMDistribution[];
}
