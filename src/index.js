/**
 * resend-sdk · sovereign wrapper for Resend
 * Email
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://resend.com/docs/api-reference
 * Homepage: https://resend.com
 */

export class Resend {
  constructor({ apiKey, baseURL = 'https://resend.com', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://resend.com/docs/api-reference. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('resend ' + res.status);
    return res.json();
  }
}

export default Resend;

// Metadata
export const meta = {
  "name": "Resend",
  "category": "Email",
  "homepage": "https://resend.com",
  "docs_url": "https://resend.com/docs/api-reference",
  "endpoints_count": 0
};
