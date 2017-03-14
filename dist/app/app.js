"use strict";

var _hyperapp = hyperapp,
    h = _hyperapp.h,
    app = _hyperapp.app;


app({
  model: "Hi.",
  view: function view(model) {
    return h(
      "h1",
      null,
      model
    );
  }
});