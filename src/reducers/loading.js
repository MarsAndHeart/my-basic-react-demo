/**
 * Created by jianghai on 2018/2/26.
 * @flow
 */
type State = {
  loadingQueue: number,
  enableLoading: boolean,
}
type Action = {
  type: string,
}

const initialState = {
  loadingQueue: 0,
  enableLoading: true,
};

const loading = (state: State = initialState, action: Action) => {
  if (action.type === 'app/startLoading') {
    return {
      ...state,
      loadingQueue: state.loadingQueue + 1,
    };
  }
  if (action.type === 'app/finishLoading') {
    return {
      ...state,
      loadingQueue: Math.max(0, state.loadingQueue - 1),
    };
  }
  if (action.type === 'app/disableLoading') {
    return {
      ...state,
      enableLoading: false,
    };
  }
  if (action.type === 'app/enableLoading') {
    return {
      ...state,
      enableLoading: true,
    };
  }
  return state;
};

export default loading;
