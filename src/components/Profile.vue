<template>
  <!--프로필 영역-->
  <section id="profile" class="profile">
    <div class="profile-inner">

      <br><br>
      <h2 class="profile-title">Profile</h2>
      <br />

      <div class="profile-content">
    
        <div class="profile-info1">
          생년월일<br>
          2001.11.27 <br><br>
          연락처 <br>
          010-9710-3847 <br /><br>
          이메일<br />
          alsmin110@gmail.com <br /><br /> 
          거주지<br>
          서울 금천구
        </div>

        <div class="profile-info2">
          학력
          <ul>
            <li>인하공업 전문대학교<br><span style="font-size: small;">(컴퓨터정보공학과, IT융합공학부/4.21)</span></li>
            <li>서울전자고등학교<br><span style="font-size: small;">(컴퓨터 네트워크과)</span></li>
          </ul>
            경력
          <ul>
            <li>없음</li>
          </ul>

          </div>
                 
     
      </div>
    </div> 
  </section>
</template>

<style lang="scss">
.profile {
  padding: 20px;
  background-color: black;
  color: white;

  &-inner {
    max-width: 800px;
    margin: 0 auto;
  }

  &-title {
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
  }

  &-content {
    display: flex;
    font-weight: 1000;
    margin-bottom: auto;

    .profile-info1{
      flex: 2;
      
    }
    .profile-info2{

    }

  }
}

</style>
