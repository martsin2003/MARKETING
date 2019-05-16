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

@Entity('tblTemplate2', { schema: 'public' })
export class tblTemplate2 {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intTemplateID'
  })
  intTemplateID: string;

  @Column('text', {
    nullable: true,
    name: 'varTemplateTitle'
  })
  varTemplateTitle: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteTemplateDate'
  })
  dteTemplateDate: Date | null;

  @Column('text', {
    nullable: true,
    name: 'varTemplateFileName'
  })
  varTemplateFileName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varTemplateCommunityIDList'
  })
  varTemplateCommunityIDList: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intTemplateTemplateCategoryID'
  })
  intTemplateTemplateCategoryID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intCRMCommunityID'
  })
  intCRMCommunityID: number | null;

  @Column('double precision', {
    nullable: false,
    default: () => "'0'",
    precision: 53,
    name: 'fltTemplateFileSize'
  })
  fltTemplateFileSize: number;
}
