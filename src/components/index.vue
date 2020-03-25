<template>
    <div>
        <Header></Header>
        <div class="index_36kr">
            <div class="pagewrap">
                <IndexMain></IndexMain>
                <IndexSide></IndexSide>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./inc/header"
    import Footer from "./inc/footer"
    import IndexMain from "./index_main"
    import IndexSide from "./index_side"
    export default {
        name:'index',
        components:{
            Header,
            Footer,
            IndexMain,
            IndexSide
        }
    }
</script>

<style scoped>

</style>