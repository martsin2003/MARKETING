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
import { tblFPUser } from './tblFPUser';
import { tblContact } from './tblContact';

@Entity('tblFPUserContact', { schema: 'public' })
export class tblFPUserContact {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPUserContactID'
  })
  intFPUserContactID: string;

  @ManyToOne(type => tblFPUser, tblFPUser => tblFPUser.tblFpUserContacts, { nullable: false })
  @JoinColumn({ name: 'intFPUserContactFPUserID' })
  intFpUserContactFpUser: tblFPUser | null;

  @ManyToOne(type => tblContact, tblContact => tblContact.tblFpUserContacts, {
    nullable: false,
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'intFPuserContactContactID' })
  intFPuserContactContact: tblContact | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPUserContactCreatedDate'
  })
  dteFPUserContactCreatedDate: Date;
}
