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
import { tblRTGAGoal } from './tblRTGAGoal';
import { tblRTMediaSource } from './tblRTMediaSource';

@Entity('tblRTDisplayNonAPIGoalData', { schema: 'public' })
@Index('idx_19865_IX2_tblRTDsiplayNonAPIGoalData', [
  'dteRTDisplayNonAPIGoalDataDate',
  'intRTDisplayNonAPIGoalDataRTCampaignID',
  'intRtDisplayNonApiGoalDataRtgaGoal',
  'intRtDisplayNonApiGoalDataRtMediaSource',
  'intRTDisplayNonAPIGoalDataValue'
])
@Index(
  'idx_19865_IX_tblRTDisplayNonAPIGoalData',
  [
    'dteRTDisplayNonAPIGoalDataDate',
    'intRTDisplayNonAPIGoalDataRTCampaignID',
    'intRtDisplayNonApiGoalDataRtgaGoal',
    'intRtDisplayNonApiGoalDataRtMediaSource',
    'intRTDisplayNonAPIGoalDataValue'
  ],
  { unique: true }
)
export class tblRTDisplayNonAPIGoalData {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTDisplayNonAPIGoalDataID'
  })
  intRTDisplayNonAPIGoalDataID: string;

  @ManyToOne(type => tblRTGAGoal, tblRTGAGoal => tblRTGAGoal.tblRtDisplayNonApiGoalDatas, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTDisplayNonAPIGoalDataRTGAGoalID' })
  intRtDisplayNonApiGoalDataRtgaGoal: tblRTGAGoal | null;

  @ManyToOne(
    type => tblRTMediaSource,
    tblRTMediaSource => tblRTMediaSource.tblRtDisplayNonApiGoalDatas,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTDisplayNonAPIGoalDataRTMediaSourceID' })
  intRtDisplayNonApiGoalDataRtMediaSource: tblRTMediaSource | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayNonAPIGoalDataDate'
  })
  dteRTDisplayNonAPIGoalDataDate: Date;

  @Column('integer', {
    nullable: false,
    name: 'intRTDisplayNonAPIGoalDataValue'
  })
  intRTDisplayNonAPIGoalDataValue: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayNonAPIGoalDataCreatedDate'
  })
  dteRTDisplayNonAPIGoalDataCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayNonAPIGoalDataModifiedDate'
  })
  dteRTDisplayNonAPIGoalDataModifiedDate: Date;

  @Column('integer', {
    nullable: false,
    name: 'intRTDisplayNonAPIGoalDataRTCampaignID'
  })
  intRTDisplayNonAPIGoalDataRTCampaignID: number;
}
