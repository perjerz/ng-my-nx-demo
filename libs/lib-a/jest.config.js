module.exports = {
  name: 'lib-a',
  preset: '../../jest.config.js',
  coverageDirectory:
    '../../coverage/libs/lib-a',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
