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

@Entity('tblContactAutomatedEmailCancelled', { schema: 'public' })
@Index(
  'idx_17192_IX_tblContactAutomatedEmailCancelled',
  [
    'dteContactAutomatedEmailCancelledCancelledDate',
    'intContactAutomatedEmailCancelledContactAutomatedEmail',
    'intContactAutomatedEmailCancelledContact',
    'intContactAutomatedEmailCancelledID'
  ],
  { unique: true }
)
export class tblContactAutomatedEmailCancelled {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intContactAutomatedEmailCancelledID'
  })
  intContactAutomatedEmailCancelledID: string;

  @ManyToOne(type => tblContact, tblContact => tblContact.tblContactAutomatedEmailCancelleds, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intContactAutomatedEmailCancelledContactID' })
  intContactAutomatedEmailCancelledContact: tblContact | null;

  @ManyToOne(
    type => tblContactAutomatedEmail,
    tblContactAutomatedEmail => tblContactAutomatedEmail.tblContactAutomatedEmailCancelleds,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intContactAutomatedEmailCancelledContactAutomatedEmailID' })
  intContactAutomatedEmailCancelledContactAutomatedEmail: tblContactAutomatedEmail | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteContactAutomatedEmailCancelledCancelledDate'
  })
  dteContactAutomatedEmailCancelledCancelledDate: Date;
}
