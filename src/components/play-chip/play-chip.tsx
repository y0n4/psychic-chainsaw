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

  handleCloseChip = (): void => {
    this.isDelete = true;
  }

  render() {
    return (
      <div
        class={{
          chip: true,
          hidden: this.isDelete,
          disabled: this.disabled,
          outlined: this.outlined,
        }}
      >
        <slot />
        <p>{this.label}</p>
        {this.delete && (
          <button onClick={this.handleCloseChip}>✕</button>
        )}
      </div>
    )
  }
}