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

@Entity('tblSalutation', { schema: 'public' })
export class tblSalutation {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intSalutationID'
  })
  intSalutationID: string;

  @Column('text', {
    nullable: true,
    name: 'varSalutation'
  })
  varSalutation: string | null;
}
