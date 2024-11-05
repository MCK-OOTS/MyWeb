<template>
    <!--스킬 영역-->
    <div class="skills" id="skill">
  
      <h2 class="skills-title">Skills</h2>
  
      <div class="skills-content">
  
        <div class="skill-category" v-for="(category, index) in skills" :key="index">
  
          <h3>{{ category.name }}</h3> <!--Front-End, Back-End...-->
  
          <div v-for="(skill, idx) in category.skills" :key="idx" class="skill">
  
            <div class="skill-icon">
  
              <img :src="skill.icon"/>
              <div class="tooltip">{{ skill.level }}</div> <!--Novice, Intermediate, Familiar -->
            </div>
  
            <p class="skill-name">{{ skill.name }}</p> <!-- Java, HTML, Git...-->
  
            <div class="progress-bar"> <!--그래프-->
              <div class="progress" :style="{ width: skill.progress + '%' }"></div>
              <span class="progress-tooltip">{{ skill.progress }}% </span>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        skills: [
          {
            name: "language",
            skills:[
                {name: "Java", progress: 85, icon:"https://blog.kakaocdn.net/dn/lbnZd/btrKIyrrS6b/dzgw72HA8J29tetLTKUOg1/img.png", level:"Familiar"},
                {name: "C", progress: 50, icon:"https://velog.velcdn.com/images/augus-xury/post/f3acd3d5-4b54-46dc-9427-c007c3b46a7d/image.png", level:"Intermediate"},
                {name: "Python", progress: 50, icon:"https://blog.kakaocdn.net/dn/cn9zq6/btsaUkhGHdY/mIk7jxWPNmOrVftZkBbkTK/img.png", level:"Intermediate"}
            ]
          },
          {
            name: "Front-End",
            skills: [
              { name: "HTML", progress: 85, icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", level: "Familiar"},
              { name: "CSS", progress: 60, icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", level: "Intermediate"},
              { name: "JS", progress: 70, icon: "https://multishoring.com/wp-content/uploads/2024/04/JavaScript-Symbol.png", level: "Familiar"}
            ]
          },
          {
            name: "Back-End",
            skills: [
              { name: "Spring-boot", progress: 70, icon: "https://blog.kakaocdn.net/dn/NyGQe/btsIdOoWC8W/mythKXG4xkyW5GGIoAK0Ek/img.png", level: "Familiar" },
              { name: "JSP", progress: 90, icon: "https://images.velog.io/images/xnfxnf97/post/d629debf-3bac-4d46-a93b-cd7999f81fc8/jsp.PNG", level: "Familiar"},
              { name: "PHP", progress: 20, icon: "https://cdn.freebiesupply.com/logos/large/2x/php-logo-png-transparent.png", level: "Novice"}
              
            ]
          },
          {
            name: "etc",
            skills: [
              { name: "Git", progress: 40, icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg", level: "Intermediate"},
              { name: "Linux", progress: 50, icon: "https://velog.velcdn.com/images/whattsup_kim/post/e903d721-96bf-4349-aa02-7a607583863b/image.png",level:"Intermediate"},
              { name: "MySQL", progress: 85, icon: "https://i.namu.wiki/i/vkGpBcmks1_NcJW0HUFa6jlwlM6h11B-8nxRRX4bYC703H4nLo7j4dQdRCC32gz8Q-BqRcAnQgFSXMjB8jPohg.svg", level: "Familiar"},
              { name: "AWS", progress: 20, icon: "https://partner.zoom.us/wp-content/uploads/2022/12/2022_Zoom-AWS_Lockup_RGB-1-e1672857797889-1024x760.png", level: "Novice"}
            ]
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped lang="scss">
  
  .skills {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
  
  
  }
  
  .skills-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .skills-content { /* 가로정렬,  여백설정 , 공간 부족한 경우 줄 바꿈*/
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }  
  
  .skill-category {
    width: 30%;
    margin-bottom: 20px;
  }
   
  .skill {
    display: flex;
    align-items: center; /* 그래프 가운데 정렬 */
    margin-bottom: 10px; 
  }
  
  .skill-icon {
    margin-right: 15px;
    
    img {
      width: 50px; 
      height: 50px;
    }
    
    .tooltip {
      position: absolute;
      background-color: #333;
      color: #fff;
      padding: 5px;
      border-radius: 5px;
      z-index: 10; /* 다른 요소 위로 표시 */
      opacity: 0; /* 기본값으로 안보이게 설정 */
      transition: opacity 0.3s; /* 천천히 나타나고 사라지기 */
    }
    
    &:hover .tooltip {
      opacity: 1; /* 마우스 올리면 보이게 설정 */
    }
  }
  
  .skill-name {
    width: 100px; 
    text-align: left;
  }
  
  .progress-bar {
    background-color: #ddd;
    border-radius: 5px;
    height: 15px; 
    width: 200px;
  
  }
  
  .progress {
    height: 100%;
    background-color: #666666;
  }
  
  h3 {
    text-align: center;
    margin-bottom: 10px;
  }
  
  
  </style>
  