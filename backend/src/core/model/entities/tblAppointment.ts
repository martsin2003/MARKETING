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

@Entity('tblAppointment', { schema: 'public' })
export class tblAppointment {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intAppointmentID'
  })
  intAppointmentID: string;

  @Column('integer', {
    nullable: true,
    name: 'intAppointmentContactID'
  })
  intAppointmentContactID: number | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteAppointmentDate'
  })
  dteAppointmentDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varAppointmentTime'
  })
  varAppointmentTime: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intAppointmentAppointmentTypeID'
  })
  intAppointmentAppointmentTypeID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intAppointmentSalesRep'
  })
  intAppointmentSalesRep: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intAppointmentScheduledBy'
  })
  intAppointmentScheduledBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intAppointmentAppointmentStatusID'
  })
  intAppointmentAppointmentStatusID: number | null;

  @Column('text', {
    nullable: true,
    name: 'txtAppointmentComments'
  })
  txtAppointmentComments: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intAppointmentAppointmentCommunityAddedID'
  })
  intAppointmentAppointmentCommunityAddedID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intAppointmentID_Org'
  })
  intAppointmentID_Org: number | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteAppointmentCreatedDate'
  })
  dteAppointmentCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteAppointmentModifiedDate'
  })
  dteAppointmentModifiedDate: Date;
}
