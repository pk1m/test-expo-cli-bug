# Expo CLI Bug Reproduction

This project demonstrates a path resolution issue introduced in `@expo/cli` version `54.0.16` when using `withNxMetro` in a monorepo workspace.

## Issue Description

When upgrading from `@expo/cli` `54.0.10` to `54.0.16`, Metro starts looking for modules with duplicated paths like:
- `./apps/test-app/index` instead of `./index`

This causes the error:
```
Unable to resolve module ./apps/test-app/index from /path/to/project/apps/test-app/.
```

## Reproduction Steps

1. Install dependencies: `npm install`
2. Try to start the app: `cd apps/test-app && npm start`
3. Observe the path duplication error

## Expected Behavior
The app should start without path resolution errors (works with `@expo/cli` `54.0.10`)

## Actual Behavior  
Metro fails to resolve the entry point due to duplicated path segments

## Workaround
Set `finalConfig.projectRoot = __dirname;` in metro.config.js after `withNxMetro()`

## Environment
- `@expo/cli`: `54.0.12` (issue appears in `54.0.16+`)
- `@nx/expo`: `22.0.4`
- `expo`: `54.0.10`
- Monorepo with npm workspaces