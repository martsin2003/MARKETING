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

@Entity('tblMapZipColor', { schema: 'public' })
export class tblMapZipColor {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intColorID'
  })
  intColorID: string;

  @Column('text', {
    nullable: false,
    name: 'varColor'
  })
  varColor: string;

  @Column('text', {
    nullable: false,
    name: 'varZipCode'
  })
  varZipCode: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dtCreated'
  })
  dtCreated: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dtUpdated'
  })
  dtUpdated: Date;

  @Column('integer', {
    nullable: true,
    name: 'intCommunityID'
  })
  intCommunityID: number | null;
}
