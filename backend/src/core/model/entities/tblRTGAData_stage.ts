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

@Entity('tblRTGAData_stage', { schema: 'public' })
export class tblRTGAData_stage {
  @PrimaryColumn('integer', {
    nullable: false,
    name: 'metricID'
  })
  metricID: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dataDate'
  })
  dataDate: Date;

  @Column('integer', {
    nullable: false,
    name: 'dataValue'
  })
  dataValue: number;
}
