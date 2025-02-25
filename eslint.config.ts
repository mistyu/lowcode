import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import vueEslintParser from 'vue-eslint-parser'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        defineProps: 'readonly',
        defineEmits: 'readonly'
      }
    }
  },
  {
    files: ['**/*.{ts,tsx,vue}'],
    ignores: [],
    rules: {
      ...js.configs.recommended.rules,
      ...pluginVue.configs['vue3-recommended'].rules,
      // semi: 'error',
      'prefer-const': 'error',
      'no-console': 'error',
      'vue/valid-define-emits': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      indent: [
        'error',
        2,
        {
          SwitchCase: 1, // 配置 switch 语句中的 case 缩进
          VariableDeclarator: 1, // 配置变量声明的缩进
          outerIIFEBody: 1, // 配置立即执行函数（IIFE）的缩进
          MemberExpression: 1 // 配置成员表达式的缩进
        }
      ]
    },
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        extraFileExtensions: ['.vue'],
        parser: tsParser
      }
    },
    plugins: {
      vue: pluginVue,
      'simple-import-sort': simpleImportSort
    }
  }
]
