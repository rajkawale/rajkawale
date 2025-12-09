/**
 * Microsoft Clarity Event Tracking Utility
 * Tracks custom events for user behavior analysis
 */
export function trackEvent(eventName: string): void {
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('event', eventName);
  }
}

