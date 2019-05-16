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

@Entity('tblTemplateCategory', { schema: 'public' })
export class tblTemplateCategory {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intTemplateCategoryID'
  })
  intTemplateCategoryID: string;

  @Column('text', {
    nullable: true,
    name: 'varTemplateCategory'
  })
  varTemplateCategory: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'false',
    name: 'bTemplateCategoryEM'
  })
  bTemplateCategoryEM: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'intTemplateCommunityID'
  })
  intTemplateCommunityID: number | null;
}
