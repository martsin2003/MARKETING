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

@Entity('tblProspectingActivities', { schema: 'public' })
export class tblProspectingActivities {
  @Column('integer', {
    nullable: true,
    name: 'lngTrafficReportID'
  })
  lngTrafficReportID: number | null;

  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intProspectingActivitiesID'
  })
  intProspectingActivitiesID: string;

  @Column('text', {
    nullable: true,
    name: 'varProspectingActivitiesSalesCounselor'
  })
  varProspectingActivitiesSalesCounselor: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intProspectingActivitiesBeBacks'
  })
  intProspectingActivitiesBeBacks: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intProspectingActivitiesRealtorContacts'
  })
  intProspectingActivitiesRealtorContacts: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intProspectingActivitiesReferralContacts'
  })
  intProspectingActivitiesReferralContacts: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intProspectingActivitiesPhoneFollowUps'
  })
  intProspectingActivitiesPhoneFollowUps: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intProspectingActivitiesWrittenFollowUps'
  })
  intProspectingActivitiesWrittenFollowUps: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intProspectingActivitiesEmailFollowUps'
  })
  intProspectingActivitiesEmailFollowUps: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngProspectingActivitiesCnt'
  })
  lngProspectingActivitiesCnt: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intProspectingActivitiesApptsScheduled'
  })
  intProspectingActivitiesApptsScheduled: number | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteProspectingActivitiesModified'
  })
  dteProspectingActivitiesModified: Date | null;
}
