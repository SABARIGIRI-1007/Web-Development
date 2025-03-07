const count =JSON.parse(localStorage.getItem('count')) || {
    win:0,loss:0
    } ;
    let res='';
    let cv=''
    let h=''

    console.log(typeof count);

    function flipCoin() {
        return Math.random() >= 0.5 ? 'head' : 'tail';
    }


    function HT() {
        h=document.getElementsByClassName('h').value=`head`;
        cv=flipCoin();
        res = (cv === 'head') ? 'You win!' : 'You lose!';
        update(res);
        console.log(res);
    }

    function TH() {
        h=document.getElementsByClassName('t').value='tail';
        cv = flipCoin();
        res = (cv === 'tail') ? 'You win!' : 'You lose!';
        update(res);
        console.log(res);
    }
    function update(res) {
        if (res === 'You win!') {
            count.win += 1;
        } else {
            count.loss += 1;
        }
        localStorage.setItem('count',JSON.stringify(count));
        updatemessage(res);
        
    }
    function Rest(){
        let con=confirm('The Game Will be Reset');
        if(con){
            localStorage.removeItem('count');
            count.win=0;
            count.loss=0;
            clearmessage('Game Reset! Start Fresh!');
        }
        else{
            updatemessage(res);
        }
    }
    function updatemessage(message){
        document.getElementById('page').innerHTML=`${message}`;
        document.getElementById('page2').innerHTML=`
        <span class="yc">you</span> <img src="../imges/${h}.jpg" class="Move-coin1">
        <img src="../imges/${cv}.jpg" class="Move-coin1"><span class="cy">Computer</span>`;
        document.getElementById('page1').innerHTML = `Wins: ${count.win} | Losses: ${count.loss}`;

    }
    function clearmessage(val){
        document.getElementById('page2').innerHTML=``;
        document.getElementById('page').innerHTML=`${val}`;
        document.getElementById('page1').innerHTML=` Wins:${count.win=0} |Losses:${count.loss=0}`;
    }
