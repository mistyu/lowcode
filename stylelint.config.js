/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      extends: ['stylelint-config-standard-scss']
    },
    {
      files: ['*.vue', '**/*.vue'],
      extends: ['stylelint-config-standard-scss', 'stylelint-config-standard-vue']
    }
  ]
}
