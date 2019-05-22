module.exports = {
  name: 'portal-feature-my-time-tour',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/portal/feature/my-time-tour',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
