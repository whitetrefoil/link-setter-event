export function linkEvent<A extends string>(attr: A) {
  return <T>(setter: (val: T) => void) =>
    (ev: {
      currentTarget: {
        [key in A]: T
      }
    }) => {
      setter(ev.currentTarget[attr])
    }
}

export function linkValueEvent<T>(setter: (val: T) => void) {
  return linkEvent('value')<T>(setter)
}

export function linkCheckedEvent(setter: (val: boolean) => void) {
  return linkEvent('checked')<boolean>(setter)
}
