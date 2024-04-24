<template>
  <div ref="rootEl"></div>
</template>

<script setup>
import TuiImageEditor from 'tui-image-editor';
import 'tui-image-editor/dist/tui-image-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import { onMounted, onUnmounted, ref } from 'vue';

const rootEl = ref(null);
let imageEditorInst = null;

const props = {
  includeUI: {
    menu: ['shape', 'filter', 'text'],
    initMenu: 'filter',
    uiSize: {
      width: '1000px',
      height: '700px'
    },
    menuBarPosition: 'bottom'
  },
  cssMaxWidth: 700,
  cssMaxHeight: 500,
  selectionStyle: {
    cornerSize: 20,
    rotatingPointOffset: 70
  }
};

onMounted(() => {
  imageEditorInst = new TuiImageEditor(rootEl.value, props);
});

onUnmounted(() => {
  imageEditorInst.destroy();
  imageEditorInst = null;
});
</script>

<style>
.tui-image-editor-header-logo {
  display: none;
}
</style>
