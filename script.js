
const students=[];

document.getElementById('registrationForm').addEventListener('submit',function(event){
    event.preventDefault();

    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const website=document.getElementById('website').value;
    const imageLink=document.getElementById('imageLink').value;
    const gender=document.querySelector('input[name="gender"]:checked')?.value || 'Not Specified';
    const skills=Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(skills=>skills.value).join(', ') || 'None';
    

    const studentData={
        name,
        email,
        website,
        imageLink,
        gender,
        skills,
    };

    students.push(studentData);

    displayStudentData();
});

function displayStudentData(){
    const userData=document.getElementById('userData');
    userData.innerHTML='';
    students.forEach((student,index)=>{
        const listItem = document.createElement('li');
        listItem.innerHTML=`
        <b>Student ${index + 1}:</b>
        <ul>
        <li>Name: ${student.name}</li>
        <li>Email: ${student.email}</li>
        <li>Website: ${student.website}</li>
        <li>Image: <img src="${student.imageLink}" alt="User Image"></li>
        <li>Gender: ${student.gender}</li>
        <li>Skills: ${student.skills}</li>
        </ul>
        `;

        userData.appendChild(listItem);
    });
}
