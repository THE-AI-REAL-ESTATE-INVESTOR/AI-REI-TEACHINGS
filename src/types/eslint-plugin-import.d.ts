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
