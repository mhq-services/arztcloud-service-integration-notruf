import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ac-notruf-button',
  styleUrl: 'ac-notruf-button.css',
  assetsDirs: ['assets']
})
export class AcNotrufButton {

  /**
   * If false, the default icon won't be used.
   */
  @Prop() default = true;

  /**
   * Value to adapt stroke width (0 (0%) ... 1 (100%) of regular).
   */
  @Prop() strokeWidth = 1;

  /**
   * hint hint for button.
   */
  @Prop() hint = 'Notrufnummern';

  /**
   * Additional button classes.
   */
  @Prop() addClass = '';

  /**
   * Url of the icon image.
   */
  @Prop() iconUrl: string;

  get styles() {
    let styles = {};
    if (typeof this.iconUrl !== 'undefined') {
      styles = {
        'background-image': 'url(' + this.iconUrl + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100%',
        'background-position': 'center'
      }
    }
    return styles;
  };

  private toggleModal = () => {
    let modal = document.querySelector("ac-notruf-modal");
    if (modal === null) {
      console.log('ac-notruf-modal not found!');
      return;
    }
    if (modal.visible) {
      modal.visible = false;
    } else {
      modal.visible = true;
    }
  };

  render() {
    let content;

    if (this.default) {
      content = (
        <svg xmlns="http://www.w3.org/2000/svg"
          width="122.88pt"
          height="122.88pt"
          viewBox="0 0 122.88 122.88">
          <defs/>
          <circle id="shape0" transform="matrix(1.0000000224 0 0 1.0000000224 6.2844441648 6.2844441648)" r="55.155783856" cx="55.155783856" cy="55.155783856" fill="none" stroke="currentColor" stroke-width={12.000044776 * this.strokeWidth} stroke-linecap="square" stroke-linejoin="bevel"/><path id="shape021" transform="matrix(0.68350198157 -0.62877483791 -0.62877483791 -0.68350198157 45.136263922 108.17101304)" fill="currentColor" stroke="currentColor" stroke-width={2.4000089552 * this.strokeWidth} stroke-linecap="round" stroke-linejoin="round" d="M24.6533 18.2009C26.479 16.1757 34.1312 12.8904 47.3855 12.1331C60.5442 11.5515 65.2533 14.7014 68.0898 16.5219C68.8841 21.4509 68.1822 22.2766 68.2946 25.7011C75.5726 32.9718 90.2492 38.462 92.2291 35.4802C94.7714 30.9937 94.7024 20.6676 87.5061 13.1733C85.3832 11.5376 76.0758 -0.250268 50.1344 0.00405487C24.1935 0.258378 11.1431 7.67136 3.39545 18.6513C-2.28511 26.5889 0.456893 35.5261 2.36729 37.6029C6.07042 39.3539 16.9834 35.8481 24.0991 28.0571C23.8566 25.66 23.5016 20.7207 24.6533 18.2009Z"/>
        </svg>
      );
    } else {
      content = <slot></slot>;
    }

    return (
      <button
        class={'ac-notruf-button' + (this.addClass.length > 0 ? ' ' + this.addClass : '')}
        title={this.hint}
        style={this.styles}
        onClick={this.toggleModal}
      >
       {content}
      </button>
    );
  }
}
