import React from 'react';
import styled from 'styled-components';
import ContentLoader from 'react-content-loader';

export type SkeletonProps = {
  className?: string;
  width?: number;
  height?: number;
  radius?: number;
};

const SkeletonWrapper = styled.div<{ $height?: number }>`
  height: ${({ $height }) => $height}px;
`;

export const Skeleton: React.FC<SkeletonProps> = ({ width, height, radius = 6, className }) => {
  return (
    <SkeletonWrapper data-testid="skeleton" className={className} $height={height}>
      <ContentLoader
        speed={1}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        style={{ borderRadius: radius + `px` }}
      >
        <rect x="0" y="0" width={width} height={height} />
      </ContentLoader>
    </SkeletonWrapper>
  );
};
