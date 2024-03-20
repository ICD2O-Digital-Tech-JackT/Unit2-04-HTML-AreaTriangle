function CalculateArea(){
  let Base = document.getElementById("Base").value;
  let Height = document.getElementById("Height").value;
  document.getElementById("Result").innerHTML="The area of this triangle is "+(Base*Height)/2+"cm<sup>2</sup>";
}