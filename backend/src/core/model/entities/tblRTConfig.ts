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

@Entity('tblRTConfig', { schema: 'public' })
export class tblRTConfig {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTConfigID'
  })
  intRTConfigID: string;

  @Column('integer', {
    nullable: false,
    name: 'intRTConfigNDGCompanyID'
  })
  intRTConfigNDGCompanyID: number;

  @Column('integer', {
    nullable: true,
    name: 'intRTConfigRTConfigID'
  })
  intRTConfigRTConfigID: number | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTConfigCreatedDate'
  })
  dteRTConfigCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTConfigModifiedDate'
  })
  dteRTConfigModifiedDate: Date;

  @Column('text', {
    nullable: true,
    name: 'varRTConfigpURLBaseURL'
  })
  varRTConfigpURLBaseURL: string | null;
}
