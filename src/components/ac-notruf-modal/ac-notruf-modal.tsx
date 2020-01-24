import { Component, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'ac-notruf-modal',
  styleUrl: 'ac-notruf-modal.css',
  shadow: true
})
export class AcNotrufModal {
  /**
   * The iframe src.
   */
  @Prop() src: string;

  @Prop({
    mutable: true,
    reflectToAttr: true
  })
  public visible: boolean;

  /**
   * Is true if the iframe is loading.
   */
  @State() isLoading: boolean;

  @Watch('visible')
  watchHandler(newValue: boolean) {
    if (newValue) {
      this.isLoading = true;
    }
  }

  private handleCloseClick = () => {
    this.visible = false;
  };

  private onLoadIframe = () => {
    this.isLoading = false;
  };

  render() {
    return (
      <div class={'arztcloud-service-container' + (this.visible ? ' visible' : '')  + (this.isLoading ? ' loading' : '')} tabindex="-1" onClick={this.handleCloseClick}>
        <div class="iframe-container notruf-modal">
          <button class="close" onClick={this.handleCloseClick}>&times;</button>
          <iframe src={this.visible ? this.src : ''} onLoad={this.onLoadIframe}></iframe>
        </div>
        <div class="loading-screen">
          <span class="bounce1"></span>
          <span class="bounce2"></span>
          <span></span>
        </div>
      </div>
    );
  }
}
