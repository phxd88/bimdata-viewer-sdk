<template>
  <div class="viewer">
    <BimdataViewer
      ref="bimdataViewerInstance"
      :accessToken="oidcAccessToken"
      :cfg="viewerConfig"
    />
  </div>
</template>

<script>
import BimdataViewer from "@bimdata/viewer";
import SnowflakesPlugin from "@/plugins/snowflakes/src/snowflakes.plugin.js";
import SplitPlugin from "@/plugins/split/src/split.plugin.js";
import BimObjectPlugin from "@/plugins/bimobject/dist/bimobject.plugin.js";
import { mapGetters } from "vuex";
import backgroundColor from "@/plugins/backgroundColor/src/backgroundColor.plugin.js";
import SvgExtractorPlugin from "@/plugins/svgExtractor/src/svgExtractor.plugin.js";
import platformDemo from "@/plugins/platformDemo/src/platformDemo.plugin.js";

export default {
  components: {
    BimdataViewer,
  },
  data() {
    return {
      viewerConfig: {
        cloudId: this.$route.query.cloudId,
        projectId: this.$route.query.projectId,
        ifcIds: [this.$route.query.ifcId],
        apiUrl: process.env.VUE_APP_BIMDATA_API_URL,
        bimdataPlugins: {
          contextSwitch: true,
        },
      },
    };
  },
  computed: {
    ...mapGetters(["oidcAccessToken"]),
  },
  mounted() {
    this.$refs.bimdataViewerInstance.registerPlugins([
      SvgExtractorPlugin,
      SnowflakesPlugin,
      SplitPlugin,
      BimObjectPlugin,
      backgroundColor,
      platformDemo,
    ]);
  },
};
</script>

<style scoped>
.viewer {
  height: 100vh;
  width: 100vw;
}
</style>
