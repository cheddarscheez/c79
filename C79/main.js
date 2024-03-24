name_of_student_array=[]

function submit() {
var name1=document.getElementById("name_of_annoying1").value;
var name2=document.getElementById("name_of_annoying2").value;
var name3=document.getElementById("name_of_annoying3").value;
var name4=document.getElementById("name_of_annoying4").value;

name_of_student_array.push(name1);
name_of_student_array.push(name2);
name_of_student_array.push(name3);
name_of_student_array.push(name4);

document.getElementById("output").innerHTML=name_of_student_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}

function sorting() {
    name_of_student_array.sort();
    document.getElementById("output").innerHTML=name_of_student_array;
}