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
import { tblRTEmailAction } from './tblRTEmailAction';

@Entity('tblRTEmailUserEmailAction', { schema: 'public' })
@Index('idx_19958_IX_RTEmailUserEmailActionAction', [
  'dteRTEmailUserEmailActionDate',
  'intRtEmailUserEmailActionAction',
  'intRTEmailUserEmailActionEmailID',
  'intRTEmailUserEmailActionID',
  'intRTEmailUserEmailActionUserID',
  'varRTEmailUserEmailActionBouceType'
])
@Index(
  'idx_19958_IX_tblRTEmailUserEmailAction_COVERING',
  [
    'dteRTEmailUserEmailActionDate',
    'intRtEmailUserEmailActionAction',
    'intRTEmailUserEmailActionEmailID',
    'intRTEmailUserEmailActionUserID',
    'varRTEmailUserEmailActionBouceType'
  ],
  { unique: true }
)
@Index('idx_19958_IX_RTEmailUserEmailActionUser', [
  'dteRTEmailUserEmailActionDate',
  'intRtEmailUserEmailActionAction',
  'intRTEmailUserEmailActionEmailID',
  'intRTEmailUserEmailActionID',
  'intRTEmailUserEmailActionUserID',
  'varRTEmailUserEmailActionBouceType'
])
@Index('idx_19958_IX_RTEmailUserEmailActionEmail', [
  'dteRTEmailUserEmailActionDate',
  'intRtEmailUserEmailActionAction',
  'intRTEmailUserEmailActionEmailID',
  'intRTEmailUserEmailActionID',
  'intRTEmailUserEmailActionUserID',
  'varRTEmailUserEmailActionBouceType'
])
export class tblRTEmailUserEmailAction {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTEmailUserEmailActionID'
  })
  intRTEmailUserEmailActionID: string;

  @Column('bigint', {
    nullable: false,
    name: 'intRTEmailUserEmailActionUserID'
  })
  intRTEmailUserEmailActionUserID: string;

  @Column('bigint', {
    nullable: false,
    name: 'intRTEmailUserEmailActionEmailID'
  })
  intRTEmailUserEmailActionEmailID: string;

  @ManyToOne(
    type => tblRTEmailAction,
    tblRTEmailAction => tblRTEmailAction.tblRtEmailUserEmailActions,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTEmailUserEmailActionActionID' })
  intRtEmailUserEmailActionAction: tblRTEmailAction | null;

  @Column('text', {
    nullable: true,
    name: 'varRTEmailUserEmailActionBouceType'
  })
  varRTEmailUserEmailActionBouceType: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTEmailUserEmailActionDate'
  })
  dteRTEmailUserEmailActionDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTEmailUserEmailActionCreatedDate'
  })
  dteRTEmailUserEmailActionCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTEmailUserEmailActionModifiedDate'
  })
  dteRTEmailUserEmailActionModifiedDate: Date;
}
