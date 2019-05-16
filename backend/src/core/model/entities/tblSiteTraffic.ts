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

@Entity('tblSiteTraffic', { schema: 'public' })
export class tblSiteTraffic {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intSiteTrafficId'
  })
  intSiteTrafficId: string;

  @Column('integer', {
    nullable: true,
    name: 'intSiteTrafficTypeId'
  })
  intSiteTrafficTypeId: number | null;

  @Column('text', {
    nullable: true,
    name: 'varSiteTrafficSource'
  })
  varSiteTrafficSource: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intSiteTrafficOrder'
  })
  intSiteTrafficOrder: number | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'true',
    name: 'bSiteTrafficDisplayOnWebsite'
  })
  bSiteTrafficDisplayOnWebsite: boolean | null;
}
