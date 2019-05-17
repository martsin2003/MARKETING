module.exports = {
  name: 'portal-shared-components',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/portal/shared-components',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
