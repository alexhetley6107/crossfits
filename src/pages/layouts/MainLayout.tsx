import { Avatar, Icon, LogoText } from '@/components';
import { Flex } from '@/shared';
import React, { PropsWithChildren } from 'react';

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex
      styles={{
        width: '100vw',
        height: '100svh',
        boxSizing: 'border-box',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: 0,
      }}
    >
      <Flex
        styles={{
          justifyContent: 'space-between',
          height: '40px',
          paddingInline: '20px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08)',
        }}
      >
        <LogoText />

        <Flex>
          <Icon name="Clock" size="24" />
          <Avatar />
        </Flex>
      </Flex>
      <div
        style={{
          height: 'calc(100svh - 50px)',
          padding: '16px',
          overflowY: 'scroll',
        }}
      >
        {children}
      </div>
    </Flex>
  );
};
