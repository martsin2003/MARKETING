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

@Entity('tblMilitaryBases', { schema: 'public' })
export class tblMilitaryBases {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intMilitaryBaseID'
  })
  intMilitaryBaseID: string;

  @Column('text', {
    nullable: true,
    name: 'varMilitaryBaseLat'
  })
  varMilitaryBaseLat: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMilitaryBaseLong'
  })
  varMilitaryBaseLong: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMilitaryBaseTitle'
  })
  varMilitaryBaseTitle: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMilitaryBaseDescription'
  })
  varMilitaryBaseDescription: string | null;
}
