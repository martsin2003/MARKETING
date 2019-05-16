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

@Entity('tblFormSubmission', { schema: 'public' })
export class tblFormSubmission {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFormSubmissionID'
  })
  intFormSubmissionID: string;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionFirstName'
  })
  varFormSubmissionFirstName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionLastName'
  })
  varFormSubmissionLastName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionEmail'
  })
  varFormSubmissionEmail: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionPhone'
  })
  varFormSubmissionPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionCity'
  })
  varFormSubmissionCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionState'
  })
  varFormSubmissionState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionZip'
  })
  varFormSubmissionZip: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionModelsInterestedIn'
  })
  varFormSubmissionModelsInterestedIn: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionCommunityInterestedIn'
  })
  varFormSubmissionCommunityInterestedIn: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtFormSubmissionComments'
  })
  txtFormSubmissionComments: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bFormSubmissionNotify'
  })
  bFormSubmissionNotify: boolean | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionType'
  })
  varFormSubmissionType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionAddress'
  })
  varFormSubmissionAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionVia'
  })
  varFormSubmissionVia: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dtFormSubmissionSubmitDate'
  })
  dtFormSubmissionSubmitDate: Date | null;

  @Column('integer', {
    nullable: true,
    name: 'intFormSubmissionCommunityID'
  })
  intFormSubmissionCommunityID: number | null;

  @Column('text', {
    nullable: true,
    name: 'txtFormSubmissionMoveInNowInformation'
  })
  txtFormSubmissionMoveInNowInformation: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionScheduleApptFastAnswers'
  })
  varFormSubmissionScheduleApptFastAnswers: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionSendEmailIncentivesFastAnswers'
  })
  varFormSubmissionSendEmailIncentivesFastAnswers: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionSendEmailFinancingOffersFastAnswers'
  })
  varFormSubmissionSendEmailFinancingOffersFastAnswers: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionSendEmailOverviewFastAnswers'
  })
  varFormSubmissionSendEmailOverviewFastAnswers: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionSendCommunityBroochureFastAnswers'
  })
  varFormSubmissionSendCommunityBroochureFastAnswers: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionEnrollInsidersClubFastAnswers'
  })
  varFormSubmissionEnrollInsidersClubFastAnswers: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionRepresentativeCallFastAnswers'
  })
  varFormSubmissionRepresentativeCallFastAnswers: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionHouseType'
  })
  varFormSubmissionHouseType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionCommunityInterestedIn1'
  })
  varFormSubmissionCommunityInterestedIn1: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionCommunityInterestedIn2'
  })
  varFormSubmissionCommunityInterestedIn2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionCommunityInterestedIn3'
  })
  varFormSubmissionCommunityInterestedIn3: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionLocationInterestedIn1'
  })
  varFormSubmissionLocationInterestedIn1: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionLocationInterestedIn2'
  })
  varFormSubmissionLocationInterestedIn2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionLocationInterestedIn3'
  })
  varFormSubmissionLocationInterestedIn3: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionModelInterestedIn1'
  })
  varFormSubmissionModelInterestedIn1: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionModelInterestedIn2'
  })
  varFormSubmissionModelInterestedIn2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionModelInterestedIn3'
  })
  varFormSubmissionModelInterestedIn3: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionHaveChildren'
  })
  varFormSubmissionHaveChildren: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intFormSubmissionNumberOfChildren'
  })
  intFormSubmissionNumberOfChildren: number | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionChildrenAges'
  })
  varFormSubmissionChildrenAges: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtFormSubmissionExtracurricularActivities'
  })
  txtFormSubmissionExtracurricularActivities: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionFirstNameFriend'
  })
  varFormSubmissionFirstNameFriend: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionLastNameFriend'
  })
  varFormSubmissionLastNameFriend: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionEmailFriend'
  })
  varFormSubmissionEmailFriend: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionCityFriend'
  })
  varFormSubmissionCityFriend: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionStateFriend'
  })
  varFormSubmissionStateFriend: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionZipFriend'
  })
  varFormSubmissionZipFriend: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionRealtor'
  })
  varFormSubmissionRealtor: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionCampaignSource'
  })
  varFormSubmissionCampaignSource: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionCampaignName'
  })
  varFormSubmissionCampaignName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionCampaignContent'
  })
  varFormSubmissionCampaignContent: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionIPadFloorplanPDF'
  })
  varFormSubmissionIPadFloorplanPDF: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtFormSubmissionCustomerComments'
  })
  txtFormSubmissionCustomerComments: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionCommunity'
  })
  varFormSubmissionCommunity: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intFormSubmissionNumberOfGuests'
  })
  intFormSubmissionNumberOfGuests: number | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionHowHear'
  })
  varFormSubmissionHowHear: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteFormSubmissionEventAttendingDate'
  })
  dteFormSubmissionEventAttendingDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varFormSubmissionCurrentStatus'
  })
  varFormSubmissionCurrentStatus: string | null;
}
