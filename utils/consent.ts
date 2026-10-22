export type ConsentDecision = 'accepted' | 'declined';

const CONSENT_STORAGE_KEY = 'cookie_consent';
export const CONSENT_CHANGE_EVENT = 'cookie-consent-change';

// localStorage can throw (Safari private mode, blocked storage), so never let it crash the page.
export function readConsent(): ConsentDecision | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === 'accepted' || value === 'declined' ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(decision: ConsentDecision): void {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, decision);
  } catch {
    // Storage unavailable: the decision still applies for this page view.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: decision }));
}
