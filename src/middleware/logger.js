const logger = (store) => (next) => (action) => {
  console.group(action.type);
  //   console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  const state = JSON.parse(localStorage.getItem("__APPSTATE__"));
  const new_state = store.getState();

  console.groupEnd();
  if (state !== new_state) {
    localStorage.setItem("__APPSTATE__", JSON.stringify(new_state));
  }

  return result;
};

export default logger;
