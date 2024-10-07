declare module 'react-native-share-menu' {
    export interface SharedItem {
      mimeType: string;
      data: string;
      extraData: any;
    }
  
    export function getInitialShare(
      callback: (item: SharedItem | null) => void
    ): void;
  
    export function addNewShareListener(
      callback: (item: SharedItem | null) => void
    ): { remove: () => void };
  
    export const ShareMenuReactView: {
      data: () => Promise<{ mimeType: string; data: string }>;
      dismissExtension: (errorMessage?: string) => void;
      continueInApp: (extraData?: any) => void;
    };
  }
  