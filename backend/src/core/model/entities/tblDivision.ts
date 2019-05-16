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

@Entity('tblDivision', { schema: 'public' })
export class tblDivision {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intDivisionID'
  })
  intDivisionID: string;

  @Column('text', {
    nullable: true,
    name: 'varDivision'
  })
  varDivision: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bDivisionShow'
  })
  bDivisionShow: boolean | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bDivisionArchived'
  })
  bDivisionArchived: boolean;
}
