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
import { tblContactAutomatedEmail } from './tblContactAutomatedEmail';

@Entity('tblContactAutomatedEmailType', { schema: 'public' })
export class tblContactAutomatedEmailType {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intContactAutomatedEmailTypeID'
  })
  intContactAutomatedEmailTypeID: string;

  @Column('text', {
    nullable: false,
    name: 'varContactAutomatedEmailType'
  })
  varContactAutomatedEmailType: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varContactAutomatedEmailTypeStatus'
  })
  varContactAutomatedEmailTypeStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteContactAutomatedEmailTypeCreatedDate'
  })
  dteContactAutomatedEmailTypeCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteContactAutomatedEmailTypeModifiedDate'
  })
  dteContactAutomatedEmailTypeModifiedDate: Date;

  @OneToMany(
    type => tblContactAutomatedEmail,
    tblContactAutomatedEmail =>
      tblContactAutomatedEmail.intContactAutomatedEmailContactAutomatedEmailType,
    { onDelete: 'CASCADE' }
  )
  tblContactAutomatedEmails: tblContactAutomatedEmail[];
}
