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

@Entity('tblPlanProjectStage', { schema: 'public' })
export class tblPlanProjectStage {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intPlanProjectStageID'
  })
  intPlanProjectStageID: string;

  @Column('text', {
    nullable: true,
    name: 'varPlanCode'
  })
  varPlanCode: string | null;

  @Column('text', {
    nullable: true,
    name: 'varProjectCode'
  })
  varProjectCode: string | null;
}
