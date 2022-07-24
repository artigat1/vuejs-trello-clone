<template>
    <div @drop.stop="onDrop"
         @dragover.prevent
         @dragenter.prevent>
        <slot />
    </div>
</template>

<script lang="ts">
export default {
  name: 'AppDrag',

  methods: {
    onDrop (event) {
      const transferData = JSON.parse(event.dataTransfer.getData('payload'))
      this.$emit('drop', transferData)
    }
  }
}
</script>
