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

@Entity('tblPrimaryContact', { schema: 'public' })
export class tblPrimaryContact {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intPrimaryContactID'
  })
  intPrimaryContactID: string;

  @Column('text', {
    nullable: true,
    name: 'varPrimaryContact'
  })
  varPrimaryContact: string | null;
}
