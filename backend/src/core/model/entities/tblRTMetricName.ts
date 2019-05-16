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

@Entity('tblRTMetricName', { schema: 'public' })
export class tblRTMetricName {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'inRTMetricNameID'
  })
  inRTMetricNameID: string;

  @Column('text', {
    nullable: true,
    name: 'varRTMetricNameShortName'
  })
  varRTMetricNameShortName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTMetricNameFullName'
  })
  varRTMetricNameFullName: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTMetricNameCategory'
  })
  varRTMetricNameCategory: string | null;

  @Column('integer', {
    nullable: true,
    name: 'varRTMetricNameOrder'
  })
  varRTMetricNameOrder: number | null;

  @Column('text', {
    nullable: true,
    name: 'varRTMetricNameType'
  })
  varRTMetricNameType: string | null;

  @Column('text', {
    nullable: true,
    name: 'varRTMetricNameCalc'
  })
  varRTMetricNameCalc: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTMetricNameCreatedDate'
  })
  dteRTMetricNameCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTMetricNameModifiedDate'
  })
  dteRTMetricNameModifiedDate: Date;
}
