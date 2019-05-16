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

@Entity('tblState', { schema: 'public' })
export class tblState {
  @Column('text', {
    nullable: false,
    primary: true,
    name: 'txtState'
  })
  txtState: string;

  @Column('text', {
    nullable: true,
    name: 'txtStateName'
  })
  txtStateName: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtStateSeoName'
  })
  txtStateSeoName: string | null;
}
