import { type } from "os";

const ADD = 'amount/ADD';
const TAKE = 'amount/TAKE';
const CLEAR = 'amount/CLEAR';

type AddAmountAction = {
  type: typeof ADD;
  peyload: number;
}

const add = (value: number): AddAmountAction => ({
  type: ADD,
  peyload: value,
})


type TakeAmountAction = {
  type: typeof TAKE;
  peyload: number;
}

const take = (value: number): TakeAmountAction => ({
  type: TAKE,
  peyload: value,
})


type ClearAmountAction = {
  type: typeof CLEAR;
}

const clear = (): ClearAmountAction => ({ type: CLEAR })

type Action = AddAmountAction
  | TakeAmountAction
  | ClearAmountAction;

const amountReducer = (amount = 0, action: Action) => {
  switch (action.type) {
    case 'amount/ADD':
      return amount + action.peyload;

      case 'amount/TAKE':
        return amount - action.peyload;

        case 'amount/CLEAR':
          return 0;

    default:
      return amount;
  }
};

export default amountReducer;
