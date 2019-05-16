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
import { tblRTAdvertisingSource } from './tblRTAdvertisingSource';
import { tblRTAdvertisingMedium } from './tblRTAdvertisingMedium';

@Entity('tblRTCampaignUTM', { schema: 'public' })
@Index(
  'idx_19622_IX_Medium_tblRTCampaignUTM',
  [
    'dteRTCampaignUTMCreatedDate',
    'dteRTCampaignUTMModifiedDate',
    'intRtCampaignUtmrtAdvertisingMedium',
    'intRtCampaignUtmrtAdvertisingSource',
    'intRtCampaignUtmrtCampaign'
  ],
  { unique: true }
)
@Index(
  'idx_19622_IX_Source_tblRTCampaignUTM',
  [
    'dteRTCampaignUTMCreatedDate',
    'dteRTCampaignUTMModifiedDate',
    'intRtCampaignUtmrtAdvertisingMedium',
    'intRtCampaignUtmrtAdvertisingSource',
    'intRtCampaignUtmrtCampaign'
  ],
  { unique: true }
)
@Index(
  'idx_19622_IX_Campaign_tblRTCampaignUTM',
  [
    'dteRTCampaignUTMCreatedDate',
    'dteRTCampaignUTMModifiedDate',
    'intRtCampaignUtmrtAdvertisingMedium',
    'intRtCampaignUtmrtAdvertisingSource',
    'intRtCampaignUtmrtCampaign'
  ],
  { unique: true }
)
export class tblRTCampaignUTM {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTCampaignUTMID'
  })
  intRTCampaignUTMID: string;

  @ManyToOne(type => tblRTCampaign, tblRTCampaign => tblRTCampaign.tblRtCampaignUtms, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTCampaignUTMRTCampaignID' })
  intRtCampaignUtmrtCampaign: tblRTCampaign | null;

  @ManyToOne(
    type => tblRTAdvertisingSource,
    tblRTAdvertisingSource => tblRTAdvertisingSource.tblRtCampaignUtms,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTCampaignUTMRTAdvertisingSourceID' })
  intRtCampaignUtmrtAdvertisingSource: tblRTAdvertisingSource | null;

  @ManyToOne(
    type => tblRTAdvertisingMedium,
    tblRTAdvertisingMedium => tblRTAdvertisingMedium.tblRtCampaignUtms,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTCampaignUTMRTAdvertisingMediumID' })
  intRtCampaignUtmrtAdvertisingMedium: tblRTAdvertisingMedium | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTCampaignUTMCreatedDate'
  })
  dteRTCampaignUTMCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTCampaignUTMModifiedDate'
  })
  dteRTCampaignUTMModifiedDate: Date;
}
