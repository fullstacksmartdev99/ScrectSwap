import { balanceNumberFormat, toFixedTrunc, unlockToken } from '../../../utils';
import React from 'react';
import Loader from 'react-loader-spinner';

const ScrtTokenBalanceSingleLine = (props: {
  value: string;
  currency: string;
  selected: boolean;
}) => {
  if (!props.value) {
    return <Loader type="ThreeDots" color="#00BFFF" height="1em" width="1em" />;
  } else if (props.value === unlockToken) {
    return <>Unlock</>;
  } else {
    return (
      <>
        {balanceNumberFormat.format(
          toFixedTrunc(Number(props.value.replace(/,/g, '')), 6),
        )}{' '}
        {props.currency}
      </>
    );
  }
};

export default ScrtTokenBalanceSingleLine;
