module.exports = {
  name: 'portal-feature-home',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/portal/feature/home',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
