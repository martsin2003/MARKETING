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

@Entity('tblQualifyNeetToSell', { schema: 'public' })
export class tblQualifyNeetToSell {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intQualifyNeetToSellID'
  })
  intQualifyNeetToSellID: string;

  @Column('text', {
    nullable: true,
    name: 'varQualifyNeetToSellValue'
  })
  varQualifyNeetToSellValue: string | null;

  @Column('text', {
    nullable: true,
    name: 'varQualifyNeetToSellDisplay'
  })
  varQualifyNeetToSellDisplay: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intQualifyNeetToSellSort'
  })
  intQualifyNeetToSellSort: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intQualifyNeetToSellScore'
  })
  intQualifyNeetToSellScore: number | null;
}
