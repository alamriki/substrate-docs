const analytics = {
  /**
   * Tracks an event by sending it to the analytics service.
   * @param {string} event - The name of the event to track.
   */
  trackEvent: event => {
    // Check if the analytics tracking function exists and is a function
    if (typeof window.sa_event === 'function') {
      try {
        // Send the event to the analytics service
        window.sa_event(event);
      } catch (error) {
        console.error('Failed to track event:', event, error);
      }
    }
  },
};

export default analytics;
