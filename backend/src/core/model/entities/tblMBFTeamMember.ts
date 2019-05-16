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
import { tblMBFTeamMemberType } from './tblMBFTeamMemberType';
import { tblMBFTeamMemberCommunityProject } from './tblMBFTeamMemberCommunityProject';
import { tblMBFTeamMemberLot } from './tblMBFTeamMemberLot';
import { tblMBFTeamMemberSalesReportUser } from './tblMBFTeamMemberSalesReportUser';

@Entity('tblMBFTeamMember', { schema: 'public' })
@Index(
  'idx_18704_IX_tblMBFTeamMember',
  [
    'bMBFTeamMemberIsCompany',
    'bMBFTeamMemberSMSForMobile',
    'dteMBFTeamMemberModifiedDate',
    'intMBFTeamMemberID',
    'intMbfTeamMemberType',
    'varMBFTeamMemberCompanyName',
    'varMBFTeamMemberEmailAddress',
    'varMBFTeamMemberFirstName',
    'varMBFTeamMemberLastName',
    'varMBFTeamMemberStatus',
    'varMBFTeamMemberTitle'
  ],
  { unique: true }
)
export class tblMBFTeamMember {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFTeamMemberID'
  })
  intMBFTeamMemberID: string;

  @ManyToOne(
    type => tblMBFTeamMemberType,
    tblMBFTeamMemberType => tblMBFTeamMemberType.tblMbfTeamMembers,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intMBFTeamMemberTypeID' })
  intMbfTeamMemberType: tblMBFTeamMemberType | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFTeamMemberFirstName'
  })
  varMBFTeamMemberFirstName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFTeamMemberLastName'
  })
  varMBFTeamMemberLastName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFTeamMemberTitle'
  })
  varMBFTeamMemberTitle: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFTeamMemberWorkPhone'
  })
  varMBFTeamMemberWorkPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFTeamMemberMobilePhone'
  })
  varMBFTeamMemberMobilePhone: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'true',
    name: 'bMBFTeamMemberSMSForMobile'
  })
  bMBFTeamMemberSMSForMobile: boolean;

  @Column('text', {
    nullable: true,
    name: 'varMBFTeamMemberEmailAddress'
  })
  varMBFTeamMemberEmailAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFTeamMemberDescription'
  })
  varMBFTeamMemberDescription: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFTeamMemberImageFile'
  })
  varMBFTeamMemberImageFile: string | null;

  @Column('text', {
    nullable: false,
    default: () => "'Active'",
    name: 'varMBFTeamMemberStatus'
  })
  varMBFTeamMemberStatus: string;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bMBFTeamMemberIsCompany'
  })
  bMBFTeamMemberIsCompany: boolean;

  @Column('text', {
    nullable: true,
    name: 'varMBFTeamMemberCompanyName'
  })
  varMBFTeamMemberCompanyName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMBFTeamMemberCompanyURL'
  })
  varMBFTeamMemberCompanyURL: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFTeamMemberCreatedDate'
  })
  dteMBFTeamMemberCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFTeamMemberModifiedDate'
  })
  dteMBFTeamMemberModifiedDate: Date;

  @OneToMany(
    type => tblMBFTeamMemberCommunityProject,
    tblMBFTeamMemberCommunityProject =>
      tblMBFTeamMemberCommunityProject.intMbfTeamMemberCommunityProjectTeamMember,
    { onDelete: 'CASCADE' }
  )
  tblMbfTeamMemberCommunityProjects: tblMBFTeamMemberCommunityProject[];

  @OneToMany(
    type => tblMBFTeamMemberLot,
    tblMBFTeamMemberLot => tblMBFTeamMemberLot.intMbfTeamMemberLotTeamMember,
    { onDelete: 'CASCADE' }
  )
  tblMbfTeamMemberLots: tblMBFTeamMemberLot[];

  @OneToMany(
    type => tblMBFTeamMemberSalesReportUser,
    tblMBFTeamMemberSalesReportUser =>
      tblMBFTeamMemberSalesReportUser.intMbfTeamMemberSalesReportUserMbfTeamMember
  )
  tblMbfTeamMemberSalesReportUsers: tblMBFTeamMemberSalesReportUser[];
}
