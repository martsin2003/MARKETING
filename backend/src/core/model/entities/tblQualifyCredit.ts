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

@Entity('tblQualifyCredit', { schema: 'public' })
export class tblQualifyCredit {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intQualifyCreditID'
  })
  intQualifyCreditID: string;

  @Column('text', {
    nullable: true,
    name: 'varQualifyCreditValue'
  })
  varQualifyCreditValue: string | null;

  @Column('text', {
    nullable: true,
    name: 'varQualifyCreditDisplay'
  })
  varQualifyCreditDisplay: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intQualifyCreditSort'
  })
  intQualifyCreditSort: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intQualifyCreditScore'
  })
  intQualifyCreditScore: number | null;
}
