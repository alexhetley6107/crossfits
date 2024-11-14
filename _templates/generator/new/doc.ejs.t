---
to: src/components/<%= name %>/doc/<%= name %>.mdx
---
import { Canvas, Meta } from '@storybook/blocks';
import { Example } from './Example.tsx';
import * as <%= name %> from './<%= name %>.stories.tsx';

<Meta of={<%= name %>} title="<%= name %>" />

# <%= name %>

<Canvas of={<%= name %>.Base} />

## Usage

```ts
import { <%= name %> } from 'remindee-ui-kit';

export const Example = () => {
  return <<%= name %> />;
};
```

### Arguments

- **className** - A string that sets css class to the root of component.