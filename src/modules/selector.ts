module P9 {
  export class Selector {
    list: NodeListOf<Element>
    constructor(list: NodeListOf<Element>) {
      this.list = list;
    }

    addClass(c: string) {
      for (var i = 0; i < this.list.length; i++) {
        if ((' ' + this.list[i].className + ' ').indexOf(' ' + c + ' ') < 0) {
          this.list[i].className += (' ' + c);
        }
      }
    }

    click(cb: any) {
      return this.event('click', cb);
    }

    data(d: string): string {
      if (this.list.length != 1) {
        return null;
      }
      return (<any>this.list[0]).dataset ? (<any>this.list[0]).dataset[d] : this.list[0].getAttribute('data-' + d);
    }

    event(evt: string, cb: any) {
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].addEventListener(evt, cb);
      };
    }

    hasClass(c: string): boolean {
      if (this.list.length != 1) {
        return false;
      }
      return (' ' + this.list[0].className + ' ').indexOf(' ' + c + ' ') > -1;
    }

    load(cb: any) {
      return this.event('load', cb);
    }

    removeClass(c: string) {
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].className = (' ' +  this.list[i].className + ' ').replace(' ' + c + ' ', '').trim();
      };
    }

  }
}