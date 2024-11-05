<template>
    <!--헤더 영역-->
    <header id="header" role="banner">

        <div class="header_inner">
            <h1>
                나의 포트폴리오 사이트
            </h1>
        
            <nav class="header_nav" role="navigation" style="font-weight: 600;">
              <ul>
                   <li><a href="#Aboutme">About Me</a></li>
                   <li><a href="#profile">profile</a></li>
                   <li><a href="#skill">skills</a></li>
                   <li><a href="#project">projects</a></li>   
            </ul>
            </nav>
        </div>    
    </header>
</template>

<style lang="css">

#header {
  background-color: black;
  color: white;
  
}

.header_inner { 
  display: flex; 
  align-items: center;
  padding: 0 30px;

}
.header_nav{ /*자리에 고정시켜 스크롤이 내려가도 따라오도록*/
  position: fixed;
  top: 10px;
  right: 5%;
  z-index: 1000; /* 다른요소 위에 표시되도록하는 스타일*/
}

.header_nav ul {
  display: flex; /* 목록 가로정렬 , 목록 스타일 제거  */
  list-style: none; 
}
.header_nav li a{ /* 링크 밑줄 제거*/
    text-decoration: none;
    color: inherit;
    font-family: 'Roboto', sans-serif;
}

.header_nav li {/*목록 간격 띄우기 */
  margin-left: 1rem; 
  color: #999999;
}


</style>