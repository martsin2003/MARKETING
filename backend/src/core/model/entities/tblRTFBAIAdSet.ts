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
import { tblRTFBAIAd } from './tblRTFBAIAd';

@Entity('tblRTFBAIAdSet', { schema: 'public' })
@Index(
  'idx_19992_IX_tblRTFBAIAdSet',
  [
    'dteRTFBAIAdSetEndDate',
    'dteRTFBAIAdSetStartDate',
    'intRTFBAIAdSetFBAdSetID',
    'intRtfbaiAdSetRtCampaign'
  ],
  { unique: true }
)
export class tblRTFBAIAdSet {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTFBAIAdSetID'
  })
  intRTFBAIAdSetID: string;

  @ManyToOne(type => tblRTCampaign, tblRTCampaign => tblRTCampaign.tblRtfbaiAdSets, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTFBAIAdSetRTCampaignID' })
  intRtfbaiAdSetRtCampaign: tblRTCampaign | null;

  @Column('bigint', {
    nullable: false,
    name: 'intRTFBAIAdSetFBAdSetID'
  })
  intRTFBAIAdSetFBAdSetID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTFBAIAdSetName'
  })
  varRTFBAIAdSetName: string;

  @Column('text', {
    nullable: false,
    name: 'varRTFBAIAdSetOptimizationGoal'
  })
  varRTFBAIAdSetOptimizationGoal: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varRTFBAIAdSetStatus'
  })
  varRTFBAIAdSetStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBAIAdSetStartDate'
  })
  dteRTFBAIAdSetStartDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBAIAdSetEndDate'
  })
  dteRTFBAIAdSetEndDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBAIAdSetCreatedDate'
  })
  dteRTFBAIAdSetCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTFBAIAdSetModifiedDate'
  })
  dteRTFBAIAdSetModifiedDate: Date;

  @OneToMany(type => tblRTFBAIAd, tblRTFBAIAd => tblRTFBAIAd.intRtfbaiAdRtfbaiAdSet, {
    onDelete: 'CASCADE'
  })
  tblRtfbaiAds: tblRTFBAIAd[];
}
