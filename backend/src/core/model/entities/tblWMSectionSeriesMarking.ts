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
import { tblWMSectionSeries } from './tblWMSectionSeries';

@Entity('tblWMSectionSeriesMarking', { schema: 'public' })
@Index(
  'idx_20958_IX_tblWMSectionSeriesMarking',
  [
    'intWMSectionSeriesMarkingID',
    'intWmSectionSeriesMarkingWmSectionSeries',
    'varWMSectionSeriesMarkingStatus'
  ],
  { unique: true }
)
export class tblWMSectionSeriesMarking {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intWMSectionSeriesMarkingID'
  })
  intWMSectionSeriesMarkingID: string;

  @ManyToOne(
    type => tblWMSectionSeries,
    tblWMSectionSeries => tblWMSectionSeries.tblWmSectionSeriesMarkings,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intWMSectionSeriesMarkingWMSectionSeriesID' })
  intWmSectionSeriesMarkingWmSectionSeries: tblWMSectionSeries | null;

  @Column('text', {
    nullable: false,
    name: 'varWMSectionSeriesMarkingPolygonJSON'
  })
  varWMSectionSeriesMarkingPolygonJSON: string;

  @Column('text', {
    nullable: false,
    default: () => "'active'",
    name: 'varWMSectionSeriesMarkingStatus'
  })
  varWMSectionSeriesMarkingStatus: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMSectionSeriesMarkingCreatedDate'
  })
  dteWMSectionSeriesMarkingCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteWMSectionSeriesMarkingModifiedDate'
  })
  dteWMSectionSeriesMarkingModifiedDate: Date;
}
