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

@Entity('tblEnergySavingsEfficiencyOptions', { schema: 'public' })
export class tblEnergySavingsEfficiencyOptions {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intEnergySavingsEfficiencyOptionsID'
  })
  intEnergySavingsEfficiencyOptionsID: string;

  @Column('text', {
    nullable: true,
    name: 'varEnergySavingsEfficiencyOptionsBrochure'
  })
  varEnergySavingsEfficiencyOptionsBrochure: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtEnergySavingsEfficiencyOptionsBlock2'
  })
  txtEnergySavingsEfficiencyOptionsBlock2: string | null;
}
