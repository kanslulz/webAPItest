import BgfMain from './background-fetch/Main.js';
import BsMain from './background-sync/Main.js';

class FeatureDescriptor {
  constructor(name, component, path, description, specLink, blogLink) {
    this.name = name;
    this.component = component;
    this.path = path;
    this.description = description;
    this.specLink = specLink;
    this.blogLink = blogLink;
  }
};

const featureDescriptors = [
  new FeatureDescriptor('Background Fetch', BgfMain, '/backgroundfetch', 'A short description about BGF', null, null),
  new FeatureDescriptor('Background Sync', BsMain, '/backgroundsync', 'A short description about BS', null, null),
]; 

export default featureDescriptors;