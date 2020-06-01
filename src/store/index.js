import Vue from 'vue'
import Vuex from 'vuex'

function sleep(){
    return new Promise((reslove)=>{
        setTimeout(() => {
            reslove()
        }, 3000);
    })
}
Vue.use(Vuex)
let store = new Vuex.Store({
    strict:true,
    state:{
        artical_list:[],
        detail:null,
        cur_page:0,
        loading:false,
        loading_more:false,
    },
    mutations:{
        appendArticaleList(state,arg){
            state.artical_list = state.artical_list.concat(arg)
        },
        addPage(state){
            state.cur_page ++;
        },
        beforeLoading(state){
            state.loading = true
        },
        loaded(state){
            state.loading = false
        },
        starLoadingMore(state){
            state.loading_more = true
        },
        endLoadingMore(state){
            state.loading_more = false
        },
        setDetail(state,arg){
            state.detail = arg;
        }
    },
    actions:{
        async loadOneMorePage({commit},arg){
            arg = arg || 0
            commit('beforeLoading')
            commit('starLoadingMore')
            let data = await (await fetch(`http://111.229.241.56:8090/list?page=${arg}`)).json()
            commit('endLoadingMore')
            commit('loaded')
            commit('appendArticaleList',data)
            commit('addPage')
        },
        async loadDetail({commit},arg){
            let detail = await (await fetch(`http://111.229.241.56:8090/detail?id=${arg}`)).json();
            console.log(detail)
            commit('setDetail',detail)
        }
    },
    getters:{
        list_data(state){
            // console.log(state.cur_page)
            if(state.cur_page == 0){
                store.dispatch('loadOneMorePage');
            }
            return state.artical_list;
        }
    }
})

export default store;