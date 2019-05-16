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

@Entity('tblPageInfo', { schema: 'public' })
export class tblPageInfo {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intPageID'
  })
  intPageID: string;

  @Column('text', {
    nullable: false,
    name: 'varPageName'
  })
  varPageName: string;

  @Column('text', {
    nullable: false,
    default: () => "'Arlington Place'",
    name: 'varPageHeader'
  })
  varPageHeader: string;

  @Column('text', {
    nullable: true,
    name: 'varPageRewrite'
  })
  varPageRewrite: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMetaTitle'
  })
  varMetaTitle: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMetaKeywords'
  })
  varMetaKeywords: string | null;

  @Column('text', {
    nullable: true,
    name: 'varMetaDescription'
  })
  varMetaDescription: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSEOHeader'
  })
  varSEOHeader: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSEOBlurb'
  })
  varSEOBlurb: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bArchive'
  })
  bArchive: boolean | null;

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

  @Column('text', {
    nullable: true,
    name: 'varPageType'
  })
  varPageType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSection'
  })
  varSection: string | null;

  @Column('text', {
    nullable: true,
    name: 'varPageAppendedData'
  })
  varPageAppendedData: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intPageFlagID1'
  })
  intPageFlagID1: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intPageFlagID2'
  })
  intPageFlagID2: number | null;

  @Column('boolean', {
    nullable: true,
    name: 'bPageTabletSite'
  })
  bPageTabletSite: boolean | null;
}
