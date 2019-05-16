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

@Entity('tblQualifyReasons', { schema: 'public' })
export class tblQualifyReasons {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intQualifyReasonsID'
  })
  intQualifyReasonsID: string;

  @Column('text', {
    nullable: true,
    name: 'varQualifyReasonsValue'
  })
  varQualifyReasonsValue: string | null;

  @Column('text', {
    nullable: true,
    name: 'varQualifyReasonsDisplay'
  })
  varQualifyReasonsDisplay: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intQualifyReasonsSort'
  })
  intQualifyReasonsSort: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intQualifyReasonsScore'
  })
  intQualifyReasonsScore: number | null;
}
