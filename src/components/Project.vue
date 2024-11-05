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
          image: "https://private-user-images.githubusercontent.com/153693799/334380705-9720f4f8-34c3-46c3-a409-08a1f5925546.JPG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA4MTIzMTQsIm5iZiI6MTczMDgxMjAxNCwicGF0aCI6Ii8xNTM2OTM3OTkvMzM0MzgwNzA1LTk3MjBmNGY4LTM0YzMtNDZjMy1hNDA5LTA4YTFmNTkyNTU0Ni5KUEc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEwNVQxMzA2NTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wODBmNzliNjc4M2EzYmY4NTU5MTJlNmM1NzM4NDhhY2JjZjc1OTAyMjE2ODJjMDE0ODIwMWNiYTY5Yzg0MDJkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.kmtOKVt-D087E3hLpD2U6zSyvYVpKKTX9ytMMrcISQY",
          duration: "2023.09.01 ~ 2023.12.11 (1인 개인)",
          description: "JSP를 사용한 웹사이트",
          github: "https://github.com/MCK-OOTS/2-2Tikect"
        },
        {
          title: "여행지 추천 웹사이트",
          image: "https://private-user-images.githubusercontent.com/153693799/335951201-e0792bb7-8bf4-4fcd-993b-59439fe69f93.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3OTIwNzUsIm5iZiI6MTczMDc5MTc3NSwicGF0aCI6Ii8xNTM2OTM3OTkvMzM1OTUxMjAxLWUwNzkyYmI3LThiZjQtNGZjZC05OTNiLTU5NDM5ZmU2OWY5My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEwNVQwNzI5MzVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mZmVjMWIzZTQyMjBkOTNlODM4NTVkM2YxMTBlY2VmNzk5MGQyZGE2YjMyZjM5MWUyZjRiOTRmODlmZWRlY2JmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.hvbEn0pAxs-hTH8pewXp9V6bu73vY3Oa4B4aHcTfNaU",
          duration: "2023.11.20 ~ 2023.12.11 (1인 개인)",
          description: "mvc패턴을 활용한 JSP 프로젝트",
          github: "https://github.com/MCK-OOTS/2-2TourList"
        },
        {
          title: "온라인 로또 프로그램",
          image: "https://private-user-images.githubusercontent.com/153693799/335948134-87f7d47f-0bf2-4626-9134-42933d93a738.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3OTIxNzUsIm5iZiI6MTczMDc5MTg3NSwicGF0aCI6Ii8xNTM2OTM3OTkvMzM1OTQ4MTM0LTg3ZjdkNDdmLTBiZjItNDYyNi05MTM0LTQyOTMzZDkzYTczOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEwNVQwNzMxMTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jZDdkZDNiNjFjMjI5ODcxZGRkMDM0OWFjNjY0YzIwY2Q2MmRiOWExMWI2ZWI1ZGQ5NzNiOWE5Y2VmZjQ2ODMzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.UziYSufqZ1yHOE_a4r0-QvAqZNg8z6ZebIQa8rLgJgE",
          duration: "2023.11.06 ~ 2023.12.12 (2인 팀)",
          description: "JAVA SWING과 웹 크롤링을 활용한 온라인 복권 프로그램",
          github: "https://github.com/MCK-OOTS/2-2lotto"
        },
        {
          title: "온라인 독서 후기 및 중고거래 플랫폼",
          image: "https://private-user-images.githubusercontent.com/153693799/341646089-d7cebb01-1484-4268-8796-a278a56d28e9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzA3OTE1MzYsIm5iZiI6MTczMDc5MTIzNiwicGF0aCI6Ii8xNTM2OTM3OTkvMzQxNjQ2MDg5LWQ3Y2ViYjAxLTE0ODQtNDI2OC04Nzk2LWEyNzhhNTZkMjhlOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEwNVQwNzIwMzZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kN2U4MDljOWU0MWQ2YzI0Mjg0NWIzZDI1MTYwZmZjYjdiOWVkY2U5M2YyMjY5YWQ4Zjk0NTk4ZTExMmVjNDY2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9._6vpSnL9lcTT3u0AbZlUJquz_RWZnEKerFjZnzhNcx4",
          duration: "2024.03.06 ~ 2024.06.19 (1인 개인)",
          description: "Spring-boot와 API를 사용해 결제 및 검색기능 구현",
          github: "https://github.com/MCK-OOTS/Online-Book-Platform"
        },
        {
          title: "빅데이터 분석",
          image: "#",
          duration: "2024.10.31 ~ 2024.12.02 (1인 개인)",
          description: "진행 중",
          github: ""
        },
        {
          title: "무선센서 네트워크",
          image: "#",
          duration: "2024.10.10 ~ 2024.12.03 (4인 팀)",
          description: "진행 중",
          github: ""
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
