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

@Entity('tblRTGAGoalLabeledData', { schema: 'public' })
export class tblRTGAGoalLabeledData {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTGAGoalLabeledDataID'
  })
  intRTGAGoalLabeledDataID: string;

  @ManyToOne(type => tblRTGAGoal, tblRTGAGoal => tblRTGAGoal.tblRtgaGoalLabeledDatas, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intRTGAGoalLabeledDataRTGAGoalID' })
  intRtgaGoalLabeledDataRtgaGoal: tblRTGAGoal | null;

  @Column('text', {
    nullable: false,
    name: 'varRTGAGoalLabeledDataDimension'
  })
  varRTGAGoalLabeledDataDimension: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGAGoalLabeledDataDate'
  })
  dteRTGAGoalLabeledDataDate: Date;

  @Column('bigint', {
    nullable: false,
    default: () => "'0'",
    name: 'intRTGAGoalLabeledDataValue'
  })
  intRTGAGoalLabeledDataValue: string;

  @Column('text', {
    nullable: false,
    name: 'varRTGAGoalLabeledDataLabel'
  })
  varRTGAGoalLabeledDataLabel: string;

  @Column('integer', {
    nullable: false,
    name: 'intRTGAGoalLabeledDataOrder'
  })
  intRTGAGoalLabeledDataOrder: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGAGoalLabeledDataCreatedDate'
  })
  dteRTGAGoalLabeledDataCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGAGoalLabeledDataModifiedDate'
  })
  dteRTGAGoalLabeledDataModifiedDate: Date;
}
