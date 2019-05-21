module.exports = {
  name: 'common-ui-components',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/common/ui-components',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
