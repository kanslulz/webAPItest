import BgfMain from './background-fetch/Main.js';
import BsMain from './background-sync/Main.js';

class FeatureDescriptor {
  constructor(name, component, description, specLink, blogLink) {
    this.name = name;
    this.component = component;
    this.description = description;
    this.specLink = specLink;
    this.blogLink = blogLink;
  }
};

const featureDescriptors = [
  new FeatureDescriptor('Background Fetch', BgfMain, 'A short description about BGF', null, null),
  new FeatureDescriptor('Background Sync', BsMain, 'A short description about BS', null, null),
]; 

export default featureDescriptors;