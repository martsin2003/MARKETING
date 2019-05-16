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

@Entity('tblCommunityStyle', { schema: 'public' })
export class tblCommunityStyle {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intCommunityStyleID'
  })
  intCommunityStyleID: string;

  @Column('text', {
    nullable: true,
    name: 'txtCommunityStyle'
  })
  txtCommunityStyle: string | null;
}
