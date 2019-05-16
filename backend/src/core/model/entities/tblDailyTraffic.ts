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

@Entity('tblDailyTraffic', { schema: 'public' })
export class tblDailyTraffic {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'lngDailyTrafficID'
  })
  lngDailyTrafficID: string;

  @Column('integer', {
    nullable: true,
    name: 'lngTrafficReportID'
  })
  lngTrafficReportID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficDay'
  })
  lngDailyTrafficDay: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficNewCount'
  })
  lngDailyTrafficNewCount: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficRepeatCount'
  })
  lngDailyTrafficRepeatCount: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficApptCount'
  })
  lngDailyTrafficApptCount: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficNoRegCount'
  })
  lngDailyTrafficNoRegCount: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficBeBackCount'
  })
  lngDailyTrafficBeBackCount: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficNewCallInCount'
  })
  lngDailyTrafficNewCallInCount: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficNewRealtorCount'
  })
  lngDailyTrafficNewRealtorCount: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficBeBackPCount'
  })
  lngDailyTrafficBeBackPCount: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficBeBackRCount'
  })
  lngDailyTrafficBeBackRCount: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficNewWebChatCount'
  })
  lngDailyTrafficNewWebChatCount: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficNewWebRegCount'
  })
  lngDailyTrafficNewWebRegCount: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficNewListingSiteCount'
  })
  lngDailyTrafficNewListingSiteCount: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficNewWebDirectCount'
  })
  lngDailyTrafficNewWebDirectCount: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficNewAssignedCount'
  })
  lngDailyTrafficNewAssignedCount: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficBeBackRCountSave'
  })
  lngDailyTrafficBeBackRCountSave: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngDailyTrafficNewCountAdj'
  })
  lngDailyTrafficNewCountAdj: number | null;
}
