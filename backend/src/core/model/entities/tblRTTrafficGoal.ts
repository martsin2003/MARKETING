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
import { tblRTTrafficGoalCommunityGoal } from './tblRTTrafficGoalCommunityGoal';

@Entity('tblRTTrafficGoal', { schema: 'public' })
export class tblRTTrafficGoal {
  @PrimaryColumn('integer', {
    name: 'intRTTrafficGoalCommunityID'
  })
  intRTTrafficGoalCommunityID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intRTTrafficGoalYear'
  })
  intRTTrafficGoalYear: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intRTTrafficGoalRatio1'
  })
  intRTTrafficGoalRatio1: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intRTTrafficGoalRatio2'
  })
  intRTTrafficGoalRatio2: number | null;

  @Column('text', {
    nullable: true,
    default: () => "'Active'",
    name: 'varRTTrafficGoalStatus'
  })
  varRTTrafficGoalStatus: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteRTTrafficGoalCreatedDate'
  })
  dteRTTrafficGoalCreatedDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteRTTrafficGoalModifiedDate'
  })
  dteRTTrafficGoalModifiedDate: Date | null;

  @OneToMany(
    type => tblRTTrafficGoalCommunityGoal,
    tblRTTrafficGoalCommunityGoal =>
      tblRTTrafficGoalCommunityGoal.intRtTrafficGoalCommunityGoalGoal,
    { onDelete: 'CASCADE' }
  )
  tblRtTrafficGoalCommunityGoals: tblRTTrafficGoalCommunityGoal[];
}
