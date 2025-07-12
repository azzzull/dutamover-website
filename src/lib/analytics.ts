// Google Analytics 4 Events untuk tracking konversi
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: 'dutamover_website',
      ...parameters,
    });
  }
};

// Specific tracking functions
export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    event_category: 'contact',
    event_label: 'whatsapp_button',
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    event_category: 'contact',
    event_label: 'phone_button',
  });
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    event_category: 'service',
    event_label: serviceName,
  });
};

export const trackQuoteRequest = () => {
  trackEvent('quote_request', {
    event_category: 'conversion',
    event_label: 'survey_request',
    value: 1,
  });
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
