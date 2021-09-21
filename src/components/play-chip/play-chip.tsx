import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'play-chip',
  styleUrl: 'play-chip.css',
  shadow: true,
})

export class PlayChip {

  @Prop() label: string;
  @Prop() disabled: boolean;
  @Prop() outlined: boolean;
  @Prop() delete: boolean;

  @State() isDelete: boolean = false;

  determinePropStyle = () => {
    let chipClass = 'chip'; 
    if (this.disabled) chipClass += ' disabled';
    if (this.outlined) chipClass += ' outlined';
    if (this.isDelete) chipClass += ' hidden';
    return chipClass;
  }

  handleCloseChip = () => {
    this.isDelete = true;
  };

  /**
   * slot- accepts a image url tag or just a text.
   * if its in text form then just accept the first letter to render
   */
  render() {
    return (
      <div class={this.determinePropStyle()}>
        <slot />
        <p>{this.label}</p>
        {this.delete && (
          <button onClick={this.handleCloseChip}>✕</button>
        )}
      </div>
    )
  }
}