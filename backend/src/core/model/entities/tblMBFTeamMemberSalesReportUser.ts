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
import { tblMBFTeamMember } from './tblMBFTeamMember';
import { tblSalesReportUser } from './tblSalesReportUser';

@Entity('tblMBFTeamMemberSalesReportUser', { schema: 'public' })
@Index(
  'idx_18726_IX_tblMBFTeamMemberSalesReportUser',
  ['intMbfTeamMemberSalesReportUserMbfTeamMember', 'intMbfTeamMemberSalesReportUserSalesRepUser'],
  { unique: true }
)
export class tblMBFTeamMemberSalesReportUser {
  @ManyToOne(
    type => tblMBFTeamMember,
    tblMBFTeamMember => tblMBFTeamMember.tblMbfTeamMemberSalesReportUsers,
    { primary: true, nullable: false }
  )
  @JoinColumn({ name: 'intMBFTeamMemberSalesReportUserMBFTeamMemberID' })
  intMbfTeamMemberSalesReportUserMbfTeamMember: tblMBFTeamMember | null;

  @ManyToOne(
    type => tblSalesReportUser,
    tblSalesReportUser => tblSalesReportUser.tblMbfTeamMemberSalesReportUsers,
    { primary: true, nullable: false }
  )
  @JoinColumn({ name: 'intMBFTeamMemberSalesReportUserSalesRepUserID' })
  intMbfTeamMemberSalesReportUserSalesRepUser: tblSalesReportUser | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFTeamMemberSalesReportUserCreatedDate'
  })
  dteMBFTeamMemberSalesReportUserCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteMBFTeamMemberSalesReportUserModifiedDate'
  })
  dteMBFTeamMemberSalesReportUserModifiedDate: Date;
}
