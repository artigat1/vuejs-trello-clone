<template>
    <app-drop @drop="moveTaskOrColumn">
        <app-drag :transfer-data="{
                      type: 'column',
                      fromColumnIndex: columnIndex
                  }"
                  class="column">
            <div class="flex items-center mb-2 font-bold">
                {{ column.name }}
            </div>
            <div class="list-reset">
                <column-task v-for="(task, $taskIndex) of column.tasks"
                             :key="task.id"
                             :board="board"
                             :column="column"
                             :column-index="columnIndex"
                             :task="task"
                             :task-index="$taskIndex" />

                <input class="block p-2 w-full bg-transparent"
                       placeholder="+ Enter new task"
                       type="text"
                       @keyup.enter="createTask($event, column.tasks)" />
            </div>
        </app-drag>
    </app-drop>
</template>

<script>
import ColumnTask from '@/components/ColumnTask.vue'
import AppDrag from '@/components/AppDrag.vue'
import AppDrop from '@/components/AppDrop.vue'
import movingTasksAndColumnsMixin from '@/mixins/movingTaskAndColumns.mixin.js'

export default {
  name: 'BoardColumn',

  components: {
    AppDrag,
    AppDrop,
    ColumnTask
  },

  mixins: [
    movingTasksAndColumnsMixin
  ],

  methods: {
    createTask (event, tasks) {
      this.$store.commit('CREATE_TASK', {
        tasks,
        name: event.target.value
      })
      event.target.value = ''
    }
  }
}
</script>

<style lang="css">

    .column {
        @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
        min-width: 350px;
    }

</style>
