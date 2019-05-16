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

@Entity('tblLisaSechristPage', { schema: 'public' })
export class tblLisaSechristPage {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intLisaSechristPageID'
  })
  intLisaSechristPageID: string;

  @Column('text', {
    nullable: true,
    name: 'varLisaSechristPageText'
  })
  varLisaSechristPageText: string | null;
}
