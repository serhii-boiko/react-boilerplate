const LOCAL_STORE_KEY = 'react-app-store';

export const localStorageMiddleware =
  (serializer) =>
  ({ getState }) => {
    return (next) => (action) => {
      const result = next(action);
      const store = getState();
      const keys = Object.keys(serializer);

      const localStoreData = keys.reduce((acc, key) => {
        const getter = serializer[key];
        if (getter) {
          acc[key] = getter(store);
        }
        return acc;
      }, {});

      localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(localStoreData));

      return result;
    };
  };

export const reHydrateState = (initState, deserializer = {}) => {
  const deserializerKeys = Object.keys(deserializer);

  if (!deserializerKeys || !deserializerKeys.length) {
    return initState;
  }

  const data = localStorage.getItem(LOCAL_STORE_KEY);
  if (data !== null) {
    const parsedData = JSON.parse(data);
    return deserializerKeys.reduce((acc, key) => {
      if (Object.prototype.hasOwnProperty.call(parsedData, key)) {
        return deserializer[key](acc, parsedData[key]);
      }

      return acc;
    }, initState);
  }

  return initState;
};
