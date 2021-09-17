import { Component, Prop, State, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'play-switch',
  styleUrl: 'play-switch.css',
  shadow: true,
})

export class PlaySwitch {
  @Prop() label: string;
  @Prop() on: string;
  @Prop() off: string;

  @State() isOn: boolean = true;

  render() {
    console.log(this.isOn);
    return (
      <div class="my-div">
        <p>{this.label}: {this.isOn ? 'on' : 'off'}</p>
        <label class="switch">
          <input type="checkbox" checked={this.isOn} onChange={() => this.isOn = !this.isOn} />
          <span class="slider round"></span>
        </label>
      </div>
    )
  }
}