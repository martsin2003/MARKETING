module.exports = {
  name: 'portal-core-state',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/portal/core-state',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
