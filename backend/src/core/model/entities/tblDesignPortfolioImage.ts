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

@Entity('tblDesignPortfolioImage', { schema: 'public' })
export class tblDesignPortfolioImage {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intDesignPortfolioImageID'
  })
  intDesignPortfolioImageID: string;

  @Column('text', {
    nullable: false,
    name: 'varPortfolioPageImage'
  })
  varPortfolioPageImage: string;

  @Column('text', {
    nullable: true,
    name: 'varPortfolioPageImageAltTag'
  })
  varPortfolioPageImageAltTag: string | null;

  @Column('integer', {
    nullable: true,
    name: 'intNavOrder'
  })
  intNavOrder: number | null;
}
