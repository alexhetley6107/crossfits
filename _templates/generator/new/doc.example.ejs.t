---
to: src/components/<%= name %>/doc/Example.tsx
---
import { FC } from 'react';
import { <%= name %>, <%= name %>Props } from '../<%= name %>';

export const Example: FC<<%= name %>Props> = () => {
   return (
    <div>
      <<%= name %> />
    </div>
  );
};