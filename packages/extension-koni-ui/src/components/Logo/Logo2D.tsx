// Copyright 2019-2022 @polkadot/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

interface Props {
  width?: number | string;
  height?: number | string;
}

const Logo2D: React.FC<Props> = ({ height = 24, width = 16 }: Props) => {
  return (
    <img
      src='./images/subwallet/gradient-logo.png'
      style={{
        width: '40px',
        height: '40px'
      }}
    />
  );
};

export default Logo2D;
