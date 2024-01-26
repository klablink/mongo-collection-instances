/* eslint-env meteor */
Package.describe({
  name: 'dburles:mongo-collection-instances',
  summary: 'Access your Mongo instances',
  version: '0.5.0',
  git: 'https://github.com/dburles/mongo-collection-instances.git'
})

Package.onUse(function (api) {
  api.versionsFrom(['3.0-beta.0'])
  api.use([
    'mongo',
    'ecmascript',
    'lai:collection-extensions'])
  api.addFiles('mongo-instances.js')
})

Package.onTest(function (api) {
  api.use([
    'ecmascript',
    'meteortesting:mocha',
    'accounts-base',
    'mongo',
    'dburles:mongo-collection-instances'
  ])
  api.addFiles('mongo-instances.tests.js')
})
