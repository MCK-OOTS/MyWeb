<template>
    
    <h1 class="project-header">Projects</h1>

    <div class="project-section" style="background-color: black" id="project">
      
      

      <div class="project-card" v-for="project in projects" :key="project.id">

        <h3>{{ project.title }}</h3>
        <p class="duration">{{ project.duration }}</p>
        <p class="description">{{ project.description }}</p>
        <a :href="project.github" target="_blank" class="github-link" title="GitHub 바로가기">GitHub</a>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          {
            title: "티켓 구매 웹사이트",
            duration: "2023.09.01 ~ 2023.12.11 (1인 개인)",
            description: "JSP를 사용한 웹사이트 ",
            github: "https://github.com/MCK-OOTS/2-2Tikect"
          },
          {
            title: "여행지 추천 웹사이트",
            duration: "2023.11.20 ~ 2023.12.11 (1인 개인)",
            description: "mvc패턴을 활용한 JSP 프로젝트 ",
            github: "https://github.com/MCK-OOTS/2-2TourList"
          },
          {
            title: "온라인 로또 프로그램",
            duration: "2023.11.06 ~ 2023.12.12 (2인 팀)",
            description: "JAVA SWING과 웹 크롤링을 활용한 온라인 복권 프로그램 ",
            github: "https://github.com/MCK-OOTS/2-2lotto"
          },
          {
            title: "온라인 독서 후기 및 중고거래 플랫폼",
            duration: "2024.03.06 ~ 2024.06.19 (1인 개인)",
            description: "Spring-boot와 API를 사용해 결제 및 검색기능 구현 ",
            github: "https://github.com/MCK-OOTS/Online-Book-Platform"
          },
          {
            title: "빅데이터 분석",
            duration: "2024. 10. 31 ~ 2024. 12. 02 (1인 개인)",
            description: "진행 중",
            github: ""
          },
          {
            title: "무선센서 네트워크",
            duration: "2024. 10. 10 ~ 2024. 12. 03 (4인 팀)",
            description: "진행 중",
            github: ""
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped lang="css">

    .project-header {
    text-align: center;

    font-size: 2rem;
    z-index: 1;
    }

  .project-section {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
  
    .project-card {
      width: 300px; 
      padding: 20px;
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      background-color: white;
      transition: transform 0.2s, box-shadow 0.2s;
  
      &:hover {
        transform: translateY(-10px);
      }
  
      h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }
  
      .duration {
        color: #888;
        margin-bottom: 10px;
      }
  
      .description {
        font-size: 1rem;
        margin-bottom: 10px;
      }
  
      .github-link {
        color: black;
        text-decoration: none;
        background-color: #f1f1f1;
        padding: 10px 10px;
        border-radius: 5px;
        transition: background-color 0.2s;
  
        &:hover {
          background-color: #e0e0e0;
        }
      }
    }
  }
  </style>
  