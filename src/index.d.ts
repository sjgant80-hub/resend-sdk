/**
 * resend-sdk TypeScript declarations
 */
export interface ResendOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Resend {
  constructor(options?: ResendOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Resend;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
