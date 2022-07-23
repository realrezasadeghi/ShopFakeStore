import { Ref, computed } from "vue";

export function useModelWrapper<T>(
  modelValue: Ref<T>,
  emit: {
    (e: "update:modelValue", value: T): void;
  }
) {
  const inputValue = computed({
    get() {
      return modelValue.value;
    },
    set(value: T) {
      emit("update:modelValue", value);
    },
  });
  return {
    value: inputValue,
  };
}
