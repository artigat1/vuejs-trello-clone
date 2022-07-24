import { useBoardStore } from '@/stores/board.store'

export default {
  setup () {
    const boardStore = useBoardStore()

    return {
      boardStore
    }
  },

  props: {
    column: {
      type: Object,
      required: true
    },

    columnIndex: {
      type: Number,
      required: true
    },

    board: {
      type: Object,
      required: true
    }
  },

  methods: {
    moveTaskOrColumn (transferData) {
      if (transferData.type === 'task') {
        this.moveTask(transferData)
      } else {
        this.moveColumn(transferData)
      }
    },

    moveTask ({
      fromColumnIndex,
      fromTaskIndex
    }) {
      const fromTasks = this.board.columns[fromColumnIndex].tasks

      this.boardStore.moveTask({
        fromTasks,
        fromTaskIndex,
        toTasks: this.column.tasks,
        toTaskIndex: this.taskIndex
      })
    },

    moveColumn ({ fromColumnIndex }) {
      this.boardStore.moveColumn({
        fromColumnIndex,
        toColumnIndex: this.columnIndex
      })
    }
  }
}
