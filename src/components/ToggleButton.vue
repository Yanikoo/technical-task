<template>
  <div>
    <input type="checkbox" :id="id" v-model="internalChecked" @change="emitChange" />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      internalChecked: this.value
    }
  },
  methods: {
    emitChange () {
      this.$emit('update:value', this.internalChecked)
    }
  },
  watch: {
    value (newValue) {
      this.internalChecked = newValue
    }
  }
}
</script>

<style scoped>
input[type='checkbox'] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 34px;
  height: 16px;
  background: rgba(220, 220, 220, 1);
  display: block;
  border-radius: 8px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50px;
  transition: 0.3s;
}

input:checked + label {
  background: rgba(49, 111, 238, 1);
}

input:checked + label:after {
  left: calc(100% - 2px);
  transform: translateX(-100%);
}

label:active:after {
  width: 16px;
}
</style>
