const path = require('path');

function resolvePath(pathname) {
  return path.join(path.dirname(require.resolve(pathname)), './');
}

module.exports = {
  rulesDirectory: [
    resolvePath('tslint-consistent-codestyle'),
    resolvePath('tslint-microsoft-contrib/recommended'),
  ],
  rules: {
    'ban-ts-ignore': true,
    'member-access': [
      true,
      'no-public',
      'check-accessor',
      'check-constructor',
      'check-parameter-property'
    ],
    'member-ordering': [
      true,
      {
        'order': [
          'public-static-field',
          'public-instance-field',
          'public-constructor',
          'private-static-field',
          'private-instance-field',
          'private-constructor',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method'
        ],
        'alphabetize': true
      }
    ],
    'no-any': true,
    'no-empty-interface': true,
    'no-namespace': true,
    'no-magic-numbers': true,
    'no-parameter-reassignment': true,
    'no-reference': true,
    'no-var-requires': true,
    'promise-function-async': [
      true,
      'check-function-declaration',
      'check-function-expression',
      'check-arrow-function',
      'check-method-declaration'
    ],
    typedef: [
      true,
      'call-signature',
      'arrow-call-signature',
      'parameter',
      'arrow-parameter',
      'property-declaration',
      'variable-declaration',
      'member-variable-declaration',
      'object-destructuring',
      'array-destructuring'
    ],
    'unified-signatures': true,
    curly: [true, 'ignore-same-line'],
    forin: true,
    'function-constructor': true,
    'no-arg': true,
    'no-bitwise': true,
    'no-console': [
      true,
      'log',
      'info',
    ],
    'no-construct': true,
    'no-debugger': true,
    'no-duplicate-variable': true,
    'no-empty': true,
    'no-eval': true,
    'no-floating-promises': true,
    'no-for-in-array': true,
    'no-inferred-empty-object-type': true,
    'no-invalid-template-strings': true,
    'no-invalid-this': [
      true,
      'check-function-in-method'
    ],
    'no-misused-new': true,
    'no-object-literal-type-assertion': true,
    'no-return-await': true,
    'no-sparse-arrays': true,
    'no-string-throw': true,
    'no-tautology-expression': true,
    'no-this-assignment': true,
    'no-unnecessary-class': [
      true,
      'allow-static-only'
    ],
    'no-unsafe-finally': true,
    'no-var-keyword': true,
    'prefer-object-spread': true,
    'static-this': true,
    'switch-default': true,
    'triple-equals': true,
    'unnecessary-constructor': true,
    deprecation: true,
    'max-classes-per-file': [true, 1],
    'no-duplicate-imports': true,
    'no-mergeable-namespace': true,
    'no-require-imports': true,
    'object-literal-sort-keys': true,
    'prefer-const': true,
    'prefer-readonly': true,
    'array-type': [true, 'array'],
    'arrow-return-shorthand': true,
    'class-name': true,
    'comment-format': [
      true,
      'check-lowercase',
      {
        'ignore-words': ['TODO', 'HACK']
      }
    ],
    'comment-type': [true, 'doc', 'singleline'],
    'completed-docs': [
      true,
      {
        'interfaces': true,
        'enums': true,
        'namespaces': true,
        'functions': {
          'visibilities': ['exported']
        },
        'methods': {
          'locations': 'instance',
          'privacies': ['public', 'protected']
        }
      }
    ],
    'file-name-casing': [
      true,
      {
        '.tsx': 'pascal-case',
        '.ts': 'camel-case'
      }
    ],
    'increment-decrement': [true, 'allow-post'],
    'interface-name': [true, 'always-prefix'],
    'match-default-export-name': true,
    'no-angle-bracket-type-assertion': true,
    'no-boolean-literal-compare': true,
    'no-reference-import': true,
    'no-unnecessary-callback-wrapper': true,
    'no-unnecessary-initializer': true,
    'object-literal-key-quotes': [true, 'as-needed'],
    'unnecessary-bind': true,
    'unnecessary-else': true,
    'object-literal-shorthand': true,
    quotemark: [
      true,
      'single',
      'avoid-escape',
      'avoid-template',
      'jsx-double',
    ],
    'prefer-template': true,
    'space-before-function-paren': [
      true,
      {
        anonymous: 'always',
        named: 'never',
      },
    ],
    'no-parameter-reassignment': true,
    align: [
      true,
      'parameters',
      'arguments',
      'statements',
      'members',
    ],
    'arrow-parens': false,
    'one-variable-per-declaration': [true, 'ignore-for-loop'],
    indent: [true, 'spaces'],
    whitespace: [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-module',
      'check-separator',
      'check-rest-spread',
      'check-type',
      'check-typecast',
      'check-type-operator',
      'check-preblock',
      'check-postbrace',
    ],
    'max-line-length': [true, 100],
    'no-trailing-whitespace': true,
    'no-consecutive-blank-lines': true,
    'trailing-comma': [
      true,
      {
        multiline: 'always',
        singleline: 'never',
        esSpecCompliant: true,
      },
    ],
    semicolon: [true, 'always'],
    'variable-name': [true, 'check-format'],
    'import-name': true,
    'prefer-method-signature': true
  },
};