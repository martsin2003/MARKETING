module.exports = {
  name: 'common-utilities',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/utilities',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
