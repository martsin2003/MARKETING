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

@Entity('tblRTDataToCollect', { schema: 'public' })
export class tblRTDataToCollect {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTDataToCollectID'
  })
  intRTDataToCollectID: string;

  @Column('text', {
    nullable: true,
    name: 'varRTDataToCollect'
  })
  varRTDataToCollect: string | null;

  @Column('boolean', {
    nullable: true,
    default: () => 'true',
    name: 'bRTDataToCollectDisplay'
  })
  bRTDataToCollectDisplay: boolean | null;

  @Column('integer', {
    nullable: false,
    name: 'intRTDataToCollectOrder'
  })
  intRTDataToCollectOrder: number;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDataToCollectCreatedDate'
  })
  dteRTDataToCollectCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDataToCollectModifiedDate'
  })
  dteRTDataToCollectModifiedDate: Date;
}
