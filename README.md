# README

## Pitfalls

All imports to `@blockle/blocks-v2` within css.ts files must be absolute imports from `@blockle/blocks-v2/src/xx.ts`.

It will throw an error like this:

```shell
SyntaxError: Unexpected token 'export'
Import trace for requested module:
./src/theme/textInput.css.ts
./src/theme/index.ts
```

### Do

```ts
import { createComponentTheme } from '@blockle/blocks-v2/src/components/BlocksProvider/createComponentTheme';
```

### Don't

```ts
import { createComponentTheme } from '@blockle/blocks-v2';
```
