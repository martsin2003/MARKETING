module.exports = {
  name: 'common-ui-components-image-carousel',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/common/ui-components/image-carousel',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
