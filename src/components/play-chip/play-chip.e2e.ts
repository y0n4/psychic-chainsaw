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
  });
  
  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<play-chip delete={true}></play-chip>');
    const button = await page.find('play-chip >>> div >>> button')
    const element = await page.find('play-chip >>> div');
    expect(element).toHaveClass('chip');

    expect(button).toBeTruthy();
    button.click();
    await page.waitForChanges();
    expect(element).toHaveClass('hidden');
  });
});
