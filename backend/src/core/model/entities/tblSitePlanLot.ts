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

@Entity('tblSitePlanLot', { schema: 'public' })
export class tblSitePlanLot {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intSitePlanLotID'
  })
  intSitePlanLotID: string;

  @Column('integer', {
    nullable: true,
    name: 'intSitePlanLotSitePlanID'
  })
  intSitePlanLotSitePlanID: number | null;

  @Column('text', {
    nullable: true,
    name: 'varSitePlanLot'
  })
  varSitePlanLot: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSitePlanLotStatus'
  })
  varSitePlanLotStatus: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSitePlanLotAddress'
  })
  varSitePlanLotAddress: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSitePlanLotCity'
  })
  varSitePlanLotCity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSitePlanLotState'
  })
  varSitePlanLotState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSitePlanLotZip'
  })
  varSitePlanLotZip: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSitePlanLotPrice'
  })
  varSitePlanLotPrice: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSitePlanLotSqft'
  })
  varSitePlanLotSqft: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSitePlanLotAcreage'
  })
  varSitePlanLotAcreage: string | null;

  @Column('text', {
    nullable: true,
    default: () => "'yes'",
    name: 'varSitePlanLotWalkout'
  })
  varSitePlanLotWalkout: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtSitePlanLotDescription'
  })
  txtSitePlanLotDescription: string | null;

  @Column('text', {
    nullable: true,
    name: 'varSitePlanLotImage'
  })
  varSitePlanLotImage: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intSitePlanLotLeft'
  })
  intSitePlanLotLeft: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intSitePlanLotTop'
  })
  intSitePlanLotTop: number | null;
}
