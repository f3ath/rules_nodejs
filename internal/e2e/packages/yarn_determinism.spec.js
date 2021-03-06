const fs = require('fs');
const path = require('path');

const packageJsonPath = require.resolve('jsesc').replace('jsesc.js', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

const packageJsonPath2 = packageJsonPath.replace(
    '/internal_e2e_packages_yarn_install_duplicate_for_determinism_testing/',
    '/internal_e2e_packages_yarn_install/');
const packageJson2 = JSON.parse(fs.readFileSync(packageJsonPath2));

describe('jsesc package.json files', () => {
  it('jsesc package.json files from two different yarn_install runs should have the same contents',
     () => {
       expect(packageJsonPath !== packageJsonPath2).toBeTruthy();
       expect(JSON.stringify(packageJson)).toBe(JSON.stringify(packageJson2));
     });
});
