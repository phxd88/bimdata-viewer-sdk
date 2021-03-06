import GltfExtractorComponent from './GltfExtractor.vue';
import icon from '../assets/export-gltf.svg';

export default {
  name: 'GltfExtractorPlugin', // The name of the plugin. this.$plugins.MyPluginName to access it from other plugins
  component: GltfExtractorComponent,
  display: {
    iconPosition: 'right', // Add an icon in the left or right panel. Value can be "left" or "right"
    content: 'simple' // How the viewer show the plugin content. Value can be "windowed", "simple" of "free"
  },
  tooltip: 'tooltip', // Can be an i18n path or a string shown in all languages
  keepActive: false, // If true, the window won't be closed if user click somewhere else.
  icon: {
    imgUri: icon,
  },
  i18n: {
    en: {
      tooltip: 'Download GLTF of the model'
    },
    fr: {
      tooltip: 'Téléchargez le GLTF du modèle'
    }
  }
};
