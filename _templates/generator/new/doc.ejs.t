---
to: src/components/<%= name %>/doc/<%= name %>.mdx
---
import { Canvas, Meta } from '@storybook/blocks';
import { Example } from './Example.tsx';
import * as <%= name %> from './<%= name %>.stories.tsx';

<Meta of={<%= name %>} title="<%= name %>" />

# Button

<Canvas of={<%= name %>.Base} />

## Usage

```ts
import { <%= name %> } from 'remindee-ui-kit';

export const Example = () => {
  return <<%= name %> />;
};
```

### Arguments

- **disabled** - A boolean indicating whether the button should be disabled or not.
