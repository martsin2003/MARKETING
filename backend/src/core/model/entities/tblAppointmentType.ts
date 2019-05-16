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

@Entity('tblAppointmentType', { schema: 'public' })
export class tblAppointmentType {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intAppointmentTypeID'
  })
  intAppointmentTypeID: string;

  @Column('text', {
    nullable: false,
    name: 'varAppointmentType'
  })
  varAppointmentType: string;

  @Column('integer', {
    nullable: true,
    name: 'intAppointmentTypeSort'
  })
  intAppointmentTypeSort: number | null;
}
