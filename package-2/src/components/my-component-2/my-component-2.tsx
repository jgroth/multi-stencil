import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component-2',
  styleUrl: 'my-component-2.css',
  shadow: true
})
export class MyComponent2 {

  render() {
    return <div>Component 2 <my-component-1/></div>;
  }
}
