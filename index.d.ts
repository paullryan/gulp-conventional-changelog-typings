// Type definitions for gulp-conventional-changelog
// Project: https://github.com/conventional-changelog/gulp-conventional-changelog
// Definitions by: Paul Ryan <https://github.com/paullryan>

declare module "gulp-conventional-changelog" {

  namespace changelog {
    interface ConventionalChangelog {
      (options?: Option): NodeJS.ReadWriteStream;
    }
    interface Option {
      preset?: string,

      // If your options.releaseCount is 0 (regenerate all changelog from previous releases)
      // you can just use conventional-changelog directly or not to read the file at all.
      releaseCount?: number,

      // The location of your "package.json".
      path?: string,

      // If this value is true and context.version equals last release then context.version
      // will be changed to 'Unreleased'.
      outputUnreleased?: boolean,

      // Should the log be appended to existing data.
      append?: boolean,

      // Should debug logging be verbose for this module
      verbose?: boolean
    }
  }
  var changelog: changelog.ConventionalChangelog;
  export = changelog;
}
