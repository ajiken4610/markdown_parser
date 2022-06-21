<template>
  <div class="flex-textarea">
    <div class="flex-textarea__dummy" aria-hidden="true">
      {{ modelValue + "\u200b" }}
    </div>
    <textarea
      id="flex-textarea"
      class="flex-textarea__textarea"
      @input="updateValue"
      :value="modelValue"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
defineProps<{
  modelValue: string;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
function updateValue(event: Event) {
  emit("update:modelValue", (event.currentTarget as HTMLTextAreaElement).value);
}
</script>

<style lang="scss">
.flex-textarea {
  position: relative;
  font-size: 1rem;
  line-height: 1.8;
}

.flex-textarea__dummy {
  overflow: hidden;
  visibility: hidden;
  box-sizing: border-box;
  padding: 5px 15px;
  min-height: 100px;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  border: 1px solid;
}

.flex-textarea__textarea {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  overflow: hidden;
  box-sizing: border-box;
  padding: 5px 15px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 1px solid #b6c3c6;
  border-radius: 4px;
  color: inherit;
  font: inherit;
  letter-spacing: inherit;
  resize: none;
}

.flex-textarea__textarea:focus {
  box-shadow: 0 0 0 4px rgba(35, 167, 195, 0.3);
  outline: 0;
}
</style>
