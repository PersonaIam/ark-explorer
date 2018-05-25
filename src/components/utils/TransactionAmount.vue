<template>
  <span :class="{
    'text-red': transaction.senderId === $route.params.address,
    'text-green': transaction.recipientId === $route.params.address && !isSpecialType,
  }">{{ readableCrypto(transaction.amount) }}</span>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'

export default {
  props: {
    transaction: {
      type: Object,
      required: true
    },
    type: {
      type: Number,
      required: true
    }
  },

  computed: {
<<<<<<< HEAD
    isTransfer() {
      if (this.type !== undefined) {
        // 0 = transfer, 6 = timelock transfer, 7 = multipayment
        return this.type === 0 || this.type === 6 || this.type === 7
=======
    isSpecialType() {
      if (this.type !== undefined) {
        return this.type === 1 || this.type === 2 || this.type === 3
>>>>>>> Vote is now colored red and considered only an outgoing transaction.
      }
      return false
    }
  }
}
</script>
