/// <reference path="./selector.ts" />
module P9 {
  export function get(q: string) {
    return new Selector(document.querySelectorAll(q));
  }
}