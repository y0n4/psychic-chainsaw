import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'play-chip',
  styleUrl: 'play-chip.css',
  shadow: true,
})

export class PlayChip {
  @Prop() icon: string;
  @Prop() label: string;
  @Prop() disabled: boolean;
  @Prop() outlined: boolean;
  @Prop() delete: boolean;

  determinePropStyle = () => {
    let chipClass = "chip";
    if (this.disabled) chipClass += " disabled";
    if (this.outlined) chipClass += " outlined";
    return chipClass;
  }

  render() {
    return (
      <div class={this.determinePropStyle()}>
        {this.icon && (<img src={this.icon} />)}
        <p>{this.label}</p>
        {this.delete && (<button>✕</button>)}
      </div>
    )
  }
}