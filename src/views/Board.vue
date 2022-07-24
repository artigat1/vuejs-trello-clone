<template>
    <div class="board">
        <div class="flex flex-row items-start">
            <board-column v-for="(column, $columnIndex) of board.columns"
                          :key="column.name"
                          :board="board"
                          :column="column"
                          :columnIndex="$columnIndex" />

            <div class="column flex">
                <input v-model="newColumnName"
                       class="p-2 mr-2 flex-grow"
                       placeholder="New column name"
                       type="text"
                       @keyup.enter="createColumn" />
            </div>
        </div>

        <div v-if="isTaskOpen"
             class="task-bg"
             @click.self="close">
            <router-view />
        </div>
    </div>
</template>

<script>
import BoardColumn from '@/components/BoardColumn.vue'
import { useBoardStore } from '@/stores/board.store'

export default {
  name: 'Board',

  setup () {
    const boardStore = useBoardStore()

    return {
      boardStore
    }
  },

  components: {
    BoardColumn
  },

  data () {
    return {
      newColumnName: ''
    }
  },

  computed: {
    board () {
      return this.boardStore.board
    },

    isTaskOpen () {
      return this.$route.name === 'task'
    }
  },

  methods: {
    close () {
      this.$router.push({ name: 'board' })
    },

    createColumn () {
      this.boardStore.createColumn({
        name: this.newColumnName
      })
      this.newColumnName = ''
    }
  }
}
</script>

<style lang="css">
    .task {
        @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
    }

    .column {
        @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
        min-width: 350px;
    }

    .board {
        @apply p-4 bg-teal-dark h-full overflow-auto;
    }

    .task-bg {
        @apply pin absolute;
        background: rgba(0, 0, 0, 0.5);
    }
</style>
