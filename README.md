Raw Redux 


//index.html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Simple Counter Application</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <!-- import redux from cdn -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.1.1/redux.min.js"></script>
    </head>
    <body>
        <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <!-- header -->
            <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <!-- counters -->
            <div class="mx-auto max-w-md mt-10 space-y-5">
                <div
                    class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                >
                    <div id="counter" class="text-2xl font-semibold"></div>
                    <div class="flex space-x-3">
                        <button
                            id="increment"
                            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                            id="increment"
                        >
                            Increment
                        </button>
                        <button
                            id="decrement"
                            class="bg-red-400 text-white px-3 py-2 rounded shadow"
                            id="decrement"
                        >
                            Decrement
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <script src="./script.js"></script>
    </body>
</html>

<hr/>

//Script.js

<code> 

// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial state
const initialState = {
    value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === "increment") {
        return {
            ...state,
            value: state.value + 1,
        };
    } else if (action.type === "decrement") {
        return {
            ...state,
            value: state.value - 1,
        };
    } else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);

// button click listeners
incrementEl.addEventListener("click", () => {
    store.dispatch({
        type: "increment",
    });
});

decrementEl.addEventListener("click", () => {
    store.dispatch({
        type: "decrement",
    });
});

</code>

<hr/>

<code>

script.js 2.0

// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

//action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creator
const increment = (value) => {
  return {
    type: INCREMENT, //mandatory
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT, //mandatory
    payload: value,
  };
};

// initial state
const initialState = {
  value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      // value: state.value + 1,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      // value: state.value - 1,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

//as it is vanilla js so we have to update ui manually
const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

// update UI initially
render();

store.subscribe(render);

// button click listeners
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(4));
});

</code>