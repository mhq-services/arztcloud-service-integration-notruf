import { newE2EPage } from '@stencil/core/testing';

describe('ac-notruf-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ac-notruf-modal></ac-notruf-modal>');
    const element = await page.find('ac-notruf-modal');
    expect(element).toHaveClass('hydrated');
  });
});
