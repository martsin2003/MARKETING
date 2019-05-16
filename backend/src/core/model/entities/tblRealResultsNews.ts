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

@Entity('tblRealResultsNews', { schema: 'public' })
export class tblRealResultsNews {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRealResultsNewsID'
  })
  intRealResultsNewsID: string;

  @Column('text', {
    nullable: true,
    name: 'varRealResultsNewsTitle'
  })
  varRealResultsNewsTitle: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRealResultsNewsSubtitle'
  })
  varRealResultsNewsSubtitle: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRealResultsNewsDescription'
  })
  varRealResultsNewsDescription: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'Active'",
    name: 'varRealResultsNewsStatus'
  })
  varRealResultsNewsStatus: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteRealResultsNewsEntryDate'
  })
  dteRealResultsNewsEntryDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteRealResultsNewsDateCreated'
  })
  dteRealResultsNewsDateCreated: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteRealResultsNewsDateModified'
  })
  dteRealResultsNewsDateModified: Date | null;

  @Column('integer', {
    nullable: true,
    name: 'intRealResultsNewsOrder'
  })
  intRealResultsNewsOrder: number | null;
}
