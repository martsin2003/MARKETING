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

@Entity('tblFPConfig', { schema: 'public' })
export class tblFPConfig {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'intFPConfigID'
  })
  intFPConfigID: string;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigClientLogo'
  })
  varFPConfigClientLogo: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigDisclaimer'
  })
  varFPConfigDisclaimer: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigContactURL'
  })
  varFPConfigContactURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigHelpPhoneNumber'
  })
  varFPConfigHelpPhoneNumber: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigBuilderHelpEmail'
  })
  varFPConfigBuilderHelpEmail: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigUtilityNavLinkColor'
  })
  varFPConfigUtilityNavLinkColor: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigInterfaceColorH1'
  })
  varFPConfigInterfaceColorH1: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigInterfaceColorH2'
  })
  varFPConfigInterfaceColorH2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigInterfaceColorH3'
  })
  varFPConfigInterfaceColorH3: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigInterfaceDisclaimerColor'
  })
  varFPConfigInterfaceDisclaimerColor: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigAccordionBarColor'
  })
  varFPConfigAccordionBarColor: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigAccordionBarHoverColor'
  })
  varFPConfigAccordionBarHoverColor: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigButtonColor'
  })
  varFPConfigButtonColor: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigButtonHoverColor'
  })
  varFPConfigButtonHoverColor: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigHeaderBGColor'
  })
  varFPConfigHeaderBGColor: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigSubheaderBGColor'
  })
  varFPConfigSubheaderBGColor: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigDialogHeaderBGColor'
  })
  varFPConfigDialogHeaderBGColor: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigMarkupColor'
  })
  varFPConfigMarkupColor: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigDrawToolHover'
  })
  varFPConfigDrawToolHover: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigBottomBarColor'
  })
  varFPConfigBottomBarColor: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigFavPath'
  })
  varFPConfigFavPath: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigFav57Path'
  })
  varFPConfigFav57Path: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigFav72Path'
  })
  varFPConfigFav72Path: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigFav114Path'
  })
  varFPConfigFav114Path: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigPrintColorH1'
  })
  varFPConfigPrintColorH1: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigPrintColorH2'
  })
  varFPConfigPrintColorH2: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigPrintColorH3'
  })
  varFPConfigPrintColorH3: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigPrintColorBody'
  })
  varFPConfigPrintColorBody: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigPrintColorDisc'
  })
  varFPConfigPrintColorDisc: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigPrintBuilderLogo'
  })
  varFPConfigPrintBuilderLogo: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigPrintDisclaimer'
  })
  varFPConfigPrintDisclaimer: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigTogglePaneBar'
  })
  varFPConfigTogglePaneBar: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigRegisterCCList'
  })
  varFPConfigRegisterCCList: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigLoginCCList'
  })
  varFPConfigLoginCCList: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigSaveCCList'
  })
  varFPConfigSaveCCList: string | null;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPConfigCreatedDate'
  })
  dteFPConfigCreatedDate: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    name: 'dteFPConfigModifiedDate'
  })
  dteFPConfigModifiedDate: Date;

  @Column('integer', {
    nullable: true,
    name: 'intFPConfigCreatedBy'
  })
  intFPConfigCreatedBy: number | null;

  @Column('integer', {
    nullable: true,
    name: 'intFPConfigModifiedBy'
  })
  intFPConfigModifiedBy: number | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigDevInterfaceURL'
  })
  varFPConfigDevInterfaceURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigLiveInterfaceURL'
  })
  varFPConfigLiveInterfaceURL: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigPrintBuilderDisplayURL'
  })
  varFPConfigPrintBuilderDisplayURL: string | null;

  @Column('boolean', {
    nullable: false,
    default: () => 'true',
    name: 'bFPConfigUUIDImageNamesFlg'
  })
  bFPConfigUUIDImageNamesFlg: boolean;

  @Column('boolean', {
    nullable: false,
    default: () => 'false',
    name: 'bFPConfigFurnitureOnByDefaultFlg'
  })
  bFPConfigFurnitureOnByDefaultFlg: boolean;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigElevationImagePath'
  })
  varFPConfigElevationImagePath: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigElevationLargeImageFolder'
  })
  varFPConfigElevationLargeImageFolder: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigElevationThumbImageFolder'
  })
  varFPConfigElevationThumbImageFolder: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigModelGenericImagePath'
  })
  varFPConfigModelGenericImagePath: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigModelGenericLargeImageFolder'
  })
  varFPConfigModelGenericLargeImageFolder: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigModelGenericThumbImageFolder'
  })
  varFPConfigModelGenericThumbImageFolder: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigModelImagePath'
  })
  varFPConfigModelImagePath: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigModelLargeImageFolder'
  })
  varFPConfigModelLargeImageFolder: string | null;

  @Column('text', {
    nullable: true,
    name: 'varFPConfigModelThumbImageFolder'
  })
  varFPConfigModelThumbImageFolder: string | null;
}
