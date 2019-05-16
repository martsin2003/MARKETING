module.exports = {
  name: 'portal-shared-feature-navigation',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/portal/shared/feature-navigation',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
