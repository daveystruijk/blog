module.exports = {
  plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  importOrder: ['<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderParserPlugins: ['typescript', 'jsx'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: '*.ts',
      options: {
        importOrderParserPlugins: ['typescript'],
      },
    },
  ],
};
