/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AcNotrufButton {
    /**
    * Additional button classes.
    */
    'addClass': string;
    /**
    * If false, the default icon won't be used.
    */
    'default': boolean;
    /**
    * hint hint for button.
    */
    'hint': string;
    /**
    * Url of the icon image.
    */
    'iconUrl': string;
    /**
    * Value to adapt stroke width (0 (0%) ... 1 (100%) of regular).
    */
    'strokeWidth': number;
  }
  interface AcNotrufModal {
    /**
    * The iframe src.
    */
    'src': string;
    'visible': boolean;
  }
}

declare global {


  interface HTMLAcNotrufButtonElement extends Components.AcNotrufButton, HTMLStencilElement {}
  var HTMLAcNotrufButtonElement: {
    prototype: HTMLAcNotrufButtonElement;
    new (): HTMLAcNotrufButtonElement;
  };

  interface HTMLAcNotrufModalElement extends Components.AcNotrufModal, HTMLStencilElement {}
  var HTMLAcNotrufModalElement: {
    prototype: HTMLAcNotrufModalElement;
    new (): HTMLAcNotrufModalElement;
  };
  interface HTMLElementTagNameMap {
    'ac-notruf-button': HTMLAcNotrufButtonElement;
    'ac-notruf-modal': HTMLAcNotrufModalElement;
  }
}

declare namespace LocalJSX {
  interface AcNotrufButton {
    /**
    * Additional button classes.
    */
    'addClass'?: string;
    /**
    * If false, the default icon won't be used.
    */
    'default'?: boolean;
    /**
    * hint hint for button.
    */
    'hint'?: string;
    /**
    * Url of the icon image.
    */
    'iconUrl'?: string;
    /**
    * Value to adapt stroke width (0 (0%) ... 1 (100%) of regular).
    */
    'strokeWidth'?: number;
  }
  interface AcNotrufModal {
    /**
    * The iframe src.
    */
    'src'?: string;
    'visible'?: boolean;
  }

  interface IntrinsicElements {
    'ac-notruf-button': AcNotrufButton;
    'ac-notruf-modal': AcNotrufModal;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'ac-notruf-button': LocalJSX.AcNotrufButton & JSXBase.HTMLAttributes<HTMLAcNotrufButtonElement>;
      'ac-notruf-modal': LocalJSX.AcNotrufModal & JSXBase.HTMLAttributes<HTMLAcNotrufModalElement>;
    }
  }
}


