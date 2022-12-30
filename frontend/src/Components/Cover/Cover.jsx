import React from 'react'
import './style.css'
import cover1 from '../../Assets/MESlogo1.png'

function Cover() {
  return (
    <div className='cover_div'>
           <h1 className="h_primary">WELCOME TO</h1>
           <h2 className="h_secondary">Mechanical Engineering Society</h2>
           <img src={cover1} alt="img" />
           <h3 className="h_tertiary">NIT SILCHAR</h3>
    </div>
  )
}

export default Cover

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<link rel="stylesheet" href="css/style.css">
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>

<style>

body{
    margin: 0px !important;
} 
img{
    position: absolute;
    margin: 303px 666px 306px 672px;
    width: 390px;
    height:374px;
} 

body{
    
    background-repeat: no-repeat !important;
    
    background: url('image 1.png');
    background-size: cover !important;
    width: 1728px ! important;
    height: 983px ! important;
    z-index: -1;
    margin: 0px ! important;
    
}
body::before{
    content: "";
    position: absolute;
    z-index: -1;
    width: 1728px;
    height: 983px;
    top:0;
    left:0;
    background: rgba(25, 25, 25, 0.7) ;
}
h1{
    color: #FFFFFF;
    width:806px;
    height: 188px;
    -webkit-text-stroke: 2px  #FFFFFF;
     

}
.h-primary{ 
    position: absolute;
    font-size: 125px;
    font-weight: 400;
    font-family: 'poppins' ;
    margin: 88px 466px 707px 456px;
    
    
} 
h2{
    color: #FFFFFF;
    width: 310px;
    height: 218px;
    -webkit-text-stroke: 2px  white;
    
    
}
.h-secondary{
    position:absolute;
    font-size: 145px;
    font-weight: 400;
    font-family: 'Poppins';
    font-style: normal;
    margin:730px 1117px 54px 301px;
    
    

} 
h3{
    color: #FFFFFF;
    width: 837px;
    height: 218px;
}
.h-tertiary{
    position:absolute;
    
    font-size: 145px;
    font-weight: 400;
    font-family: 'poppins';
    margin:711px 255px 54px 636px;
    

} 


</style>
<body>
    
    
        <h1 class="h-primary">WELCOME TO</h1>
         <h2 class="h-secondary">MES</h1> -->
         <img src="mes logo-01 1.png"> -->
         <h3 class="h-tertiary">NIT SILCHAR</h3>
    
    
    
</body>
</html>
*/