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

@Entity('tblModelType', { schema: 'public' })
export class tblModelType {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intModelTypeID'
  })
  intModelTypeID: string;

  @Column('text', {
    nullable: true,
    name: 'txtModelType'
  })
  txtModelType: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtModelTypeShrt'
  })
  txtModelTypeShrt: string | null;
}
