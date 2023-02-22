let poketmon = ["피카츄","라이츄", "파이리", "꼬부기","버터풀"];
      console.dir(poketmon);
      console.log(poketmon[4]);
      console.log(poketmon[poketmon.length-1]);
      
      최상위 객체는 document가 아닌 window
      
      let root = window.document.getElementById("root");
      console.dir('root');
      let a = window["document"];
      console.dir(a);
      let b = window;
      console.dir(b);


      <!-- index.html -->
      스튜던트라는 변수는 학생들의 이름이라는 다양한 키값을 가지고 있다.
      나는 학생의 이름을 html 파일에 출력 할 건데
      for 문을 사용 한다.
      for(기준) {실행문}
      for(let i=0; i<student.length;//학생 수 이상으로 출력하면 안됨i++)
      {
        let root = document.getElementById("root");
        let div = document.createElement("태그명>>div"); //div라는 변수는 div태그를 생성하는데
        div(변수이름).textContent = student[i] //div태그의 textcontent 에 이항연산 해줄거야.<= 학생[i]이라는 값을 //학생 i를 쓰는 이유 현재 for문의 조건문에 우리가 학생수가 하나씩 증가하는 조건을 걸어줬기 때문
        root.appendchild(div);
      }