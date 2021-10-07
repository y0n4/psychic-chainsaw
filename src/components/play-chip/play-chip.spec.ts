import { newSpecPage } from '@stencil/core/testing';
import { PlayChip } from './play-chip';

describe('play-chip', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PlayChip],
      html: '<play-chip></play-chip>',
    });
    expect(root).toEqualHtml(`
      <play-chip>
        <mock:shadow-root>
          <div class="chip">
            <slot></slot>
            <p></p>
          </div>
        </mock:shadow-root>
      </play-chip>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PlayChip],
      html: `<play-chip label="Stencil"></play-chip>`,
    });
    expect(root).toEqualHtml(`
      <play-chip label="Stencil">
        <mock:shadow-root>
          <div class="chip">
            <slot></slot>
            <p>Stencil</p>
          </div>
        </mock:shadow-root>
      </play-chip>
    `);
  });
});
