import { FC, PropsWithChildren } from 'react';

type Props = {
  styles?: React.CSSProperties;
};

export const Flex: FC<PropsWithChildren<Props>> = ({ children, styles }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        ...styles,
      }}
    >
      {children}
    </div>
  );
};
