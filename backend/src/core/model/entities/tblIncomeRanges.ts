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

@Entity('tblIncomeRanges', { schema: 'public' })
export class tblIncomeRanges {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intIncomeRangeID'
  })
  intIncomeRangeID: string;

  @Column('text', {
    nullable: true,
    name: 'varIncomeRangeValue'
  })
  varIncomeRangeValue: string | null;
}
