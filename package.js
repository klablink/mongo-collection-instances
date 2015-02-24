Package.describe({
  name: 'dburles:mongo-collection-instances',
  summary: "Access your Mongo instances",
  version: "0.3.1",
  git: "https://github.com/dburles/mongo-collection-instances.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['mongo', 'underscore']);
  api.use('lai:collection-extensions@0.1.0');
  api.addFiles('mongo-instances.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dburles:mongo-collection-instances');
  api.addFiles('mongo-instances-tests.js');
});
