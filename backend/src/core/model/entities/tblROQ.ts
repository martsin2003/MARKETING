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

@Entity('tblROQ', { schema: 'public' })
export class tblROQ {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intROQPageID'
  })
  intROQPageID: string;

  @Column('text', {
    nullable: true,
    name: 'varROQName'
  })
  varROQName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varROQBroker'
  })
  varROQBroker: string | null;

  @Column('text', {
    nullable: true,
    name: 'varROQPhone'
  })
  varROQPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varROQEmail'
  })
  varROQEmail: string | null;

  @Column('text', {
    nullable: true,
    name: 'varROQWebsite'
  })
  varROQWebsite: string | null;

  @Column('text', {
    nullable: true,
    name: 'varROQPhoto'
  })
  varROQPhoto: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtROQBio'
  })
  txtROQBio: string | null;
}
