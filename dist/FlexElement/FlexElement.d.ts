import React from 'react';
import { StyledFlexElementProps } from './styled';
declare type FlexElementProps = StyledFlexElementProps & {
    [k: string]: any;
};
export declare const FlexElement: React.FC<FlexElementProps>;
export {};
