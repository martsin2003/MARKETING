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

@Entity('tblIncentive', { schema: 'public' })
export class tblIncentive {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intIncentiveID'
  })
  intIncentiveID: string;

  @Column('text', {
    nullable: true,
    name: 'varIncentiveText'
  })
  varIncentiveText: string | null;

  @Column('text', {
    nullable: true,
    name: 'varIncentiveDisclaimer'
  })
  varIncentiveDisclaimer: string | null;

  @Column('text', {
    nullable: true,
    name: 'varIncentiveImage'
  })
  varIncentiveImage: string | null;

  @Column('text', {
    nullable: true,
    name: 'varIncentiveImageAltTag'
  })
  varIncentiveImageAltTag: string | null;
}
