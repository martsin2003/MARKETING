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
import { tblRTPaidSearchAdGroup } from './tblRTPaidSearchAdGroup';
import { tblRTPaidSearchGoalKeywordData } from './tblRTPaidSearchGoalKeywordData';
import { tblRTPaidSearchGoalKeywordNonAdwordsData } from './tblRTPaidSearchGoalKeywordNonAdwordsData';
import { tblRTPaidSearchKeywordData } from './tblRTPaidSearchKeywordData';

@Entity('tblRTPaidSearchKeyword', { schema: 'public' })
@Index(
  'idx_20364_IX_tblRTPaidSearchKeyword',
  [
    'intRTPaidSearchKeywordAPIID',
    'intRTPaidSearchKeywordID',
    'intRtPaidSearchKeywordRtPaidSearchAdGroup',
    'varRTPaidSearchKeyword',
    'varRTPaidSearchKeywordMatchType',
    'varRTPaidSearchKeywordStatus'
  ],
  { unique: true }
)
export class tblRTPaidSearchKeyword {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTPaidSearchKeywordID'
  })
  intRTPaidSearchKeywordID: string;

  @ManyToOne(
    type => tblRTPaidSearchAdGroup,
    tblRTPaidSearchAdGroup => tblRTPaidSearchAdGroup.tblRtPaidSearchKeywords,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTPaidSearchKeywordRTPaidSearchAdGroupID' })
  intRtPaidSearchKeywordRtPaidSearchAdGroup: tblRTPaidSearchAdGroup | null;

  @Column('text', {
    nullable: false,
    name: 'varRTPaidSearchKeyword'
  })
  varRTPaidSearchKeyword: string;

  @Column('text', {
    nullable: false,
    default: () => "'eligible'",
    name: 'varRTPaidSearchKeywordStatus'
  })
  varRTPaidSearchKeywordStatus: string;

  @Column('text', {
    nullable: false,
    default: () => "'enabled'",
    name: 'varRTPaidSearchKeywordState'
  })
  varRTPaidSearchKeywordState: string;

  @Column('text', {
    nullable: false,
    default: () => "'broad'",
    name: 'varRTPaidSearchKeywordMatchType'
  })
  varRTPaidSearchKeywordMatchType: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchKeywordCreatedDate'
  })
  dteRTPaidSearchKeywordCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTPaidSearchKeywordModifiedDate'
  })
  dteRTPaidSearchKeywordModifiedDate: Date;

  @Column('bigint', {
    nullable: false,
    name: 'intRTPaidSearchKeywordAPIID'
  })
  intRTPaidSearchKeywordAPIID: string;

  @OneToMany(
    type => tblRTPaidSearchGoalKeywordData,
    tblRTPaidSearchGoalKeywordData =>
      tblRTPaidSearchGoalKeywordData.intRtPaidSearchGoalKeywordDataRtPaidSearchKeyword,
    { onDelete: 'CASCADE' }
  )
  tblRtPaidSearchGoalKeywordDatas: tblRTPaidSearchGoalKeywordData[];

  @OneToMany(
    type => tblRTPaidSearchGoalKeywordNonAdwordsData,
    tblRTPaidSearchGoalKeywordNonAdwordsData =>
      tblRTPaidSearchGoalKeywordNonAdwordsData.intRtPaidSearchGoalKeywordNonAdwordsDataRtPaidSearchKeyword,
    { onDelete: 'CASCADE' }
  )
  tblRtPaidSearchGoalKeywordNonAdwordsDatas: tblRTPaidSearchGoalKeywordNonAdwordsData[];

  @OneToMany(
    type => tblRTPaidSearchKeywordData,
    tblRTPaidSearchKeywordData =>
      tblRTPaidSearchKeywordData.intRtPaidSearchKeywordDataRtPaidSearchKeyword,
    { onDelete: 'CASCADE' }
  )
  tblRtPaidSearchKeywordDatas: tblRTPaidSearchKeywordData[];
}
