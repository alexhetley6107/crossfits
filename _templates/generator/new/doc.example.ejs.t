---
to: src/components/<%= name %>/doc/Example.tsx
---
import { FC } from 'react';
import { <%= name %>, <%= name %>Props } from '../<%= name %>';

export const Example: FC<<%= name %>Props> = (props) => {
   return (
    <div>
      <<%= name %> {...props}/>
    </div>
  );
};