import React from 'react'
import styled from 'styled-components'
import './Main.css'


const Container_main=styled.div`
 margin-top:2.7em;
 height : 80%;
 display: flex;
 justify-content: space-around;
 padding-bottom:50px;

 @media (max-width: 768px){
     height:100%;
     width:100%;
     overflow:hidden;

 }

`

const Leftdetails=styled.div`

margin: auto 0;
flex-wrap: wrap;
text-align: left;
vertical-align:middle;
padding-left:2.875em;
h1{
    font-size:3.75em;
    text-align:left;
}
p{
    max-width:33.75em;
    font-size:20px;
    line-height:24.8px;
    margin-top:0.75em;
    margin-bottom:1.75em;
}
article{
    width:150px;
    border-radius:1.25em;
    background-color:rgba(116, 113, 113, 1);
    color:#fff;
    margin-left:10px;
    font-size:24px;
    margin-top:3px;
    

}
.White{
    color:#fff;
    height:24px;
    text-align:center;
}
@media (max-width: 768px) {

    display: none;
}
`
const Leftdetail=styled.div`

margin: auto 0;
flex-wrap: wrap;
text-align: left;
vertical-align:middle;
padding-left:2.875em;

@media (max-width: 768px) {

    margin:30px;
}
h1{
    font-size:3.75em;
    text-align:left;

    @media (max-width: 768px) {

        font-size:16px;
        text-align:center;
        margin-top:-230px;
    }
}
p{
    max-width:33.75em;
    font-size:20px;
    line-height:24.8px;
    margin-top:0.75em;
    margin-bottom:1.75em;

    @media (max-width: 768px) {

        font-size:8px;
        text-align:center;
        line-height:9.75px;
    }

    
}
article{
    width:150px;
    border-radius:1.25em;
    background-color:rgba(116, 113, 113, 1);
    color:#fff;
    margin-left:10px;
    font-size:24px;
    margin-top:3px;

    @media (max-width: 768px) {

        width:65px;
        height:19px;
        text-align:center;
    }
    

}
.White{
    color:#fff;
    height:24px;
    text-align:center;

    @media (max-width: 768px) {

    text-align:center;

    }
}

`
const Rightdetails=styled.div`

 
img{
    height:562px;
    width:500px;
    
}
`
const Rightdetail=styled.div `

 
img{
    height:562px;
    width:500px;
    
}

@media (max-width: 768px){

    flex:1;
img{
    width:172px;
    height:199px;
}
}


    
`
const Bottomdetails=styled.div`

img:not(:first-child){

    height:130px;
    width:115px;

    @media (max-width: 768px) {
        width:100px;
        height:112.42px;
    }

}
img:first-child{
    height:140px;
    width:125px; 
    border:2px solid black; 

    @media (max-width: 768px) {
        width:90px;
        height:101.42px;
    }
}






`
const LeftArrow=styled.div`


img{
    height:20px;
    width:10px;
    border:2px solid black;
    border-radius:1.25em;
    padding : 20px;
    position:absolute;
    top:50%;
    left:-1em;
    background-color:#fff;

}

@media (max-width: 768px) {


    display:none;
}

`
const RightArrow=styled.div`

img{
    height:20px;
    width:10px;
    border:2px solid black;
    border-radius:1.25em;
    padding: 20px;
    position:absolute;
    top:50%;
    right:-1em;
    background-color:#fff;
    

    
}


@media (max-width: 768px) {


    display:none;
}
`
const Imgdiv=styled.div`
    height: 35.125em;
    width:31.25em;
    position:relative;
    margin-bottom:0.75em;
    margin-right:2.43em;
    margin-top:4.68em;


    @media (max-width: 768px){

    .firstimg-m{
        display:inline-block;
        
    }
}   

    .firstimg-m{
        display:none;
    }
   
  

 


`
const Mobile=styled.div`

 @media (max-width: 768px){


    h1{
        text-align:center;

    }
    p{
        display:block;
    }

    

 }


`

const Main = () => {
  return (


    <div>
       <Container_main>

        <Leftdetails>
        <h1>Sohni Juneja</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec posuere mauris, ut lacinia lectus. Donec ut enim mauris. Sed molestie Lorem ipsum dolor sit amet, </p>
         <article><p className="White">Read More</p></article>
        </Leftdetails>
        <Rightdetails>
            <Imgdiv>
            <div className="bride">
        <img className="firstimg"src="./Images/Rectangle 70.png" alt="" />
        <img className="firstimg-m"src="./Images/Rectangle 70.png" alt="" />
        <img className="firstimg-m"src="./Images/Rectangle 70.png" alt="" />
        </div>
        <LeftArrow>
            <img className="lefticon"src="./Images/Left.png" alt="" />
            
        </LeftArrow>
        <RightArrow>
        <img className="righticon" src="./Images/Right.png" alt="" />
        </RightArrow>
          </Imgdiv>

        <Bottomdetails>

            <img src="./Images/Rectangle 68.png" alt="" />
            <img src="./Images/Rectangle 46.png" alt="" />
            <img src="./Images/Rectangle 76.png" alt="" />
            <img src="./Images/Rectangle 77.png" alt="" />

        </Bottomdetails>
        </Rightdetails>



    </Container_main>

    <div className="mobile-about">
        
        <Leftdetail>
        <h1>Sohni Juneja</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec posuere mauris, ut lacinia lectus. Donec ut enim mauris. Sed molestie Lorem ipsum dolor sit amet, </p>
         <article><p className="White">Read More</p></article>
        </Leftdetail>
        <Rightdetail>
            <Imgdiv>
            <div className="bride">
        <img src="./Images/Rectangle 6.png" alt="" />
       
        </div>
       
          </Imgdiv>

        
        </Rightdetail>


    </div>
    </div>


  )
}

export default Main