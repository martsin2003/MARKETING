module.exports = {
  name: 'portal-shared-view-filter',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/portal/shared/view-filter',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
