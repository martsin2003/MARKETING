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

@Entity('tblPresidentsPage', { schema: 'public' })
export class tblPresidentsPage {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intPresidentsPageID'
  })
  intPresidentsPageID: string;

  @Column('text', {
    nullable: true,
    name: 'varPresidentsPageText'
  })
  varPresidentsPageText: string | null;
}
