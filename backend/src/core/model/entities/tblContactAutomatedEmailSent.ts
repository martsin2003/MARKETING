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
import { tblContact } from './tblContact';
import { tblContactAutomatedEmail } from './tblContactAutomatedEmail';

@Entity('tblContactAutomatedEmailSent', { schema: 'public' })
export class tblContactAutomatedEmailSent {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intContactAutomatedEmailSentID'
  })
  intContactAutomatedEmailSentID: string;

  @ManyToOne(type => tblContact, tblContact => tblContact.tblContactAutomatedEmailSents, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intContactAutomatedEmailSentContactID' })
  intContactAutomatedEmailSentContact: tblContact | null;

  @ManyToOne(
    type => tblContactAutomatedEmail,
    tblContactAutomatedEmail => tblContactAutomatedEmail.tblContactAutomatedEmailSents,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intContactAutomatedEmailSentContactAutomatedEmailID' })
  intContactAutomatedEmailSentContactAutomatedEmail: tblContactAutomatedEmail | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteContactAutomatedEmailSentDate'
  })
  dteContactAutomatedEmailSentDate: Date;
}
