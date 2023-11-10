<template>
    <div class="pop-button">
        <slot name="default" class="pop-button-primary">
            <span class="pop-primary">{{ value }}</span>
        </slot>
    </div>
</template>
<script setup lang="ts">
import { ref, defineProps, withDefaults } from 'vue';
import type { Props } from './types'

withDefaults(defineProps<Props>(), {
    size: 'middle',
    value:'提交'
})

</script>
<style lang="less" scoped></style>