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
import { tblFPFloorOption } from './tblFPFloorOption';

@Entity('tblFPFloorOptionConditionalCondition', { schema: 'public' })
export class tblFPFloorOptionConditionalCondition {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPFloorOptionConditionalConditionID'
  })
  intFPFloorOptionConditionalConditionID: string;

  @Column('integer', {
    nullable: false,
    name: 'intFPFloorOptionConditionalConditionFPFloorOptionConditionalID'
  })
  intFPFloorOptionConditionalConditionFPFloorOptionConditionalID: number;

  @ManyToOne(
    type => tblFPFloorOption,
    tblFPFloorOption => tblFPFloorOption.tblFpFloorOptionConditionalConditions,
    { nullable: false }
  )
  @JoinColumn({ name: 'intFPFloorOptionConditionalConditionTargetFPFloorOptionID' })
  intFpFloorOptionConditionalConditionTargetFpFloorOption: tblFPFloorOption | null;

  @Column('integer', {
    nullable: false,
    name: 'intFPFloorOptionConditionalConditionOrder'
  })
  intFPFloorOptionConditionalConditionOrder: number;
}
