import {useEffect} from 'react';

import {loadCrypto, selectAllUsers} from '../features/crypto/crypto-slice';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';

export const useCryptoc = () => {
  const dispatch = useAppDispatch();
  const {list} = useAppSelector(selectAllUsers);

  useEffect(() => {
    dispatch(loadCrypto());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return {list};
};
