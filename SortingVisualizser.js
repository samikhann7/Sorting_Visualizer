import React, { Component } from 'react'
import './SortingVisualizer.css'


export class SortingVisualizser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }
    componentDidMount() {
        this.resetArray();
    }

    refreshPage=()=> {
        window.location.reload(false);
    }

    resetArray=()=> {
        const array = []
        for (let i = 100; i >0; i--) {
            array.push(randomGenerator(5, 700));
        }
        let bars=document.getElementsByClassName('array_bar')
        for (let i = 0; i < bars.length; i++) {
            bars[i].style.backgroundColor = "#8ABD91";
        }
        this.setState({array})
    }

    bubble=()=>{
        const {array}=this.state
        let n=array.length
        let a=[]
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n-i-1; j++) {
                if (array[j]>array[j+1]) {
                    let t=array[j];
                    array[j]=array[j+1];
                    array[j+1]=t
                    a.push([j,j+1,1])
                }
                else{
                    a.push([j,j+1,0])

                }
            }
        }
        console.log(array);
        a.push([0,0,0])
        return a;
    }
    insertion=()=>{
        const {array}=this.state
        let n=array.length
        let a=[]
        for (let i = 1; i < n; i++) {
            for (let j = i; j > 0; j--) {
                if (array[j]<array[j-1]) {
                    let t=array[j];
                    array[j]=array[j-1];
                    array[j-1]=t
                    a.push([j-1,j,1])
                }
                else{
                    a.push([j-1,j,0])

                }
            }
        }
        console.log(array);
        a.push([0,0,0])
        return a;
    }
    selection=()=>{
        const {array}=this.state
        let n=array.length
        let a=[]
        for (let i = 0; i < n; i++) {
            let ind=i;
            for (let j = i; j < n; j++) {
                if (array[j]<array[ind]) {
                    ind=j;
                }
            }
            let t=array[i];
            array[i]=array[ind];
            array[ind]=t;
            if(ind===i){
                a.push([ind,i,0])
            }
            else{
                a.push([ind,i,1]);
            }
        }
        console.log(array);
        a.push([0,0,0])
        return a;
    }


    
    animateB=()=>{
        let anim=this.bubble()
        let bars=document.getElementsByClassName('array_bar')
        console.log(anim)
        for (let i = 0; i < anim.length; i++) {
            const element = anim[i];
            setTimeout(() => {
                // if (bars[element[0]].style.backgroundColor === "#8ABD91") {
                //     bars[element[0]].style.backgroundColor = "#D1D1D1";
                // }
                // else{
                //     bars[element[0]].style.backgroundColor = "#8ABD91";
                // }
                // if (bars[element[1]].style.backgroundColor === "#D1D1D1") {
                //     bars[element[1]].style.backgroundColor = "#8ABD91";
                // }
                // else{
                //     bars[element[1]].style.backgroundColor = "#D1D1D1";
                // }



                // bars[element[0]].style.backgroundColor = "#D1D1D1"
                // if(element[0]<bars.length-1){

                //     bars[element[0]+1].style.backgroundColor = "#D1D1D1"
                //     setTimeout(() => {
                        
                //     }, (i+1)*1000);
                //     bars[element[0]+1].style.backgroundColor = "#8ABD91"
                // }
                if(element[2]===1){
                    let tempH=bars[element[0]].style.height;
                    bars[element[0]].style.height = bars[element[1]].style.height;
                    bars[element[1]].style.height = tempH;
                }
                bars[element[0]].style.backgroundColor = "#D1D1D1";
                bars[element[0]].style.backgroundColor = "#8ABD91";
                bars[element[1]].style.backgroundColor = "#D1D1D1";
                setTimeout(() => {
                    
                }, (i+1));
            }, i);
        }
        setTimeout(() => {
            
        }, 10000);
        console.log(bars);
    }
    animateI=()=>{
        let anim=this.insertion()
        let bars=document.getElementsByClassName('array_bar')
        console.log(anim)
        for (let i = 0; i < anim.length; i++) {
            const element = anim[i];
            setTimeout(() => {

                if(element[2]===1){
                    let tempH=bars[element[0]].style.height;
                    bars[element[0]].style.height = bars[element[1]].style.height;
                    bars[element[1]].style.height = tempH;
                }
                bars[element[0]].style.backgroundColor = "#D1D1D1";
                bars[element[0]].style.backgroundColor = "#8ABD91";
                bars[element[1]].style.backgroundColor = "#D1D1D1";
                setTimeout(() => {
                    
                }, (i+1));
            }, i);
        }
        setTimeout(() => {
            
        }, 10000);
        console.log(bars);
    }
    animateS=()=>{
        let anim=this.selection()
        let bars=document.getElementsByClassName('array_bar')
        console.log(anim)
        for (let i = 0; i < anim.length; i++) {
            const element = anim[i];
            setTimeout(() => {

                if(element[2]===1){
                    let tempH=bars[element[0]].style.height;
                    bars[element[0]].style.height = bars[element[1]].style.height;
                    bars[element[1]].style.height = tempH;
                }
                bars[element[0]].style.backgroundColor = "#D1D1D1";
                bars[element[0]].style.backgroundColor = "#8ABD91";
                bars[element[1]].style.backgroundColor = "#D1D1D1";
                setTimeout(() => {
                    
                }, (i+1));
            }, 50*i);
        }
        setTimeout(() => {
            
        }, 10000);
        console.log(bars);
    }
    render() {
        const { array } = this.state
        return (
            <>
                <div className="cont">

                    <div className='bars'>
                        {
                            array.map((value, idx) => (
                                <div className='array_bar' key={idx} style={{ height: `${value / 1.15}px` }}></div>
                            ))
                        }

                    </div>
                    <div className="bot">
                        <button onClick={this.refreshPage}>Generate</button>
                        <button onClick={this.animateB}>Bubble Sort</button>
                        <button onClick={this.animateI}>Insertion Sort</button>
                        <button onClick={this.animateS}>Selection Sort</button>
                    </div>
                </div>
            </>

        )
    }
}
function randomGenerator(ll, ul) {
    return Math.floor(Math.random() * (ul - ll + 1) + ll)
}
export default SortingVisualizser
