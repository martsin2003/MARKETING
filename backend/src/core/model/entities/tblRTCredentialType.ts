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

@Entity('tblRTCredentialType', { schema: 'public' })
export class tblRTCredentialType {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTCredentialTypeID'
  })
  intRTCredentialTypeID: string;

  @Column('text', {
    nullable: true,
    name: 'varRTCredentialType'
  })
  varRTCredentialType: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'true',
    name: 'bRTCredentialTypeDisplay'
  })
  bRTCredentialTypeDisplay: boolean | null;

  @Column('integer', {
    nullable: false,
    name: 'intRTCredentialTypeOrder'
  })
  intRTCredentialTypeOrder: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTCredentialTypeCreatedDate'
  })
  dteRTCredentialTypeCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTCredentialTypeModifiedDate'
  })
  dteRTCredentialTypeModifiedDate: Date;
}
