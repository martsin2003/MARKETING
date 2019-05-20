module.exports = {
  name: 'portal-core-data-data-services',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/portal/core-data/data-services',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
