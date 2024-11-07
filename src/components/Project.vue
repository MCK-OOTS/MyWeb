<template>
  <!-- 프로젝트 영역 -->
  <h1 class="project-header">Projects</h1>

  <div class="project-section" id="project">

    <!--마우스 올라면 해당 카드의 인덱스를 저장-->
    <div
      class="project-card"
      v-for="(project, index) in projects"
      :key="project.id"
      @mouseover="activeCard = index" 
      @mouseleave="activeCard = null"> 
    
      <img :src="project.image" alt="Project Image" class="project-image" /> <!--프로젝트 이미지, 제목-->
      <h3 class="project-title">{{ project.title }}</h3>

       <!--저장된 인덱스와 일치되면 보이도록-->
      <div class="tooltip" v-if="activeCard === index">
        <p class="duration">{{ project.duration }}</p>
        <p class="description">{{ project.description }}</p>
        <a :href="project.github" class="project-link" title="GitHub 바로가기">GitHub</a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCard: null, // 마우스를 올린 카드의 인덱스를 저장
      projects: [
        {
          title: "티켓 구매 웹사이트",
          image: "img/ticket.png",
          duration: "2023.09.01 ~ 2023.12.11 (1인 개인)",
          description: "JSP를 사용한 웹사이트",
          github: "https://github.com/MCK-OOTS/2-2Tikect"
        },
        {
          title: "여행지 추천 웹사이트",
          image: "./img/tour.png",
          duration: "2023.11.20 ~ 2023.12.11 (1인 개인)",
          description: "mvc패턴을 활용한 JSP 프로젝트",
          github: "https://github.com/MCK-OOTS/2-2TourList"
        },
        {
          title: "온라인 로또 프로그램",
          image: "./img/lotto.png",
          duration: "2023.11.06 ~ 2023.12.12 (2인 팀)",
          description: "JAVA SWING과 웹 크롤링을 활용한 온라인 복권 프로그램",
          github: "https://github.com/MCK-OOTS/2-2lotto"
        },
        {
          title: "온라인 독서 후기 및 중고거래 플랫폼",
          image: "./img/online-book.png",
          duration: "2024.03.06 ~ 2024.06.19 (1인 개인)",
          description: "Spring-boot와 API를 사용해 결제 및 검색기능 구현",
          github: "https://github.com/MCK-OOTS/Online-Book-Platform"
        },
        {
          title: "빅데이터 분석",
          image: "./img/ing.png",
          duration: "2024.10.31 ~ 2024.12.02 (1인 개인)",
          description: "진행 중",
          github: "https://github.com/MCK-OOTS"
        },
        {
          title: "무선센서 네트워크",
          image: "./img/ing.png",
          duration: "2024.10.10 ~ 2024.12.03 (4인 팀)",
          description: "진행 중",
          github: "https://github.com/overwell24/wireless-network"
        }
          

        
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.project-header {
  text-align: center;
}

.project-section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  background-color: black;

  .project-card {
    position: relative;
    width: 300px;
    border-radius: 10px;
    background-color: white;
    transition: box-shadow 0.2s;

    .project-image {
      width: 100%;
      height: 200px;
    }

    .project-title {
      font-size: 1.5rem;
      text-align: center;
    }

    .tooltip {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color:black;
      color: white;
      padding: 10px;
      border-radius: 5px;
      width: 90%;
      text-align: center;
      margin-bottom: 10px;
      z-index: 1;
      transition: opacity 0.3s ease;
      opacity: 1;

      .duration {
        color: #ddd;
        margin-bottom: 5px;
      }

      .description {
        font-size: 1rem;
        color: white;
      }

      .project-link {
        margin-top: 5px;
        color: white;
        background-color: #333;
        padding: 5px 10px;
        border-radius: 5px;
        text-decoration: none;

        &:hover {
          background-color: #555;
        }
      }
    }
  }
}
</style>
