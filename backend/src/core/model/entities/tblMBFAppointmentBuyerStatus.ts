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
import { tblMBFAppointmentBuyer } from './tblMBFAppointmentBuyer';

@Entity('tblMBFAppointmentBuyerStatus', { schema: 'public' })
export class tblMBFAppointmentBuyerStatus {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMBFAppointmentBuyerStatusID'
  })
  intMBFAppointmentBuyerStatusID: string;

  @Column('text', {
    nullable: false,
    name: 'varMBFAppointmentBuyerStatus'
  })
  varMBFAppointmentBuyerStatus: string;

  @Column('integer', {
    nullable: false,
    name: 'intMBFAppointmentBuyerStatusSort'
  })
  intMBFAppointmentBuyerStatusSort: number;

  @OneToMany(
    type => tblMBFAppointmentBuyer,
    tblMBFAppointmentBuyer => tblMBFAppointmentBuyer.intMbfAppointmentBuyerStatus,
    { onDelete: 'CASCADE' }
  )
  tblMbfAppointmentBuyers: tblMBFAppointmentBuyer[];
}
