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

@Entity('tblDesignPortfolioPage', { schema: 'public' })
export class tblDesignPortfolioPage {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'intDesignPortfolioPageID'
  })
  intDesignPortfolioPageID: number;

  @Column('text', {
    nullable: true,
    name: 'txtDesignPortfolioPageText'
  })
  txtDesignPortfolioPageText: string | null;

  @Column('text', {
    nullable: true,
    name: 'txtDesignPortfolioPageBullets'
  })
  txtDesignPortfolioPageBullets: string | null;
}
