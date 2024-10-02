// src/types/fabric.d.ts
import 'fabric';

declare module 'fabric' {
  interface Object {
    sendToBack(): void;
  }
}
