import { newE2EPage } from '@stencil/core/testing';

describe('play-chip', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<play-chip></play-chip>');
    const element = await page.find('play-chip');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<play-chip></play-chip>');
    const component = await page.find('play-chip');
    const element = await page.find('play-chip >>> div');
    expect(element.textContent).toEqual(``);

    component.setProperty('label', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);

    // component.setProperty('last', 'Quincy');
    // await page.waitForChanges();
    // expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    // component.setProperty('middle', 'Earl');
    // await page.waitForChanges();
    // expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
