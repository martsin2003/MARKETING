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
import { tblRTDisplayAdGroup } from './tblRTDisplayAdGroup';
import { tblRTMediaSource } from './tblRTMediaSource';

@Entity('tblRTDisplayAdGroupMediaSource', { schema: 'public' })
export class tblRTDisplayAdGroupMediaSource {
  @ManyToOne(
    type => tblRTDisplayAdGroup,
    tblRTDisplayAdGroup => tblRTDisplayAdGroup.tblRtDisplayAdGroupMediaSources,
    { primary: true, nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTDisplayAdGroupMediaSourceRTDisplayAdGroupID' })
  intRtDisplayAdGroupMediaSourceRtDisplayAdGroup: tblRTDisplayAdGroup | null;

  @ManyToOne(
    type => tblRTMediaSource,
    tblRTMediaSource => tblRTMediaSource.tblRtDisplayAdGroupMediaSources,
    { primary: true, nullable: false, onDelete: 'CASCADE' }
  )
  @JoinColumn({ name: 'intRTDisplayAdGroupMediaSourceRTMediaSourceID' })
  intRtDisplayAdGroupMediaSourceRtMediaSource: tblRTMediaSource | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayAdGroupMediaSourceCreatedDate'
  })
  dteRTDisplayAdGroupMediaSourceCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteRTDisplayAdGroupMediaSourceModifiedDate'
  })
  dteRTDisplayAdGroupMediaSourceModifiedDate: Date;
}
