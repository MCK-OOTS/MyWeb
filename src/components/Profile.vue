<template>
  <!--프로필 영역-->
  <section id="profile" class="profile">
    <div class="profile-inner">

      <br><br>
      <h2 class="profile-title">ABOUT ME</h2>
      <br />

      <div class="profile-content">
      
        <div class="profile-description">
          <p>안녕하세요!</p>
          <p>클라이언트의 요구를 최우선으로 생각하는 신입 개발자 민찬기 입니다.</p>
          <p>지속적인 소통을 통해 최적의 솔루션을 제공하고 함께 성장하는</p>
          <p>개발자가 되기 위해 최선을 다하겠습니다.</p>
          <p>
            <a href="https://github.com/MCK-OOTS"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
            width="100" height="100" alt="GitHub바로가기" title="GitHub 바로가기"></a>
          </p>
        </div>

        <div class="profile-info" style="">
          생년월일<br>
          - 2001.11.27 <br><br>
          연락처 <br>
          010-9710-3847 <br /><br>
          이메일<br />
          alsmin110@gmail.com <br /><br /> 
          학력
       
          <ul>
            <li>인하공업 전문대학교<br><span style="font-size: small;">(컴퓨터정보공학과, IT융합공학부)</span></li>
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
  background-color: #fff9db;

  &-inner {
    max-width: 800px;
    margin: 0 auto;
  }

  &-title {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }

  &-content {
    display: flex;

    .profile-description { /* 위치 조정 */
      flex: 2;
      font-weight: 1000;
      line-height: 1.6;
      margin-left: -50px;
    }

    .profile-info {
      font-weight: 1000;
      margin-bottom: auto;
    }
  }
}

</style>
