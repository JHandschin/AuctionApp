<template>
    <div>
        <div>
            I'm from the inside component
        </div>
        <div>
            <!-- prop value being used -->
            Prop received: "{{value}}"
        </div>
    </div>
</template>
<script>
export default {
    // prop is received from parent and can be used
    props: ['value'],
}
</script>
<style scoped>

</style>