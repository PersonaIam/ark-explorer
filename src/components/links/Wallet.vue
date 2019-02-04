<template>
  <span>
    <span class="hidden md:inline-block">
      <router-link v-if="!type" :to="{ name: 'wallet', params: { address: walletAddress } }">
        <span v-if="isKnown">{{ knownWallets[address] }}</span>
        <span v-else-if="delegate">{{ delegate.username }}</span>
        <span v-else-if="hasDefaultSlot"><slot></slot></span>
        <span v-else-if="address">{{ trunc ? truncate(address) : address }}</span>
      </router-link>

      <span v-if="type === 1">{{ $t("2nd Signature Registration") }}</span>
      <span v-else-if="type === 2">{{ $t("Delegate Registration") }}</span>
      <span v-else-if="type === 3">{{ $t("Vote") }}</span>
      <span v-else-if="type === 4">{{ $t("Multisignature Registration") }}</span>
      <span v-else-if="type === 5">{{ $t("IPFS") }}</span>
      <span v-else-if="type === 6">{{ $t("Register") }}</span>
      <span v-else-if="type === 7">{{ $t("Verify") }}</span>
      <span v-else-if="type === 8">{{ $t("Create Attribute") }}</span>
      <span v-else-if="type === 9">{{ $t("Update Attribute") }}</span>
      <span v-else-if="type === 10">{{ $t("Request Attribute Validation") }}</span>
      <span v-else-if="type === 11">{{ $t("Approve Attribute Validation Request") }}</span>
      <span v-else-if="type === 12">{{ $t("Decline Attribute Validation Request") }}</span>
      <span v-else-if="type === 13">{{ $t("Notarize Attribute Validation Request") }}</span>
      <span v-else-if="type === 14">{{ $t("Reject Attribute Validation Request") }}</span>
      <span v-else-if="type === 15">{{ $t("Cancel Attribute Validation Request") }}</span>
      <span v-else-if="type === 16">{{ $t("Request Identity Use") }}</span>
      <span v-else-if="type === 17">{{ $t("Approve Identity Use Request") }}</span>
      <span v-else-if="type === 18">{{ $t("End Identity Use Request") }}</span>
      <span v-else-if="type === 19">{{ $t("Cancel Identity Use Request") }}</span>
      <span v-else-if="type === 20">{{ $t("Decline Identity Use Request") }}</span>
      <span v-else-if="type === 21">{{ $t("Attribute Consumption") }}</span>
      <span v-else-if="type === 22">{{ $t("Run Reward Round") }}</span>
      <span v-else-if="type === 23">{{ $t("Reward") }}</span>
      <span v-else-if="type === 24">{{ $t("Update Reward Round") }}</span>
      <span v-else-if="type === 25">{{ $t("Create Service") }}</span>
      <span v-else-if="type === 26">{{ $t("Inactivate Service") }}</span>
    </span>

    <span class="md:hidden">
      <router-link v-if="!type" :to="{ name: 'wallet', params: { address: walletAddress } }">
        <span v-if="isKnown">{{ knownWallets[address] }}</span>
        <span v-else-if="delegate">{{ delegate.username }}</span>
        <span v-else-if="address">{{ truncate(address) }}</span>
      </router-link>

      <span v-if="type === 1">{{ $t("2nd Signature Registration") }}</span>
      <span v-else-if="type === 2">{{ $t("Delegate Registration") }}</span>
      <span v-else-if="type === 3">{{ $t("Vote") }}</span>
      <span v-else-if="type === 4">{{ $t("Multisignature Registration") }}</span>
      <span v-else-if="type === 5">{{ $t("IPFS") }}</span>
      <span v-else-if="type === 6">{{ $t("Timelock Transfer") }}</span>
      <span v-else-if="type === 7">{{ $t("Multipayment") }}</span>
      <span v-else-if="type === 8">{{ $t("Delegate Resignation") }}</span>
    </span>
  </span>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'

export default {
  props: {
    address: {
      type: String,
    },
    publicKey: {
      type: String,
    },
    type: {
      type: Number,
    },
    trunc: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({ delegate: null }),

  mounted() {
    this.determine()
  },

  watch: {
    delegates() {
      this.determine()
    },
    address() {
      this.determine()
    },
    publicKey() {
      this.determine()
    },
  },

  computed: {
    ...mapGetters('delegates', ['delegates']),
    ...mapGetters('network', ['knownWallets']),

    isKnown() {
      return this.knownWallets.hasOwnProperty(this.address)
    },

    walletAddress() {
      return this.delegate ? this.delegate.address : this.address
    },

    hasDefaultSlot() {
      return !!this.$slots.default
    },
  },

  methods: {
    determine() {
      this.address ? this.findByAddress() : this.findByPublicKey()
    },

    findByAddress() {
      this.delegate = this.delegates.find(d => d.address === this.address)
    },

    findByPublicKey() {
      this.delegate = this.delegates.find(d => d.publicKey === this.publicKey)
    },
  },
}
</script>
