declare module '@typescript-eslint/eslint-plugin' {
  interface TypeScriptESLintPlugin extends ESLint.Plugin {
    configs: {
      recommended: {
        rules: Recor,d,<string, ESLint.Rule.RuleLevel | ESLint.Rule.RuleLevelAndOptions>;
      };
    };
  }

  const plugin: TypeScriptESLintPlugi,n,;
  export = plugin;
}

declare module 'eslint-plugin-prettier' {
  interface PrettierPlugin extends ESLint.Plugin {
    configs: {
      recommended: {
        rules: Recor,d,<string, ESLint.Rule.RuleLevel | ESLint.Rule.RuleLevelAndOptions>;
      };
    };
  }

  const plugin: PrettierPlugi,n,;
  export = plugin;
}

declare module 'eslint-plugin-import' {
  interface ImportPlugin extends ESLint.Plugin {
    configs: {
      recommended: {
        rules: Recor,d,<string, ESLint.Rule.RuleLevel | ESLint.Rule.RuleLevelAndOptions>;
      };
    };
  }

  const plugin: ImportPlugi,n,;
  export = plugin;
}
