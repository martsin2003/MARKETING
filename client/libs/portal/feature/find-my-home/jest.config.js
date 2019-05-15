module.exports = {
  name: 'portal-feature-find-my-home',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/portal/feature/find-my-home',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
