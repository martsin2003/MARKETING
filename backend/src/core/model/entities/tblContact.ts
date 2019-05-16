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
import { tblContactAutomatedEmailCancelled } from './tblContactAutomatedEmailCancelled';
import { tblContactAutomatedEmailPaused } from './tblContactAutomatedEmailPaused';
import { tblContactAutomatedEmailScheduled } from './tblContactAutomatedEmailScheduled';
import { tblContactAutomatedEmailSent } from './tblContactAutomatedEmailSent';
import { tblFPUserContact } from './tblFPUserContact';
import { tblHomeEstimate } from './tblHomeEstimate';

@Entity('tblContact', { schema: 'public' })
@Index('idx_17079_IX_tblContact_forGeocoding', [
  'bContactAddressUpdated',
  'bContactTransferred',
  'dteContactEntered',
  'fltLatitude',
  'fltLongitude',
  'intContactCommunityID',
  'intContactID',
  'varContactAddress1',
  'varContactCity',
  'varContactFirstName',
  'varContactLastName',
  'varContactState',
  'varContactZipCode'
])
@Index('idx_17079_IX_A4_tblContact', [
  'bContactBeBack1',
  'bContactBeBack10',
  'bContactBeBack2',
  'bContactBeBack3',
  'bContactBeBack4',
  'bContactBeBack5',
  'bContactBeBack6',
  'bContactBeBack7',
  'bContactBeBack8',
  'bContactBeBack9',
  'dteContactBeBackDate1',
  'dteContactBeBackDate10',
  'dteContactBeBackDate2',
  'dteContactBeBackDate3',
  'dteContactBeBackDate4',
  'dteContactBeBackDate5',
  'dteContactBeBackDate6',
  'dteContactBeBackDate7',
  'dteContactBeBackDate8',
  'dteContactBeBackDate9',
  'intContactCommunityID',
  'intContactCommunityProjectID',
  'intContactID',
  'varContactEmailPrimary'
])
@Index('idx_17079_IX_A5_tblContact', [
  'bContactBeBack1',
  'bContactBeBack10',
  'bContactBeBack2',
  'bContactBeBack3',
  'bContactBeBack4',
  'bContactBeBack5',
  'bContactBeBack6',
  'bContactBeBack7',
  'bContactBeBack8',
  'bContactBeBack9',
  'dteContactBeBackDate1',
  'dteContactBeBackDate10',
  'dteContactBeBackDate2',
  'dteContactBeBackDate3',
  'dteContactBeBackDate4',
  'dteContactBeBackDate5',
  'dteContactBeBackDate6',
  'dteContactBeBackDate7',
  'dteContactBeBackDate8',
  'dteContactBeBackDate9',
  'intContactCommunityID',
  'intContactCommunityProjectID',
  'intContactID',
  'varContactEmailPrimary'
])
@Index('idx_17079_IX_tblContact_dteContactModifiedDate', [
  'bContactBuildYourHomeSent',
  'bContactDepartureHomeConsultationSent',
  'bContactEmailOptOut',
  'bContactHomesiteDemonstrationSent',
  'bContactHomesiteReservationSent',
  'bContactLenderConsultationSent',
  'bContactModelDemonstrationSent',
  'bContactMyEmmaMemberOptIn',
  'bContactOwnershipEstimateSent',
  'dteContactModifiedDate',
  'intContactCommunityID',
  'intContactID',
  'varContactBuildYourHome',
  'varContactDepartureHomeConsultation',
  'varContactEmailPrimary',
  'varContactFirstName',
  'varContactHomesiteDemonstration',
  'varContactHomesiteReservation',
  'varContactLastName',
  'varContactLenderConsultation',
  'varContactModelDemonstration',
  'varContactMyEmmaMemberID',
  'varContactMyEmmaMemberStatus',
  'varContactOwnershipEstimate'
])
@Index('idx_17079_IX_tblContact_MyEmma', [
  'bContactEmailOptOut',
  'intContactCategoryID',
  'intContactContactStatusID',
  'intContactContactTypeID',
  'intContactID',
  'varContactEmailPrimary',
  'varContactMyEmmaMemberID',
  'varContactMyEmmaMemberStatus'
])
@Index('idx_17079_IX_A1_tblContact', [
  'bContactTopProspect',
  'bContactTransferred',
  'bContactWalkIn',
  'dteContactVisited',
  'intContactCategoryID',
  'intContactCommunityID',
  'intContactCommunityOfInterestID',
  'intContactContactStatusID',
  'intContactContactTypeID',
  'intContactID',
  'varContactEmailPrimary',
  'varContactFirstName',
  'varContactLastName',
  'varContactLevel',
  'varContactMI',
  'varContactMobilePhone',
  'varContactSurveyHearAbout'
])
@Index('idx_17079_IX_tblContact_Reporting2', [
  'bContactTransferred',
  'dteContactVisited',
  'intContactCommunityID',
  'intContactCommunityID_Org',
  'intContactContactTypeID'
])
@Index('idx_17079_IX_tblContact_TypeStatus', [
  'bContactWalkIn',
  'dteContactVisited',
  'dteContactWalkInDate',
  'intContactCategoryID',
  'intContactContactStatusID',
  'intContactContactTypeID',
  'intContactID'
])
@Index('idx_17079_IX_tblContact_BeBacks', [
  'dteContactBeBackDate1',
  'dteContactBeBackDate10',
  'dteContactBeBackDate2',
  'dteContactBeBackDate3',
  'dteContactBeBackDate4',
  'dteContactBeBackDate5',
  'dteContactBeBackDate6',
  'dteContactBeBackDate7',
  'dteContactBeBackDate8',
  'dteContactBeBackDate9',
  'intContactCategoryID',
  'intContactCommunityID',
  'intContactContactStatusID',
  'intContactContactTypeID',
  'intContactID'
])
@Index('idx_17079_IX_A3_tblContact', [
  'intContactCategoryID',
  'intContactCommunityID',
  'intContactContactTypeID',
  'intContactID',
  'varContactEmailPrimary',
  'varContactFirstName',
  'varContactLastName'
])
@Index('idx_17079_IX_tblContact_Reporting1', [
  'intContactCommunityID',
  'intContactCommunityID_Org',
  'intContactContactStatusID',
  'intContactContactTypeID',
  'intContactID',
  'intContactID_OSC'
])
@Index('idx_17079_IX_tblContact_Community', ['intContactCommunityID'])
@Index('idx_17079_IX_A2_tblContact', ['intContactCommunityID', 'varContactEmailPrimary'])
export class tblContact {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intContactID'
  })
  intContactID: string;

  @Column('integer', {
    nullable: true,
    name: 'intContactSalutationID'
  })
  intContactSalutationID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varContactFirstName'
  })
  varContactFirstName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactMI'
  })
  varContactMI: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactLastName'
  })
  varContactLastName: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactSuffixID'
  })
  intContactSuffixID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varContactAddress1'
  })
  varContactAddress1: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactAddress2'
  })
  varContactAddress2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCity'
  })
  varContactCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactState'
  })
  varContactState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactZipCode'
  })
  varContactZipCode: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactHomePhone'
  })
  varContactHomePhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactWorkPhone'
  })
  varContactWorkPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactWorkPhoneExt'
  })
  varContactWorkPhoneExt: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactMobilePhone'
  })
  varContactMobilePhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactFax'
  })
  varContactFax: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactEmailPrimary'
  })
  varContactEmailPrimary: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactEmailSecondary'
  })
  varContactEmailSecondary: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactSalesRepID'
  })
  intContactSalesRepID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactPrimaryContactID'
  })
  intContactPrimaryContactID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactContactMethodID'
  })
  intContactContactMethodID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactContactTypeID'
  })
  intContactContactTypeID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactLeadTypeID'
  })
  intContactLeadTypeID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactCategoryID'
  })
  intContactCategoryID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactTimeToContactID'
  })
  intContactTimeToContactID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactContactStatusID'
  })
  intContactContactStatusID: number | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactVisited'
  })
  dteContactVisited: Date | null;

  @Column('text', {
    nullable: true,
    name: 'txtContactComments'
  })
  txtContactComments: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactRealtor'
  })
  bContactRealtor: boolean | null;

  @Column('text', {
    nullable: true,
    name: 'varContactRealtorName'
  })
  varContactRealtorName: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactEntered'
  })
  dteContactEntered: Date | null;

  @Column('text', {
    nullable: true,
    name: 'txtContactInactiveComments'
  })
  txtContactInactiveComments: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactCommunityID'
  })
  intContactCommunityID: number | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactTopProspect'
  })
  bContactTopProspect: boolean | null;

  @Column('text', {
    nullable: true,
    default: () => "'C'",
    name: 'varContactLevel'
  })
  varContactLevel: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyImportantToYou3CG'
  })
  bContactSurveyImportantToYou3CG: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyImportantToYouSEG'
  })
  bContactSurveyImportantToYouSEG: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyImportantToYou1FMB'
  })
  bContactSurveyImportantToYou1FMB: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyImportantToYou2FLR'
  })
  bContactSurveyImportantToYou2FLR: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyImportantToYouSB'
  })
  bContactSurveyImportantToYouSB: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyImportantToYouHO'
  })
  bContactSurveyImportantToYouHO: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyImportantToYouGK'
  })
  bContactSurveyImportantToYouGK: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyImportantToYouSMR'
  })
  bContactSurveyImportantToYouSMR: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyImportantToYouHTR'
  })
  bContactSurveyImportantToYouHTR: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyImportantToYouFB'
  })
  bContactSurveyImportantToYouFB: boolean | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyInterestedIn'
  })
  varContactSurveyInterestedIn: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyVisitedSite'
  })
  varContactSurveyVisitedSite: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyMethod'
  })
  varContactSurveyMethod: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'No Answer'",
    name: 'varContactSurveyHearAbout'
  })
  varContactSurveyHearAbout: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactSurveyHomeSearch'
  })
  intContactSurveyHomeSearch: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactSurveyBuyingIntentions'
  })
  intContactSurveyBuyingIntentions: number | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyOwnRent'
  })
  varContactSurveyOwnRent: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyOwnSale'
  })
  varContactSurveyOwnSale: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyLivedIn'
  })
  varContactSurveyLivedIn: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactSurveyBedrooms'
  })
  intContactSurveyBedrooms: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactSurveyHomeType'
  })
  intContactSurveyHomeType: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactSurveyPriceRange'
  })
  intContactSurveyPriceRange: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactSurveyPeople'
  })
  intContactSurveyPeople: number | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactDMDate'
  })
  dteContactDMDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactDMDropDate'
  })
  dteContactDMDropDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varContactRealtorOfficeAddress'
  })
  varContactRealtorOfficeAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactRealtorOfficeCity'
  })
  varContactRealtorOfficeCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactRealtorOfficeState'
  })
  varContactRealtorOfficeState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactRealtorOfficeZip'
  })
  varContactRealtorOfficeZip: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactRealtorPhone'
  })
  varContactRealtorPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactRealtorEmail'
  })
  varContactRealtorEmail: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'0'",
    name: 'intContactRealtorOffice'
  })
  intContactRealtorOffice: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactRealtorOfficeAddress2'
  })
  varContactRealtorOfficeAddress2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyAgeRange'
  })
  varContactSurveyAgeRange: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyPriceRange'
  })
  varContactSurveyPriceRange: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'0'",
    name: 'varContactSurveyMaritalStatus'
  })
  varContactSurveyMaritalStatus: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'0'",
    name: 'varContactSurveyHomeType'
  })
  varContactSurveyHomeType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactPrimaryContact'
  })
  varContactPrimaryContact: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSalutation'
  })
  varContactSalutation: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyCommunitiesList'
  })
  varContactSurveyCommunitiesList: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intCustomerID'
  })
  intCustomerID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intCustomerStatus'
  })
  intCustomerStatus: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intCustomerType'
  })
  intCustomerType: number | null;

  @Column('text', {
    nullable: true,
    name: 'varSales_rating'
  })
  varSales_rating: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intBHWID'
  })
  intBHWID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intVJID'
  })
  intVJID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varPrefix'
  })
  varPrefix: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactJobTitle'
  })
  varContactJobTitle: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactCoBuyer'
  })
  bContactCoBuyer: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactCBSalutationID'
  })
  intContactCBSalutationID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBFirstName'
  })
  varContactCBFirstName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBMI'
  })
  varContactCBMI: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBLastName'
  })
  varContactCBLastName: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactCBSuffixID'
  })
  intContactCBSuffixID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBAddress1'
  })
  varContactCBAddress1: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBAddress2'
  })
  varContactCBAddress2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBCity'
  })
  varContactCBCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBState'
  })
  varContactCBState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBZipCode'
  })
  varContactCBZipCode: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBHomePhone'
  })
  varContactCBHomePhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBWorkPhone'
  })
  varContactCBWorkPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBWorkPhoneExt'
  })
  varContactCBWorkPhoneExt: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBMobilePhone'
  })
  varContactCBMobilePhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBFax'
  })
  varContactCBFax: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBEmailPrimary'
  })
  varContactCBEmailPrimary: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCB_Salutation'
  })
  varCB_Salutation: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactEmailOptOut'
  })
  bContactEmailOptOut: boolean | null;

  @Column('text', {
    nullable: true,
    name: 'varContactMe'
  })
  varContactMe: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRealtor'
  })
  varRealtor: string | null;

  @Column('text', {
    nullable: true,
    name: 'varPromptingHomeSearch'
  })
  varPromptingHomeSearch: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCurrently'
  })
  varCurrently: string | null;

  @Column('text', {
    nullable: true,
    name: 'varHomeForSale'
  })
  varHomeForSale: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtComments'
  })
  txtComments: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtSendMe'
  })
  txtSendMe: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSendMeCommunity'
  })
  varSendMeCommunity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityVisited'
  })
  varCommunityVisited: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactProductTypeID'
  })
  intContactProductTypeID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactRealtorID'
  })
  intContactRealtorID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyDesiredMonthlyPayment'
  })
  varContactSurveyDesiredMonthlyPayment: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyOtherBuilders'
  })
  varContactSurveyOtherBuilders: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtContactSurveyWhyLooking'
  })
  txtContactSurveyWhyLooking: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyNeedSell'
  })
  bContactSurveyNeedSell: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyRelocating'
  })
  bContactSurveyRelocating: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyFirstVisit'
  })
  bContactSurveyFirstVisit: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyConsideringResaleHomes'
  })
  bContactSurveyConsideringResaleHomes: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyReferredToMAB'
  })
  bContactSurveyReferredToMAB: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyNeedSell1'
  })
  bContactSurveyNeedSell1: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactGreetedByID'
  })
  intContactGreetedByID: number | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactBeBack1'
  })
  bContactBeBack1: boolean | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactBeBackDate1'
  })
  dteContactBeBackDate1: Date | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactBeBack2'
  })
  bContactBeBack2: boolean | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactBeBackDate2'
  })
  dteContactBeBackDate2: Date | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactBeBack3'
  })
  bContactBeBack3: boolean | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactBeBackDate3'
  })
  dteContactBeBackDate3: Date | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactBeBack4'
  })
  bContactBeBack4: boolean | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactBeBackDate4'
  })
  dteContactBeBackDate4: Date | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactBeBack5'
  })
  bContactBeBack5: boolean | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactBeBackDate5'
  })
  dteContactBeBackDate5: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyDBM'
  })
  varContactSurveyDBM: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyExistingHomeDetails'
  })
  varContactSurveyExistingHomeDetails: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyHouseType'
  })
  varContactSurveyHouseType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyUrgency'
  })
  varContactSurveyUrgency: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyHomeSite'
  })
  varContactSurveyHomeSite: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyMemory'
  })
  varContactSurveyMemory: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyEstimatedEquity'
  })
  varContactSurveyEstimatedEquity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityHouseHoldIncome'
  })
  varCommunityHouseHoldIncome: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityLotNumber'
  })
  varCommunityLotNumber: string | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityBlockNumber'
  })
  varCommunityBlockNumber: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSubdivision'
  })
  varContactSubdivision: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactFullname'
  })
  varContactFullname: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'0'",
    name: 'varContactSurveyNeedSell'
  })
  varContactSurveyNeedSell: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'0'",
    name: 'varContactSurveyRelocating'
  })
  varContactSurveyRelocating: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'0'",
    name: 'varContactSurveyFirstVisit'
  })
  varContactSurveyFirstVisit: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'0'",
    name: 'varContactSurveyConsideringResaleHomes'
  })
  varContactSurveyConsideringResaleHomes: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'0'",
    name: 'varContactSurveyReferredToMAB'
  })
  varContactSurveyReferredToMAB: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtContactSurveyExistingHomeDetails'
  })
  txtContactSurveyExistingHomeDetails: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intCommunityHouseHoldIncome'
  })
  intCommunityHouseHoldIncome: number | null;

  @Column('text', {
    nullable: true,
    name: 'varCommunityHouseHoldIncomeOther'
  })
  varCommunityHouseHoldIncomeOther: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactWorkZipCode'
  })
  varContactWorkZipCode: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBWorkZipCode'
  })
  varContactCBWorkZipCode: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactBeBack6'
  })
  bContactBeBack6: boolean | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactBeBackDate6'
  })
  dteContactBeBackDate6: Date | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactBeBack7'
  })
  bContactBeBack7: boolean | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactBeBackDate7'
  })
  dteContactBeBackDate7: Date | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactBeBack8'
  })
  bContactBeBack8: boolean | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactBeBackDate8'
  })
  dteContactBeBackDate8: Date | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactBeBack9'
  })
  bContactBeBack9: boolean | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactBeBackDate9'
  })
  dteContactBeBackDate9: Date | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactBeBack10'
  })
  bContactBeBack10: boolean | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactBeBackDate10'
  })
  dteContactBeBackDate10: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyHearAboutOther'
  })
  varContactSurveyHearAboutOther: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactSectionID'
  })
  intContactSectionID: number | null;

  @Column('text', {
    nullable: true,
    name: 'txtContactSalesRecords'
  })
  txtContactSalesRecords: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactWalkIn'
  })
  bContactWalkIn: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'intHTSRealtorID'
  })
  intHTSRealtorID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varHTSAddress'
  })
  varHTSAddress: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteHTSMustSellBy'
  })
  dteHTSMustSellBy: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteHTSMustCloseBy'
  })
  dteHTSMustCloseBy: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteHTSListed'
  })
  dteHTSListed: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteHTSListingAgmtRecvd'
  })
  dteHTSListingAgmtRecvd: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteHTSSold'
  })
  dteHTSSold: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteHTSEstClose'
  })
  dteHTSEstClose: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteHTSBuyersLoanApproved'
  })
  dteHTSBuyersLoanApproved: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteHTSLRecvdEscInstrs'
  })
  dteHTSLRecvdEscInstrs: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteHTSClosed'
  })
  dteHTSClosed: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteHTSContingentSatisfiedOn'
  })
  dteHTSContingentSatisfiedOn: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varListingPrice'
  })
  varListingPrice: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtHTSComments'
  })
  txtHTSComments: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_TETitleCompany'
  })
  varF_TETitleCompany: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_TEEscrowCompany'
  })
  varF_TEEscrowCompany: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_TEPhone'
  })
  varF_TEPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_TEContact'
  })
  varF_TEContact: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_TEDocsOrdered'
  })
  dteF_TEDocsOrdered: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_TEDocsSigned'
  })
  dteF_TEDocsSigned: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_TETitleAppt'
  })
  dteF_TETitleAppt: Date | null;

  @Column('text', {
    nullable: true,
    name: 'txtF_TEComments'
  })
  txtF_TEComments: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_AAppraiser'
  })
  varF_AAppraiser: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_AApOrdered'
  })
  dteF_AApOrdered: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_AApReceived'
  })
  dteF_AApReceived: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varF_FLender'
  })
  varF_FLender: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_FLenderPhone'
  })
  varF_FLenderPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_FProcessor'
  })
  varF_FProcessor: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_FProcessorPhone'
  })
  varF_FProcessorPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_FIncome'
  })
  varF_FIncome: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_FIncome2'
  })
  varF_FIncome2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_FDebt'
  })
  varF_FDebt: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_FPrequaled'
  })
  dteF_FPrequaled: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_FPrequaled2'
  })
  dteF_FPrequaled2: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_FCreditOK'
  })
  dteF_FCreditOK: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_FVODsIn'
  })
  dteF_FVODsIn: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_FVOEsIn'
  })
  dteF_FVOEsIn: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_FLOR'
  })
  dteF_FLOR: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_FVODsIn2'
  })
  dteF_FVODsIn2: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_FVOEsIn2'
  })
  dteF_FVOEsIn2: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_FPMIOKd'
  })
  dteF_FPMIOKd: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_FLockExp'
  })
  dteF_FLockExp: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_FWarmingSent'
  })
  dteF_FWarmingSent: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varF_FLoanAmt'
  })
  varF_FLoanAmt: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_FLoanRate'
  })
  varF_FLoanRate: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_FOBP'
  })
  varF_FOBP: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyWhyLooking1'
  })
  bContactSurveyWhyLooking1: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyWhyLooking2'
  })
  bContactSurveyWhyLooking2: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyWhyLooking3'
  })
  bContactSurveyWhyLooking3: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyWhyLooking4'
  })
  bContactSurveyWhyLooking4: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyWhyLooking5'
  })
  bContactSurveyWhyLooking5: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyWhyLooking6'
  })
  bContactSurveyWhyLooking6: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyWhyLooking7'
  })
  bContactSurveyWhyLooking7: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactSurveyWhyLooking8'
  })
  bContactSurveyWhyLooking8: boolean | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyHouseholdSize'
  })
  varContactSurveyHouseholdSize: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyCurrentResidenceType'
  })
  varContactSurveyCurrentResidenceType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyHouseholdSizeChildren'
  })
  varContactSurveyHouseholdSizeChildren: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intF_RRealtorID'
  })
  intF_RRealtorID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varF_RCommission'
  })
  varF_RCommission: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtF_RComments'
  })
  txtF_RComments: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_TEContactEmail'
  })
  varF_TEContactEmail: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bF_TEContractDelivered'
  })
  bF_TEContractDelivered: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bF_TEContractRatified'
  })
  bF_TEContractRatified: boolean | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_TESettlement'
  })
  dteF_TESettlement: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_TEContract'
  })
  dteF_TEContract: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteF_TEPreSettlement'
  })
  dteF_TEPreSettlement: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varF_TEDepositRequired'
  })
  varF_TEDepositRequired: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_TEDepositReceived'
  })
  varF_TEDepositReceived: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_TEFinalSalesPrice'
  })
  varF_TEFinalSalesPrice: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_TECurrentPrice'
  })
  varF_TECurrentPrice: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_FLoanOfficer'
  })
  varF_FLoanOfficer: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_FLoanOfficerEmail'
  })
  varF_FLoanOfficerEmail: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_FLoanType'
  })
  varF_FLoanType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varF_FClosingCostIncentive'
  })
  varF_FClosingCostIncentive: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bF_FContractDelivered'
  })
  bF_FContractDelivered: boolean | null;

  @Column('text', {
    nullable: true,
    name: 'txtF_FComments'
  })
  txtF_FComments: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'true',
    name: 'bContactAddressUpdated'
  })
  bContactAddressUpdated: boolean | null;

  @Column('double precision', {
    nullable: true,
    precision: 53,
    name: 'fltLatitude'
  })
  fltLatitude: number | null;

  @Column('double precision', {
    nullable: true,
    precision: 53,
    name: 'fltLongitude'
  })
  fltLongitude: number | null;

  @Column('text', {
    nullable: true,
    name: 'varDis_HowLong'
  })
  varDis_HowLong: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'NA'",
    name: 'varDis_NeedFunds'
  })
  varDis_NeedFunds: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtDis_StartLooking'
  })
  txtDis_StartLooking: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'NA'",
    name: 'varDis_OtherPeople'
  })
  varDis_OtherPeople: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtDis_DontLikeHome'
  })
  txtDis_DontLikeHome: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtDis_DontLikeSituation'
  })
  txtDis_DontLikeSituation: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtDis_OtherCommunities'
  })
  txtDis_OtherCommunities: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'NA'",
    name: 'varDis_SeenAnything'
  })
  varDis_SeenAnything: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtDis_LivingInIdentify'
  })
  txtDis_LivingInIdentify: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtDis_ImportantHomeCommunity'
  })
  txtDis_ImportantHomeCommunity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varDis_WorkPlace'
  })
  varDis_WorkPlace: string | null;

  @Column('text', {
    nullable: true,
    name: 'varDis_WorkedThere'
  })
  varDis_WorkedThere: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtDis_Occupation'
  })
  txtDis_Occupation: string | null;

  @Column('text', {
    nullable: true,
    name: 'varDis_Commute'
  })
  varDis_Commute: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'NA'",
    name: 'varDis_KnowAnyone'
  })
  varDis_KnowAnyone: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtDis_TopPriority'
  })
  txtDis_TopPriority: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtDis_TypeHomesite'
  })
  txtDis_TypeHomesite: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteMessage1Sent'
  })
  dteMessage1Sent: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteMessage2Sent'
  })
  dteMessage2Sent: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteMessage3Sent'
  })
  dteMessage3Sent: Date | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactCommunitySCID'
  })
  intContactCommunitySCID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyCustomizingYourHome'
  })
  varContactSurveyCustomizingYourHome: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactCommunityID_Org'
  })
  intContactCommunityID_Org: number | null;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyPriceRangeOrg'
  })
  varContactSurveyPriceRangeOrg: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactAppointmentScheduled'
  })
  bContactAppointmentScheduled: boolean | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactAppointmentDate'
  })
  dteContactAppointmentDate: Date | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bContactTransferred'
  })
  bContactTransferred: boolean | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactMovedToBuyer'
  })
  dteContactMovedToBuyer: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactDesignCenterSent'
  })
  dteContactDesignCenterSent: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varContactReferrer'
  })
  varContactReferrer: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactOccupation'
  })
  varContactOccupation: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactMilitaryStatus'
  })
  intContactMilitaryStatus: number | null;

  @Column('text', {
    nullable: true,
    name: 'varContactCBOccupation'
  })
  varContactCBOccupation: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactCBMilitaryStatus'
  })
  intContactCBMilitaryStatus: number | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyQualified'
  })
  varContactQualifyQualified: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyNeedsMet'
  })
  varContactQualifyNeedsMet: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyQualifies'
  })
  varContactQualifyQualifies: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyMonthlyPayment'
  })
  varContactQualifyMonthlyPayment: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyCashOutlay'
  })
  varContactQualifyCashOutlay: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyCredit'
  })
  varContactQualifyCredit: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyNeetToSell'
  })
  varContactQualifyNeetToSell: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyCompetition'
  })
  varContactQualifyCompetition: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyFloorPlans'
  })
  varContactQualifyFloorPlans: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyHomeSite'
  })
  varContactQualifyHomeSite: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyActivityScheduled'
  })
  varContactQualifyActivityScheduled: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyMilestones'
  })
  varContactQualifyMilestones: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyReasons'
  })
  varContactQualifyReasons: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyStalling'
  })
  varContactQualifyStalling: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyTimeframe'
  })
  varContactQualifyTimeframe: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyPreferredLenderCommunication'
  })
  varContactQualifyPreferredLenderCommunication: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactQualifyDesignCenterCommunication'
  })
  varContactQualifyDesignCenterCommunication: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactHTSAddress1'
  })
  varContactHTSAddress1: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactHTSAddress2'
  })
  varContactHTSAddress2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactHTSCity'
  })
  varContactHTSCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactHTSState'
  })
  varContactHTSState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactHTSZipCode'
  })
  varContactHTSZipCode: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactHTSListingPrice'
  })
  intContactHTSListingPrice: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactHTSSurveyEstimatedEquity'
  })
  intContactHTSSurveyEstimatedEquity: number | null;

  @Column('text', {
    nullable: true,
    name: 'dteContactHTSMustSellBy'
  })
  dteContactHTSMustSellBy: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactHTSListed'
  })
  varContactHTSListed: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactHTSListingAgmtName'
  })
  varContactHTSListingAgmtName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactHTSListingAgmtPhone'
  })
  varContactHTSListingAgmtPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtContactHTSComments'
  })
  txtContactHTSComments: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactCommunityOfInterestID'
  })
  intContactCommunityOfInterestID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactCommunityOfInterestID2'
  })
  intContactCommunityOfInterestID2: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactCommunityOfInterestID3'
  })
  intContactCommunityOfInterestID3: number | null;

  @Column('text', {
    nullable: true,
    default: () => "'0'",
    name: 'varContactLocationOfInterestID1'
  })
  varContactLocationOfInterestID1: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'0'",
    name: 'varContactLocationOfInterestID2'
  })
  varContactLocationOfInterestID2: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'0'",
    name: 'varContactLocationOfInterestID3'
  })
  varContactLocationOfInterestID3: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactRelocatingDate'
  })
  dteContactRelocatingDate: Date | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactSurveyBaths'
  })
  intContactSurveyBaths: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactID_OSC'
  })
  intContactID_OSC: number | null;

  @Column('integer', {
    nullable: false,
    name: 'intContactCommunityProjectID'
  })
  intContactCommunityProjectID: number;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactWalkInDate'
  })
  dteContactWalkInDate: Date | null;

  @Column('text', {
    nullable: true,
    default: () => "'0'",
    name: 'varContactTrafficSourceSecondary'
  })
  varContactTrafficSourceSecondary: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'0'",
    name: 'varContactTrafficSourceTertiary'
  })
  varContactTrafficSourceTertiary: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'true',
    name: 'bContactCommentsTabShow'
  })
  bContactCommentsTabShow: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'true',
    name: 'bContactHomeToSellTabShow'
  })
  bContactHomeToSellTabShow: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'true',
    name: 'bContactQualifyTabShow'
  })
  bContactQualifyTabShow: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'true',
    name: 'bContactRealtorTabShow'
  })
  bContactRealtorTabShow: boolean | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'true',
    name: 'bContactRegistrationTabShow'
  })
  bContactRegistrationTabShow: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'intContactQualifyTotal'
  })
  intContactQualifyTotal: number | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bContactSentToSS'
  })
  bContactSentToSS: boolean;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactSentToSSDate'
  })
  dteContactSentToSSDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteContactModifiedDate'
  })
  dteContactModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'tblContactSSID'
  })
  tblContactSSID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varContactHomePhoneTmp'
  })
  varContactHomePhoneTmp: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactWorkPhoneTmp'
  })
  varContactWorkPhoneTmp: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactMobilePhoneTmp'
  })
  varContactMobilePhoneTmp: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactHomePhone_bak'
  })
  varContactHomePhone_bak: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactWorkPhone_bak'
  })
  varContactWorkPhone_bak: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactMobilePhone_bak'
  })
  varContactMobilePhone_bak: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bContactAutomatedEmailTabShow'
  })
  bContactAutomatedEmailTabShow: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bContactBuildYourHomeSent'
  })
  bContactBuildYourHomeSent: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bContactDepartureHomeConsultationSent'
  })
  bContactDepartureHomeConsultationSent: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bContactHomesiteDemonstrationSent'
  })
  bContactHomesiteDemonstrationSent: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bContactHomesiteReservationSent'
  })
  bContactHomesiteReservationSent: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bContactLenderConsultationSent'
  })
  bContactLenderConsultationSent: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bContactModelDemonstrationSent'
  })
  bContactModelDemonstrationSent: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bContactMyEmmaMemberOptIn'
  })
  bContactMyEmmaMemberOptIn: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bContactOwnershipEstimateSent'
  })
  bContactOwnershipEstimateSent: boolean;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactCommentsModifiedDate'
  })
  dteContactCommentsModifiedDate: Date | null;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyActivityScheduledScore'
  })
  intContactQualifyActivityScheduledScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyCashOutlayScore'
  })
  intContactQualifyCashOutlayScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyCompetitionScore'
  })
  intContactQualifyCompetitionScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyCreditScore'
  })
  intContactQualifyCreditScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyDesignCenterCommunicationScore'
  })
  intContactQualifyDesignCenterCommunicationScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyFloorPlansScore'
  })
  intContactQualifyFloorPlansScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyHomeSiteScore'
  })
  intContactQualifyHomeSiteScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyMilestonesScore'
  })
  intContactQualifyMilestonesScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyMonthlyPaymentScore'
  })
  intContactQualifyMonthlyPaymentScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyNeedsMetScore'
  })
  intContactQualifyNeedsMetScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyNeetToSellScore'
  })
  intContactQualifyNeetToSellScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyPreferredLenderCommunicationScore'
  })
  intContactQualifyPreferredLenderCommunicationScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyQualifiedScore'
  })
  intContactQualifyQualifiedScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyQualifiesScore'
  })
  intContactQualifyQualifiesScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyReasonsScore'
  })
  intContactQualifyReasonsScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyStallingScore'
  })
  intContactQualifyStallingScore: number;

  @Column('integer', {
    nullable: false,
    name: 'intContactQualifyTimeframeScore'
  })
  intContactQualifyTimeframeScore: number;

  @Column('text', {
    nullable: true,
    default: () => "'No Answer'",
    name: 'varContactBuildYourHome'
  })
  varContactBuildYourHome: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'No Answer'",
    name: 'varContactDepartureHomeConsultation'
  })
  varContactDepartureHomeConsultation: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'No Answer'",
    name: 'varContactHomesiteDemonstration'
  })
  varContactHomesiteDemonstration: string;

  @Column('text', {
    nullable: true,
    default: () => "'No Answer'",
    name: 'varContactHomesiteReservation'
  })
  varContactHomesiteReservation: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'No Answer'",
    name: 'varContactLenderConsultation'
  })
  varContactLenderConsultation: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'No Answer'",
    name: 'varContactModelDemonstration'
  })
  varContactModelDemonstration: string;

  @Column('text', {
    nullable: true,
    name: 'varContactMyEmmaMemberID'
  })
  varContactMyEmmaMemberID: string | null;

  @Column('text', {
    nullable: true,
    name: 'varContactMyEmmaMemberStatus'
  })
  varContactMyEmmaMemberStatus: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'No Answer'",
    name: 'varContactOwnershipEstimate'
  })
  varContactOwnershipEstimate: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'No Answer'",
    name: 'varContactSelectModelHomesite'
  })
  varContactSelectModelHomesite: string;

  @Column('integer', {
    nullable: true,
    name: 'intContactID_org'
  })
  intContactID_org: number | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteContactCreatedFromDupeDate'
  })
  dteContactCreatedFromDupeDate: Date | null;

  @Column('text', {
    nullable: false,
    default: () => "'NA'",
    name: 'varContactSurveyPrimarySecondaryResidence'
  })
  varContactSurveyPrimarySecondaryResidence: string;

  @Column('text', {
    nullable: true,
    name: 'varContactSurveyWorking'
  })
  varContactSurveyWorking: string | null;

  @OneToMany(
    type => tblContactAutomatedEmailCancelled,
    tblContactAutomatedEmailCancelled =>
      tblContactAutomatedEmailCancelled.intContactAutomatedEmailCancelledContact,
    { onDelete: 'CASCADE' }
  )
  tblContactAutomatedEmailCancelleds: tblContactAutomatedEmailCancelled[];

  @OneToMany(
    type => tblContactAutomatedEmailPaused,
    tblContactAutomatedEmailPaused =>
      tblContactAutomatedEmailPaused.intContactAutomatedEmailPausedContact,
    { onDelete: 'CASCADE' }
  )
  tblContactAutomatedEmailPauseds: tblContactAutomatedEmailPaused[];

  @OneToMany(
    type => tblContactAutomatedEmailScheduled,
    tblContactAutomatedEmailScheduled =>
      tblContactAutomatedEmailScheduled.intContactAutomatedEmailScheduledContact,
    { onDelete: 'CASCADE' }
  )
  tblContactAutomatedEmailScheduleds: tblContactAutomatedEmailScheduled[];

  @OneToMany(
    type => tblContactAutomatedEmailSent,
    tblContactAutomatedEmailSent =>
      tblContactAutomatedEmailSent.intContactAutomatedEmailSentContact,
    { onDelete: 'CASCADE' }
  )
  tblContactAutomatedEmailSents: tblContactAutomatedEmailSent[];

  @OneToMany(
    type => tblFPUserContact,
    tblFPUserContact => tblFPUserContact.intFPuserContactContact,
    { onDelete: 'CASCADE' }
  )
  tblFpUserContacts: tblFPUserContact[];

  @OneToMany(type => tblHomeEstimate, tblHomeEstimate => tblHomeEstimate.intHomeEstimateContact, {
    onDelete: 'SET NULL'
  })
  tblHomeEstimates: tblHomeEstimate[];
}
