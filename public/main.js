
let isClickable = true;
window.onclick = function(e){
    let presence = new Presence(e.clientX, e.clientY,e);
    if(presence.checkValidiy()){
        presence.show();
        presence.remember()
    }else{
        console.log('this place is reserved')
    }
}

function Presence(x,y,target){
    this.x = x;
    this.y = y;
    this.target = target;
    
    this.checkValidiy = function(){
        if(this.target.path[0].nodeName == 'DIV'){
            return false;
        }else{
            return true;
        }
    }

    this.show = function(){
        let div = document.createElement('div');
        div.classList.add('block')
        div.id = `block${this.x}${this.y}`;
    
        div.dataset.x = this.x;
        div.dataset.y = this.y;
        
        div.style.background = `${randomColor()}`;
        div.style.top = this.y+'px';
        div.style.left = this.x+'px';

        document.body.appendChild(div)
        setTimeout(()=>{
            div.classList.add('visible')
        },50)
    }

    this.remember = function(){
        $.ajax({
            url:'/save',
            method:'get',
            data:{
                x:this.x,
                y:this.y
            },
            success:function(e){
                console.log(JSON.parse(e))
            }
        })
    }
}

function randomColor(){
    let colors = ['#001f3f','#0074D9','#7FDBFF','#39CCCC','#3D9970','#2ECC40','#01FF70','#FFDC00','#FF851B','#FF4136','#85144b','#F012BE','#B10DC9','#111111','#AAAAAA','#DDDDDD']
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    let random = getRandomInt(0,colors.length - 1);
    return colors[random]
}