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
import { tblRTDisplayAd } from './tblRTDisplayAd';
import { tblRTGAGoal } from './tblRTGAGoal';

@Entity('tblRTDisplayGAGoalAdData', { schema: 'public' })
@Index(
  'idx_19782_IX_tblRTDisplayGAGoalAdData',
  [
    'dteRTDisplayGAGoalAdDataDate',
    'intRtDisplayGaGoalAdDataRtDisplayAd',
    'intRtDisplayGaGoalAdDataRtgaGoal',
    'intRTDisplayGAGoalAdDataValue'
  ],
  { unique: true }
)
@Index('idx_19782_IX2_tblRTDisplayGAGoalAdData', [
  'dteRTDisplayGAGoalAdDataDate',
  'intRTDisplayGAGoalAdDataID',
  'intRtDisplayGaGoalAdDataRtDisplayAd',
  'intRtDisplayGaGoalAdDataRtgaGoal',
  'intRTDisplayGAGoalAdDataValue'
])
export class tblRTDisplayGAGoalAdData {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTDisplayGAGoalAdDataID'
  })
  intRTDisplayGAGoalAdDataID: string;

  @ManyToOne(type => tblRTDisplayAd, tblRTDisplayAd => tblRTDisplayAd.tblRtDisplayGaGoalAdDatas, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTDisplayGAGoalAdDataRTDisplayAdID' })
  intRtDisplayGaGoalAdDataRtDisplayAd: tblRTDisplayAd | null;

  @ManyToOne(type => tblRTGAGoal, tblRTGAGoal => tblRTGAGoal.tblRtDisplayGaGoalAdDatas, {
    nullable: false
  })
  @JoinColumn({ name: 'intRTDisplayGAGoalAdDataRTGAGoalID' })
  intRtDisplayGaGoalAdDataRtgaGoal: tblRTGAGoal | null;

  @Column('integer', {
    nullable: false,
    name: 'intRTDisplayGAGoalAdDataValue'
  })
  intRTDisplayGAGoalAdDataValue: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayGAGoalAdDataDate'
  })
  dteRTDisplayGAGoalAdDataDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayGAGoalAdDataCreatedDate'
  })
  dteRTDisplayGAGoalAdDataCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayGAGoalAdDataModifiedDate'
  })
  dteRTDisplayGAGoalAdDataModifiedDate: Date;
}
