const { h, app } = hyperapp;

app({
  model: "Hi.",
  view: model => <h1>{model}</h1>
});