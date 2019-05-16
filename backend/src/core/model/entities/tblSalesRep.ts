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

@Entity('tblSalesRep', { schema: 'public' })
export class tblSalesRep {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intSalesRepID'
  })
  intSalesRepID: string;

  @Column('text', {
    nullable: true,
    name: 'varSalesRepEmail'
  })
  varSalesRepEmail: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSalesRepPhone'
  })
  varSalesRepPhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSalesRepFirstName'
  })
  varSalesRepFirstName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSalesRepLastName'
  })
  varSalesRepLastName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSalesRepMobilePhone'
  })
  varSalesRepMobilePhone: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSalesRepFax'
  })
  varSalesRepFax: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSalesRepComlist'
  })
  varSalesRepComlist: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSalesRepTile'
  })
  varSalesRepTile: string | null;

  @Column('integer', {
    nullable: true,
    name: 'lngUserID'
  })
  lngUserID: number | null;

  @Column('integer', {
    nullable: true,
    name: 'lngUserLevel'
  })
  lngUserLevel: number | null;

  @Column('text', {
    nullable: true,
    name: 'varSalesRepPhoneExt'
  })
  varSalesRepPhoneExt: string | null;
}
