<template>
    <app-drop @drop="moveTaskOrColumn">
        <app-drag :transfer-data="{
                      type: 'task',
                      fromColumnIndex: columnIndex,
                      fromTaskIndex: taskIndex
                  }"
                  class="task"
                  @click.native="goToTask(task)">
            <span class="w-full flex-no-shrink font-bold">
                {{ task.name }}
            </span>
            <p v-if="task.description"
               class="w-full flex-no-shrink mt-1 text-sm">
                {{ task.description }}
            </p>
        </app-drag>
    </app-drop>
</template>

<script>
import AppDrag from '@/components/AppDrag.vue'
import AppDrop from '@/components/AppDrop.vue'
import movingTasksAndColumnsMixin from '@/mixins/movingTaskAndColumns.mixin.js'

export default {
  name: 'BoardTask',

  components: {
    AppDrag,
    AppDrop
  },

  mixins: [
    movingTasksAndColumnsMixin
  ],

  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },

  methods: {
    goToTask (task) {
      this.$router.push({
        name: 'task',
        params: {
          id: task.id
        }
      })
    }
  }
}
</script>

<style lang="css">

</style>
