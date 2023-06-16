const historyEnhancer = (history) => {
  const listeners = [];

  const listen = (listener) => {
    listeners.push(listener);

    return () => {
      const index = listeners.indexOf(listener);
      if (index >= 0) {
        listeners.splice(index, 1);
      }
    };
  };

  const block = (prompt) => {
    // debugger
    let unblock;

    const listener = (location, action) => {
      if (unblock) {
        unblock();
        unblock = null;
      }
      const message = typeof prompt === 'function' ? prompt(location, action) : prompt;
      if (message) {
        unblock = history.block(message);
      }
    };

    const unlisten = history.listen(listener);

    return () => {
      unlisten();
      if (unblock) {
        unblock();
        unblock = null;
      }
    };
  };

  return {
    ...history,
    listen,
    block,
  };
};

export default historyEnhancer
