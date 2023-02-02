declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_LOCOMOTION_STREAM: string;
      LOCOMOTION_URL: string;
    }
  }
}

export {};
