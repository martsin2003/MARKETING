module.exports = {
  name: 'portal-feature-communities',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/portal/feature/communities',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
