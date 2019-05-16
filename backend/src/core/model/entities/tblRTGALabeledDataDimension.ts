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
import { tblRTGALabeledData } from './tblRTGALabeledData';

@Entity('tblRTGALabeledDataDimension', { schema: 'public' })
@Index('idx_20136_IX2_tblRTGALabeledDataDimension', [
  'intRtgaLabeledDataDimensionRtgaLabeledData',
  'varRTGALabeledDataDimension',
  'varRTGALabeledDataDimensionValue'
])
@Index(
  'idx_20136_IX_tblRTGALabeledDataDimension',
  [
    'intRtgaLabeledDataDimensionRtgaLabeledData',
    'varRTGALabeledDataDimension',
    'varRTGALabeledDataDimensionValue'
  ],
  { unique: true }
)
export class tblRTGALabeledDataDimension {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intRTGALabeledDataDimensionID'
  })
  intRTGALabeledDataDimensionID: string;

  @ManyToOne(
    type => tblRTGALabeledData,
    tblRTGALabeledData => tblRTGALabeledData.tblRtgaLabeledDataDimensions,
    { nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTGALabeledDataDimensionRTGALabeledDataID' })
  intRtgaLabeledDataDimensionRtgaLabeledData: tblRTGALabeledData | null;

  @Column('text', {
    nullable: false,
    name: 'varRTGALabeledDataDimension'
  })
  varRTGALabeledDataDimension: string;

  @Column('text', {
    nullable: false,
    name: 'varRTGALabeledDataDimensionValue'
  })
  varRTGALabeledDataDimensionValue: string;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGALabeledDataDimensionCreatedDate'
  })
  dteRTGALabeledDataDimensionCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTGALabeledDataDimensionModifiedDate'
  })
  dteRTGALabeledDataDimensionModifiedDate: Date;
}
