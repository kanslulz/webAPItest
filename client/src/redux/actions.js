
export const NAVIGATE_TO_FEATURE = 'NAVIGATE_TO_FEATURE';

export function navigateToFeature(featureDescriptor) {
  return {
    type: NAVIGATE_TO_FEATURE,
    featureDescriptor,
  };
}
