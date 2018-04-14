(function(){
    let temp = 0;
    let methods = {
        init: function() {
            let self = this;
            console.log("Hello World");
            //bind event 
            document.getElementById("submit").onclick = (function(){
                self.submit();
            });
            
            document.getElementById("join-us").onclick = (function(){
                self.scroll_to_join();
            })
        },
        submit: function() {
            let allInfo = document.getElementsByClassName("input");
            this.valider().then(function(result) {
                console.log(result);
                let arr = [];
                for(let i = 0 ; i < allInfo.length ; i ++) {
                    let item = allInfo[i].querySelector("input").value;
                    arr.push(item);
                }
                submitForm(arr, "localhost").then(function(result){

                }).catch(function(result){

                });
            }).catch(function(result){
                console.log("none");
            });
            
        },



        scroll_to_join: function() {
            let item = document.querySelector(".bac2");
            console.log(item);
            window.scrollTo(0,item.offsetTop);  
        },


        valider: function() {
            return new Promise(function(resolve, reject) {
                let allInfo = document.getElementsByClassName("input");                
                for (let i = 0 ; i < allInfo.legnth ; i ++) {
                    let item = allInfo[i].querySelector("input").value;
                    console.log(item);
                    if (i == 2) {
                        if (item.match(/U201\d{6}/g)) {
                        } else {
                            reject('invalid id');
                        }
                    } else if (i == 4) {
                        if (item.match(/\w+\@\w+(\.\w+)+/g)) {
                        } else {
                            reject('invalid email');
                        }
                    } else {
                        if (item);
                        else
                            reject(i + 'cant be none');
                    }
                    //let item =allInfo[i].querySelector("input");
                }
                resolve('pass');
            });     
        }
        
    }
    methods.init();
})();



function submitForm(url, data) {
    let xmlhttp;
    return new Promise(function(resolve, reject){
        if (xmlhttp = new XMLHttpRequest()) {
           
            xmlhttp.open("post", url, true);
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.readyState == 200) {
                        resolve(JSON.parse(this.responseText), this);
                    } else {
                        reject("connect erro");
                    }
                }
            }
            xmlhttp.send(JSON.stringify(data))
        } else {
            reject("use webkit");
        }
    });
}