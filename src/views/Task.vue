<template>
    <div class="task-view">
        <div class="flex flex-col flex-grow items-start justify-between px-4">
            <input :value="task.name"
                   class="p-2 w-full mr-2 flex-grow text-xl font-bold"
                   type="text"
                   @change="updateTaskProperty($event, 'name')"
                   @keyup.enter="updateTaskProperty($event, 'name')" />

            <textarea :value="task.description"
                      class="relative w-full bg-transparent px-2 border mt-2 h-64 border-none leading-normal"
                      @change="updateTaskProperty($event, 'description')"
                      @keyup.enter="updateTaskProperty($event, 'description')"></textarea>
        </div>
    </div>
</template>

<script>
import { useBoardStore } from '@/stores/board.store'

export default {
  setup () {
    const boardStore = useBoardStore()

    return {
      boardStore
    }
  },
  computed: {
    task () {
      return this.boardStore.getTask(this.$route.params.id)
    }
  },

  methods: {
    updateTaskProperty (event, key) {
      this.boardStore.updateTask({
        task: this.task,
        key,
        value: event.target.value
      })
    }
  }
}
</script>

<style>
    .task-view {
        @apply relative flex flex-row bg-white pin mx-4 m-32 mx-auto py-4 text-left rounded shadow;
        max-width: 700px;
    }
</style>
