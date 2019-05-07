module.exports = {
  name: 'shared-navigation',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/navigation',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
