// Copyright 2019-2022 @polkadot/extension-koni-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { SWTransactionResponse } from '@subwallet/extension-base/services/transaction-service/types';
import { useCallback, useMemo } from 'react';

import { useNotification, useTranslation } from '../common';

const useHandleSubmitTransaction = (onDone: (extrinsicHash: string) => void, setIgnoreWarnings?: (value: boolean) => void) => {
  const notify = useNotification();
  const { t } = useTranslation();

  const onSuccess = useCallback((rs: SWTransactionResponse) => {
    console.log('Transaction Response:', rs);
    const { errors, id, warnings } = rs;

    console.log('Errors:', errors);
    console.log('Warnings:', warnings);
    console.log('Transaction ID:', id);

    if (errors.length || warnings.length) {
      if (![t('Rejected by user'), 'Rejected by user'].includes(errors[0]?.message)) {
        console.log('Notification:', {
          message: errors[0]?.message || warnings[0]?.message,
          type: errors.length ? 'error' : 'warning'
        });
        notify({
          message: errors[0]?.message || warnings[0]?.message,
          type: errors.length ? 'error' : 'warning'
        });
      }

      if (!errors.length) {
        console.log('Setting ignoreWarnings to true');
        warnings[0] && setIgnoreWarnings?.(true);
      }
    } else if (id) {
      console.log('Transaction Successful, ID:', id);
      onDone(id);
    }
  }, [t, notify, onDone, setIgnoreWarnings]);

  const onError = useCallback((error: Error) => {
    console.log('Error:', error);
    notify({
      message: t(error.message),
      type: 'error'
    });
  }, [t, notify]);

  return useMemo(() => ({
    onSuccess,
    onError
  }), [onError, onSuccess]);
};

export default useHandleSubmitTransaction;
