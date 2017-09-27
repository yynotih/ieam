<template>
    <div id='Test'>
        <span :title='title'>{{test_greet}}</span>
    </div>
</template>

<script>
export default{
    name: 'Test',
    data(){
        return {
            title: 'GOOD LUCK!',
            test_greet: 'Welcome to my test_page'
        } 
    }
}
</script>

<style>
    
</style>