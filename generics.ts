/**
 * S ==> State
 * T ==> Type
 * K ==> Key
 * V ==> Value
 * E ==> Element
 */

function useState<S extends boolean | string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState<string>();

newState.setState("foo"); // é uma string
console.log(newState.getState());

/*newState.setState(456); // aqui tem que dá erro
console.log(newState.getState());*/
