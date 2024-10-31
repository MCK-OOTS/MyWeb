<template>
    <header id="header" role="banner">

        <div class="header_inner">
            <h1>
                나의 포트폴리오 사이트
            </h1>
        
            <nav class="header_nav" role="navigation" style="font-weight: 600;">
              <ul>
                   <li><a href="#profile">profile</a></li>
                   <li><a href="#skill">skill</a></li>
                    <li><a href="#project">project</a></li>   
            </ul>
            </nav>
        </div>    
    </header>
</template>

<style lang="css">

#header {
  background-color: beige;
  z-index: 1000;
}

.header_inner {
  display: flex; 
  align-items: center;
  padding: 0 30px;

}
.header_nav{
  position: fixed;
  top: 10px;
  right: 5%;
  z-index: 1000;
}

.header_nav ul {
  display: flex; 
  list-style: none; 
}
.header_nav li a{
    text-decoration: none;
    color: inherit;
    font-family: 'Roboto', sans-serif;
}

.header_nav li {
  margin-left: 1rem; 
}


</style>