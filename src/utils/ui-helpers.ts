export const getMetricIcon = (text: string) => {
    if (!text) return '✦';
    const lowerText = text.toLowerCase();

    if (['₹', '$', 'revenue', 'margin', 'price'].some(k => lowerText.includes(k))) return '💰';
    if (['roi', 'growth', 'scale', '%'].some(k => lowerText.includes(k))) return '📈';
    if (['user', 'customer', 'retention', 'traffic'].some(k => lowerText.includes(k))) return '👥';
    if (['time', 'speed', 'latency', 'ms', 'fast'].some(k => lowerText.includes(k))) return '⚡';

    return '✦';
};
