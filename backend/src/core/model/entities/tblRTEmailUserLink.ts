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

@Entity('tblRTEmailUserLink', { schema: 'public' })
@Index('idx_19967_IX_RTEmailUserLinkUser', [
  'dteRTEmailUserLinkLinkDate',
  'intRTEmailUserLinkLinkID',
  'intRTEmailUserLinkUserID'
])
@Index('idx_19967_IX_RTEmailUserLinkEmail', [
  'dteRTEmailUserLinkLinkDate',
  'intRTEmailUserLinkEmailID',
  'intRTEmailUserLinkLinkID',
  'intRTEmailUserLinkUserID'
])
export class tblRTEmailUserLink {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTEmailUserLinkID'
  })
  intRTEmailUserLinkID: string;

  @Column('bigint', {
    nullable: false,
    name: 'intRTEmailUserLinkUserID'
  })
  intRTEmailUserLinkUserID: string;

  @Column('bigint', {
    nullable: false,
    name: 'intRTEmailUserLinkEmailID'
  })
  intRTEmailUserLinkEmailID: string;

  @Column('bigint', {
    nullable: false,
    name: 'intRTEmailUserLinkLinkID'
  })
  intRTEmailUserLinkLinkID: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTEmailUserLinkLinkDate'
  })
  dteRTEmailUserLinkLinkDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTEmailUserLinkLinkCreatedDate'
  })
  dteRTEmailUserLinkLinkCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTEmailUserLinkLinkModifiedDate'
  })
  dteRTEmailUserLinkLinkModifiedDate: Date;
}
