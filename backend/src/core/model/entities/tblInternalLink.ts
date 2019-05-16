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

@Entity('tblInternalLink', { schema: 'public' })
export class tblInternalLink {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intInternalLinkID'
  })
  intInternalLinkID: string;

  @Column('text', {
    nullable: true,
    name: 'varInternalLinkURL'
  })
  varInternalLinkURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varInternalLinkTxt'
  })
  varInternalLinkTxt: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteInternalLinkCreatedDate'
  })
  dteInternalLinkCreatedDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteInternalLinkModifiedDate'
  })
  dteInternalLinkModifiedDate: Date | null;
}
