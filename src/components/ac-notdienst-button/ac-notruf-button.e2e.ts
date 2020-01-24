import { newE2EPage } from '@stencil/core/testing';

describe('ac-notruf-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ac-notruf-button></ac-notruf-button>');
    const element = await page.find('ac-notruf-button');
    expect(element).toHaveClass('hydrated');
  });
});
