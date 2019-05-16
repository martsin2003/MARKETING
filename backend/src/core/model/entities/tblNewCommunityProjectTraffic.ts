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

@Entity('tblNewCommunityProjectTraffic', { schema: 'public' })
export class tblNewCommunityProjectTraffic {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intNewCommunityProjectTrafficID'
  })
  intNewCommunityProjectTrafficID: string;

  @Column('integer', {
    nullable: false,
    name: 'lngTrafficReportID'
  })
  lngTrafficReportID: number;

  @Column('integer', {
    nullable: false,
    name: 'intNewCommunityProjectTrafficCommunityProjectID'
  })
  intNewCommunityProjectTrafficCommunityProjectID: number;

  @Column('integer', {
    nullable: false,
    name: 'intNewCommunityProjectTrafficNewWalkInCount'
  })
  intNewCommunityProjectTrafficNewWalkInCount: number;

  @Column('integer', {
    nullable: false,
    name: 'intNewCommunityProjectTrafficNewCallInCount'
  })
  intNewCommunityProjectTrafficNewCallInCount: number;

  @Column('integer', {
    nullable: false,
    name: 'intNewCommunityProjectTrafficNewAssignedCount'
  })
  intNewCommunityProjectTrafficNewAssignedCount: number;

  @Column('integer', {
    nullable: false,
    name: 'intNewCommunityProjectTrafficNoRegCount'
  })
  intNewCommunityProjectTrafficNoRegCount: number;

  @Column('integer', {
    nullable: false,
    name: 'intNewCommunityProjectTrafficBeBackPCount'
  })
  intNewCommunityProjectTrafficBeBackPCount: number;

  @Column('integer', {
    nullable: false,
    name: 'intNewCommunityProjectTrafficBeBackRCount'
  })
  intNewCommunityProjectTrafficBeBackRCount: number;

  @Column('integer', {
    nullable: false,
    name: 'intNewCommunityProjectTrafficNewWebChatCount'
  })
  intNewCommunityProjectTrafficNewWebChatCount: number;

  @Column('integer', {
    nullable: false,
    name: 'intNewCommunityProjectTrafficNewWebRegCount'
  })
  intNewCommunityProjectTrafficNewWebRegCount: number;

  @Column('integer', {
    nullable: false,
    name: 'intNewCommunityProjectTrafficNewListingSiteCount'
  })
  intNewCommunityProjectTrafficNewListingSiteCount: number;

  @Column('integer', {
    nullable: false,
    name: 'intNewCommunityProjectTrafficNewWebDirectCount'
  })
  intNewCommunityProjectTrafficNewWebDirectCount: number;

  @Column('integer', {
    nullable: false,
    name: 'intNewCommunityProjectTrafficCount'
  })
  intNewCommunityProjectTrafficCount: number;

  @Column('integer', {
    nullable: false,
    name: 'intNewCommunityProjectTrafficPresentationCount'
  })
  intNewCommunityProjectTrafficPresentationCount: number;
}
