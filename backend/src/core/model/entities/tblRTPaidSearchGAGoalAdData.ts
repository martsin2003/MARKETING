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
import { tblRTPaidSearchAd } from './tblRTPaidSearchAd';
import { tblRTGAGoal } from './tblRTGAGoal';

@Entity('tblRTPaidSearchGAGoalAdData', { schema: 'public' })
@Index(
  'idx_20323_IX_tblRTPaidSearchGAGoalAdData',
  [
    'dteRTPaidSearchGAGoalAdDataDate',
    'intRtPaidSearchGaGoalAdDataRtgaGoal',
    'intRtPaidSearchGaGoalAdDataRtPaidSearchAd',
    'intRTPaidSearchGAGoalAdDataValue'
  ],
  { unique: true }
)
@Index('idx_20323_IX2_tblRTPaidSearchGAGoalAdData', [
  'dteRTPaidSearchGAGoalAdDataDate',
  'intRTPaidSearchGAGoalAdDataID',
  'intRtPaidSearchGaGoalAdDataRtgaGoal',
  'intRtPaidSearchGaGoalAdDataRtPaidSearchAd',
  'intRTPaidSearchGAGoalAdDataValue'
])
export class tblRTPaidSearchGAGoalAdData {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTPaidSearchGAGoalAdDataID'
  })
  intRTPaidSearchGAGoalAdDataID: string;

  @ManyToOne(
    type => tblRTPaidSearchAd,
    tblRTPaidSearchAd => tblRTPaidSearchAd.tblRtPaidSearchGaGoalAdDatas,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTPaidSearchGAGoalAdDataRTPaidSearchAdID' })
  intRtPaidSearchGaGoalAdDataRtPaidSearchAd: tblRTPaidSearchAd | null;

  @ManyToOne(type => tblRTGAGoal, tblRTGAGoal => tblRTGAGoal.tblRtPaidSearchGaGoalAdDatas, {
    nullable: false
  })
  @JoinColumn({ name: 'intRTPaidSearchGAGoalAdDataRTGAGoalID' })
  intRtPaidSearchGaGoalAdDataRtgaGoal: tblRTGAGoal | null;

  @Column('integer', {
    nullable: false,
    name: 'intRTPaidSearchGAGoalAdDataValue'
  })
  intRTPaidSearchGAGoalAdDataValue: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchGAGoalAdDataDate'
  })
  dteRTPaidSearchGAGoalAdDataDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchGAGoalAdDataCreatedDate'
  })
  dteRTPaidSearchGAGoalAdDataCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchGAGoalAdDataModifiedDate'
  })
  dteRTPaidSearchGAGoalAdDataModifiedDate: Date;
}
