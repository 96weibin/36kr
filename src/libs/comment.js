export default {
    mktime(t){
        if(t){
            if(typeof t == "number"){
                t *= 1000
            }
            let oData = new Date(t);
            return oData.getFullYear() + "-" + (oData.getMonth() + 1) + "-" + oData.getDate();
        } else {
            return null
        }
    }
}