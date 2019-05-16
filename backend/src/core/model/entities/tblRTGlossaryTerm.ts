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
import { tblRTGlossarySection } from './tblRTGlossarySection';

@Entity('tblRTGlossaryTerm', { schema: 'public' })
@Index(
  'idx_20181_IX_tblRTGlossaryTerm',
  ['intRTGlossaryTermID', 'varRTGlossaryTerm', 'varRTGlossaryTermStatus'],
  { unique: true }
)
export class tblRTGlossaryTerm {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTGlossaryTermID'
  })
  intRTGlossaryTermID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTGlossaryTerm'
  })
  varRTGlossaryTerm: string;

  @Column('text', {
    nullable: false,
    name: 'varRTGlossaryTermDisplay'
  })
  varRTGlossaryTermDisplay: string;

  @Column('text', {
    nullable: false,
    default: () => "'TBD'",
    name: 'varRTGlossaryTermDescription'
  })
  varRTGlossaryTermDescription: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varRTGlossaryTermStatus'
  })
  varRTGlossaryTermStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGlossaryTermCreatedDate'
  })
  dteRTGlossaryTermCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGlossaryTermModifiedDate'
  })
  dteRTGlossaryTermModifiedDate: Date;

  @ManyToMany(
    type => tblRTGlossarySection,
    tblRTGlossarySection => tblRTGlossarySection.tblRtGlossaryTerms,
    { nullable: false }
  )
  @JoinTable({ name: 'tblRTGlossarySectionTerm' })
  tblRtGlossarySections: tblRTGlossarySection[];
}
