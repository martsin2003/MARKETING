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
import { tblRTGlossaryTerm } from './tblRTGlossaryTerm';

@Entity('tblRTGlossarySection', { schema: 'public' })
@Index(
  'idx_20168_IX_tblRTGlossarySection',
  [
    'intRTGlossarySectionDisplayOrder',
    'intRTGlossarySectionID',
    'varRTGlossarySectionName',
    'varRTGlossarySectionStatus'
  ],
  { unique: true }
)
export class tblRTGlossarySection {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTGlossarySectionID'
  })
  intRTGlossarySectionID: string;

  @Column('text', {
    nullable: false,
    name: 'varRTGlossarySectionName'
  })
  varRTGlossarySectionName: string;

  @Column('text', {
    nullable: false,
    name: 'varRTGlossarySectionDisplayName'
  })
  varRTGlossarySectionDisplayName: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varRTGlossarySectionStatus'
  })
  varRTGlossarySectionStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGlossarySectionCreatedDate'
  })
  dteRTGlossarySectionCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGlossarySectionModifiedDate'
  })
  dteRTGlossarySectionModifiedDate: Date;

  @Column('integer', {
    nullable: false,
    name: 'intRTGlossarySectionDisplayOrder'
  })
  intRTGlossarySectionDisplayOrder: number;

  @ManyToMany(
    type => tblRTGlossaryTerm,
    tblRTGlossaryTerm => tblRTGlossaryTerm.tblRtGlossarySections
  )
  tblRtGlossaryTerms: tblRTGlossaryTerm[];
}
