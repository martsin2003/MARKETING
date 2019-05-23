module.exports = {
  name: 'portal-feature-my-account',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/portal/feature/my-account',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
