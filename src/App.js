import React from 'react';
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";
import img9 from "./images/9.jpg";
import './App.css';

function App() {
  let students = [
    { name: 'A', gender: 'Male', age: 18 },
    { name: 'b', gender: 'Male', age: 31 },
    { name: 'C', gender: 'Male', age: 25 },
    { name: 'd', gender: 'Male', age: 20 },
    { name: 'e', gender: 'Male', age: 21 },
    { name: 'f', gender: 'Male', age: 19 },
    { name: 'g', gender: 'Male', age: 29 },
    { name: 'h', gender: 'Male', age: 29 }
  ]
  function Bai1(){
    var totalAge = 0;
    students.forEach(function(student){
        totalAge += student.age;
    });
    var averageAge = totalAge / students.length;
    return averageAge;
  }
  function Bai2(){
    students.sort(function(a,b){
      return b.age - a.age;
    })
    return students;
  }
  function Bai3(){
    students.sort(function(a,b){
      return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    })
    return students;
  }
  function Bai4(){
    students = students.filter(function(student){
      return student.name.toLowerCase().startsWith('h');
    })
    return students;
  }
  return (
    <div>
      <div>Bài 1: Tuổi trung bình<br/> {Bai1()}</div><br />
      <div>Bài 2: Sắp xếp theo tuổi<br/> {JSON.stringify(Bai2())}</div><br />
      <div>Bài 3: Sắp xếp theo tên<br/>{JSON.stringify(Bai3())}</div><br />
      <div>Bài 4: Tên bắt đầu bằng chữ H<br/>{JSON.stringify(Bai4())}</div><br />

      <table width = "100%">
      <tr width = "100%">
          <td padding = "15px">
            <div align = "center">
              <img class="image" src={img1}/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src={img2}/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src={img3}/>
            </div>
          </td>
        </tr>
        <tr>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src={img4}/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src={img5}/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src={img6}/>
            </div>
          </td>
        </tr>
        <tr>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src={img7}/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">      
              <img class="image" src={img8}/>
            </div>
          </td>
          <td padding = "15px">
            <div align = "center">
              <img class="image" src={img9}/>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
