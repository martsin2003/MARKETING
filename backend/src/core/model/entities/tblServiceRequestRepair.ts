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

@Entity('tblServiceRequestRepair', { schema: 'public' })
export class tblServiceRequestRepair {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intServiceRequestRepairID'
  })
  intServiceRequestRepairID: string;

  @Column('integer', {
    nullable: true,
    name: 'intServiceRequestRepairServiceRequestID'
  })
  intServiceRequestRepairServiceRequestID: number | null;

  @Column('text', {
    nullable: true,
    name: 'txtServiceRequestRepair'
  })
  txtServiceRequestRepair: string | null;
}
