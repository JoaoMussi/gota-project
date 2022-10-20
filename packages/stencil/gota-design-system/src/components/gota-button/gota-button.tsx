import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'gota-button',
  styleUrl: 'gota-button.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The button label
   */
  @Prop() label: string;

  render() {
    return <button>{this.label}</button>;
  }
}
