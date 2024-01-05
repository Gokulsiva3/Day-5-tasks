var resume ={
    "basics": {
      "name": "Gokul R",
      "label": "Programmer",
      "email": "sivagokul595@gmail.com",
      "phone": "7708021569",
      "url": "https://gokulr.com",
      "summary": "A summary of Gokul…",
      "location": {
        "address": "6/6 Amman nagar",
        "postalCode": "625106",
        "city": "Madurai",
        "countryCode": "India",
        "region": "Tamilnadu"
      },
      "profiles": [{
        "network": "Twitter",
        "username": "gokul",
        "url": "https://twitter.com/gokul"
      
    }],
    "education": [{
      "institution": "University",
      "url": "https://institution.com/",
      "area": "Software Development",
      "studyType": "Bachelor",
      "startDate": "2011-01-01",
      "endDate": "2013-01-01",
      "score": "8.0",
      
    }]
}
}
for (let x in resume) {
    console.log(x , resume[x])

}

for(i=0;i<resume.length;i++){
    console.log(resume[i])
}

resume.forEach(function1);
function function1(currentValue, index) {
   console.log(index ,currentValue);
}