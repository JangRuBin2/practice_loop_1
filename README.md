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