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

@Entity('tblSiteTrafficType', { schema: 'public' })
export class tblSiteTrafficType {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intSiteTrafficTypeId'
  })
  intSiteTrafficTypeId: string;

  @Column('text', {
    nullable: true,
    name: 'varSiteTrafficTypeName'
  })
  varSiteTrafficTypeName: string | null;
}
