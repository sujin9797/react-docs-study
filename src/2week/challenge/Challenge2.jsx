export function getFinalState(baseState, queue) {
  let finalState = baseState;

  queue.forEach((update) => {
    typeof finalState === "function" ? update(finalState) : update;
  })
  // TODO: do something with the queue...
  return finalState;
}
