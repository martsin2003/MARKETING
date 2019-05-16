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

@Entity('tblRTDisplayType', { schema: 'public' })
export class tblRTDisplayType {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTDisplayTypeID'
  })
  intRTDisplayTypeID: string;

  @Column('text', {
    nullable: true,
    name: 'varRTDisplayType'
  })
  varRTDisplayType: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bRTArchive'
  })
  bRTArchive: boolean;
}
