import React from 'react';

function useSafeDispatch(dispatch: any) {
  const mounted = React.useRef(false)
  React.useLayoutEffect((): any => {
    mounted.current = true
    return () => (mounted.current = false)
  }, [])
  return React.useCallback(
    (...args: any) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch],
  )
}

const defaultInitialState = {status: 'idle', data: null, error: null}

function useAxios(initialState: any) {
  const initialStateRef = React.useRef({
    ...defaultInitialState,
    ...initialState,
  })
  const [{status, data, error}, setState] = React.useReducer(
    (s: any, a: any): any => ({...s, ...a}),
    initialStateRef.current,
  )

  const safeSetState = useSafeDispatch(setState)

  const setData = React.useCallback(
    (data: any) => safeSetState({data, status: 'resolved'}),
    [safeSetState],
  )
  const setError = React.useCallback(
    (error: any) => safeSetState({error, status: 'rejected'}),
    [safeSetState],
  )
  const reset = React.useCallback(
    () => safeSetState(initialStateRef.current),
    [safeSetState],
  )

  const run = React.useCallback(
    (promise: any, config: any = {}) => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAxios().run must be a promise. Maybe a function that's passed isn't returning anything?`
        );
      }
      safeSetState({ status: "pending" });
      return promise.then(
        (response: any) => {
          setData(response?.data?.data);
          return response;
        },
        (error: any) => {
          const errorMessage = error?.response?.data;
          if (config.throwOnError)
            throw new Error(errorMessage);

          setError(errorMessage);
          return Promise.reject(errorMessage);
        }
      );
    },
    [safeSetState, setData, setError]
  );

  return {
    // using the same names that react-query uses for convenience
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',

    setData,
    setError,
    error,
    status,
    data,
    run,
    reset,
  }
}

export default useAxios
