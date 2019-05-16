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

@Entity('tblContactStage', { schema: 'public' })
export class tblContactStage {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intContactStageID'
  })
  intContactStageID: string;

  @Column('text', {
    nullable: true,
    name: 'varContactStageEmail'
  })
  varContactStageEmail: string | null;

  @Column('text', {
    nullable: false,
    name: 'varContactStageFirstName'
  })
  varContactStageFirstName: string;

  @Column('text', {
    nullable: false,
    name: 'varContactStageLastName'
  })
  varContactStageLastName: string;

  @Column('text', {
    nullable: true,
    name: 'varContactStageAddress1'
  })
  varContactStageAddress1: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageAddress2'
  })
  varContactStageAddress2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageCity'
  })
  varContactStageCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageState'
  })
  varContactStageState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageZipCode'
  })
  varContactStageZipCode: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteContactStageVisited'
  })
  dteContactStageVisited: Date;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactStageWalkInDate'
  })
  dteContactStageWalkInDate: Date | null;

  @Column('boolean', {
    nullable: false,
    name: 'bContactStageWalkIn'
  })
  bContactStageWalkIn: boolean;

  @Column('text', {
    nullable: true,
    name: 'varContactStageComments'
  })
  varContactStageComments: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageHomePhone'
  })
  varContactStageHomePhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageMobilePhone'
  })
  varContactStageMobilePhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageWorkPhone'
  })
  varContactStageWorkPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageWorkPhoneExt'
  })
  varContactStageWorkPhoneExt: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageFax'
  })
  varContactStageFax: string | null;

  @Column('boolean', {
    nullable: false,
    name: 'bContactStageEmailOptOut'
  })
  bContactStageEmailOptOut: boolean;

  @Column('text', {
    nullable: true,
    name: 'varContactStageSurveyHearAbout'
  })
  varContactStageSurveyHearAbout: string | null;

  @Column('text', {
    nullable: false,
    name: 'chrContactStageStatus'
  })
  chrContactStageStatus: string;

  @Column('text', {
    nullable: true,
    name: 'varContactStageMarketingName'
  })
  varContactStageMarketingName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageSubdivisionNum'
  })
  varContactStageSubdivisionNum: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteContactStageSSLastModifiedDate'
  })
  dteContactStageSSLastModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varContactStageRealtorFirstName'
  })
  varContactStageRealtorFirstName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageRealtorLastName'
  })
  varContactStageRealtorLastName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageRealtorEmail'
  })
  varContactStageRealtorEmail: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageBrokerageName'
  })
  varContactStageBrokerageName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageBrokerageZip'
  })
  varContactStageBrokerageZip: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactStageSSClientID'
  })
  intContactStageSSClientID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageGreetedByFirstName'
  })
  varContactStageGreetedByFirstName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactStageGreetedByLastName'
  })
  varContactStageGreetedByLastName: string | null;
}
