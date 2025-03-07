let array=[]
function AddToDolist(){
    let InputText=document.getElementById('information').value;
    let InputDate=document.getElementById('Date').value;
    let InputTime=document.getElementById('Time').value;
    array.push({name:InputText,date:InputDate,time:InputTime});
    console.log(array);
    if(InputText !='' && InputDate != '' && InputTime !=''){
        ['information','Date','Time'].forEach(id => {
            let element=document.getElementById(id);
            if(element) element.value='';
        })
    }
    else if(InputText ===''|| InputTime === '' || InputDate === ''){
        alert('Enter the text');
        let n=array.length;
        if(n==0){
            array.splice(0,1);
        }
        else if (n > 0){
            array.splice(n-1,1);
        }
    }
    console.log(array);
    listarray();
}
function listarray(){
    let val='';
    for(let i=0;i<array.length;i++){
        let Objectarray=array[i];
        let {name,date,time}=Objectarray;
        let value=`
        <div>${name}</div>
        <div>${date}</div>
        <div>${time}</div>
        <button onclick="array.splice(${i},1);listarray();" class="delet-bt">Delete</button>`;
         val +=value;
    }
    document.getElementById('data').innerHTML=val;
}