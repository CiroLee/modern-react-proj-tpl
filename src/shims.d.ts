// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from 'react';

//  all attributes: https://windicss.org/posts/attributify.html#utilities
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    absolute?: boolean;
    flex?: boolean;
    relative?: boolean;
    text?: string;
    before?: string;
    after?: string;
    shadow?: string;
    bg?: string;
    m?: string;
    block?: boolean;
  }
}
