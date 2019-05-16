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

@Entity('tblQualifyHomeSite', { schema: 'public' })
export class tblQualifyHomeSite {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intQualifyHomeSiteID'
  })
  intQualifyHomeSiteID: string;

  @Column('text', {
    nullable: true,
    name: 'varQualifyHomeSiteValue'
  })
  varQualifyHomeSiteValue: string | null;

  @Column('text', {
    nullable: true,
    name: 'varQualifyHomeSiteDisplay'
  })
  varQualifyHomeSiteDisplay: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intQualifyHomeSiteSort'
  })
  intQualifyHomeSiteSort: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intQualifyHomeSiteScore'
  })
  intQualifyHomeSiteScore: number | null;
}
