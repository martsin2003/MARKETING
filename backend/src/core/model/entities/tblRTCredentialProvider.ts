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
import { tblRTDisplayGoal } from './tblRTDisplayGoal';
import { tblRTPaidSearchBudget } from './tblRTPaidSearchBudget';
import { tblRTPaidSearchGoal } from './tblRTPaidSearchGoal';

@Entity('tblRTCredentialProvider', { schema: 'public' })
export class tblRTCredentialProvider {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTCredentialProviderID'
  })
  intRTCredentialProviderID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTCredentialProviderName'
  })
  varRTCredentialProviderName: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTCredentialProviderCreatedDate'
  })
  dteRTCredentialProviderCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTCredentialProviderModifiedDate'
  })
  dteRTCredentialProviderModifiedDate: Date;

  @OneToMany(
    type => tblRTDisplayGoal,
    tblRTDisplayGoal => tblRTDisplayGoal.intRtDisplayGoalRtCredentialProvider,
    { onDelete: 'CASCADE' }
  )
  tblRtDisplayGoals: tblRTDisplayGoal[];

  @OneToMany(
    type => tblRTPaidSearchBudget,
    tblRTPaidSearchBudget => tblRTPaidSearchBudget.intRtPaidSearchBudgetRtCredentialProvider,
    { onDelete: 'CASCADE' }
  )
  tblRtPaidSearchBudgets: tblRTPaidSearchBudget[];

  @OneToMany(
    type => tblRTPaidSearchGoal,
    tblRTPaidSearchGoal => tblRTPaidSearchGoal.intRtPaidSearchGoalRtCredentialProvider,
    { onDelete: 'CASCADE' }
  )
  tblRtPaidSearchGoals: tblRTPaidSearchGoal[];
}
