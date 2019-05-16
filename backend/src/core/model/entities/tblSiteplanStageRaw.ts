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

@Entity('tblSiteplanStageRaw', { schema: 'public' })
export class tblSiteplanStageRaw {
  @Column('text', {
    nullable: false,
    name: 'projectCode'
  })
  projectCode: string;

  @Column('text', {
    nullable: false,
    name: 'homesiteIdentifier'
  })
  homesiteIdentifier: string;

  @Column('double precision', {
    nullable: false,
    precision: 53,
    name: 'homesiteSize'
  })
  homesiteSize: number;

  @Column('text', {
    nullable: true,
    name: 'homesiteSizeType'
  })
  homesiteSizeType: string | null;

  @Column('numeric', {
    nullable: false,
    name: 'homesitePremium'
  })
  homesitePremium: string;

  @Column('text', {
    nullable: false,
    name: 'homesiteStatus'
  })
  homesiteStatus: string;

  @Column('text', {
    nullable: true,
    name: 'homesiteAddress'
  })
  homesiteAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'homesiteCity'
  })
  homesiteCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'homesiteState'
  })
  homesiteState: string | null;

  @Column('text', {
    nullable: true,
    name: 'homesiteZip'
  })
  homesiteZip: string | null;

  @Column('text', {
    nullable: true,
    name: 'homesiteBlock'
  })
  homesiteBlock: string | null;

  @Column('text', {
    nullable: true,
    name: 'homesiteDesc'
  })
  homesiteDesc: string | null;

  @Column('text', {
    nullable: true,
    name: 'homesiteImg'
  })
  homesiteImg: string | null;

  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intSiteplanStageRawID'
  })
  intSiteplanStageRawID: string;

  @Column('double precision', {
    nullable: false,
    precision: 53,
    name: 'homesiteLat'
  })
  homesiteLat: number;

  @Column('double precision', {
    nullable: false,
    precision: 53,
    name: 'homesiteLng'
  })
  homesiteLng: number;
}
