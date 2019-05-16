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

@Entity('tblTestimonial', { schema: 'public' })
export class tblTestimonial {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intTestimonialID'
  })
  intTestimonialID: string;

  @Column('text', {
    nullable: true,
    name: 'varTestimonialByLine'
  })
  varTestimonialByLine: string | null;

  @Column('text', {
    nullable: false,
    name: 'varTestimonialTxt'
  })
  varTestimonialTxt: string;

  @Column('text', {
    nullable: true,
    name: 'varTestimonialHomeOwner'
  })
  varTestimonialHomeOwner: string | null;

  @Column('text', {
    nullable: true,
    name: 'varTestimonialCommunity'
  })
  varTestimonialCommunity: string | null;

  @Column('text', {
    nullable: true,
    name: 'varTestimonialCommunityCityState'
  })
  varTestimonialCommunityCityState: string | null;

  @Column('text', {
    nullable: true,
    name: 'varTestimonialCommunityMonth'
  })
  varTestimonialCommunityMonth: string | null;

  @Column('integer', {
    nullable: true,
    name: 'varTestimonialCommunityYear'
  })
  varTestimonialCommunityYear: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intTestimonialNavOrder'
  })
  intTestimonialNavOrder: number | null;

  @Column('text', {
    nullable: true,
    name: 'varTestimonialStatus'
  })
  varTestimonialStatus: string | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteTestimonialModifiedDate'
  })
  dteTestimonialModifiedDate: Date | null;

  @Column('timestamp with time zone', {
    nullable: true,
    name: 'dteTestimonialCreatedDate'
  })
  dteTestimonialCreatedDate: Date | null;
}
