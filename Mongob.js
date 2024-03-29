db.users.insertMany(
    [
        { 
        "user_Id":1,
        "name":"Praveen",
        "gender":"Male",
        "Qualificaion":"BE",
        "Mentor_id":1001,
        "appeared_for_placement":"Yes"
},
{ 
    "user_Id":2,
    "name":"Jeeva",
    "gender":"Male",
    "Qualificaion":"BSC",
    "Mentor_id":1001,
    "appeared_for_placement":"No"
},
{ 
    "user_Id":3,
    "name":"Sowmiya",
    "gender":"Female",
    "Qualificaion":"BE-civil",
    "Mentor_id":1004,
    "appeared_for_placement":"Yes"
},
{ 
    "user_Id":4,
    "name":"Rahul",
    "gender":"Male",
    "Qualificaion":"BA",
    "Mentor_id":1005,
    "appeared_for_placement":"Yes"
},
{ 
    "user_Id":5,
    "name":"Priya",
    "gender":"Female",
    "Qualificaion":"BCA",
    "Mentor_id":1001,
    "appeared_for_placement":"No"
},


])
db.codekata.insertMany(
    [
        {
            "user_Id":5,
            "Problem-solved":270,
            
        },
        {
            "user_Id":4,
            "Problem-solved":210,
                   },
        {
            "user_Id":3,
            "Problem-solved":350,
                   },
        {
            "user_Id":2,
            "Problem-solved":400,
            
        },
        {
            "user_Id":1,
            "Problem-solved":770,
            
        },
    ]
)
db.attendance.insertMany(
    [
        {
            "user_Id":1,
            "Attendance_for_Frontend":"Present",
            "Attendance_for_Backend":"Present",
            "Task_submitted_Frontend":"Yes",
            "Task_submitted_Backend":"Yes",
         },
      {
                    "user_Id":2,
                    "Attendance_for_Frontend":"Absent",
                    "Attendance_for_Backend":"Absent",
                    "Task_submitted_Frontend ":"No",
                    "Task_submitted_Backend":"No",
            },
            {
                "user_Id":3,
                "Attendance_for_Frontend":"Present",
                "Attendance_for_Backend":"Absent",
                "Task_submitted_Frontend":"Yes",
                "Task_submitted_Backend":"No",
             },
             {
                "user_Id":4,
                "Attendance_for_Frontend":"Present",
                "Attendance_for_Backend":"Present",
                "Task_submitted_Frontend":"No",
                "Task_submitted_Backend":"No",
             },
             {
                "user_Id":5,
                "Attendance_for_Frontend":"Present",
                "Attendance_for_Backend":"Absent",
                "Task_submitted_Frontend":"Yes",
                "Task_submitted_Backend":"No",
             },
    ]
)
db.tasks.insertMany(
    [
        {
            "user_Id":1,
            "Task_Id":1003,
            "Task_name":"HTML",
            "Thought_Month":"October"
        },
        {
            "user_Id":1,
            "Task_Id":1001,
            "Task_name":"Javascript",
            "thought_Month":"October"
        },
        {
            "user_Id":1,
            "Task_Id":1004,
            "Task_name":"React",
            "thought_Month":"Novamber"
        },
        {
            "user_Id":1,
            "Task_Id":1002,
            "Task_name":"CSS",
            "thought_Month":"October"
        },
        {
            "user_Id":1,
            "Task_Id":1004,
            "Task_name":"Mongodb",
            "thought_Month":"December"
        },
    ]
)
db.topics.insertMany(
    [
        {
            "user_Id":1,
            "Topic_Id":1001,
            "Task_name":"Javascript",
            "thought_Month":"October"
        },
        {
            "user_Id":1,
            "Topic_Id":1002,
            "Task_name":"CSS",
            "thought_Month":"October"
        },
        {
            "user_Id":1,
            "Topic_Id":1003,
            "Task_name":"HTML",
            "thought_Month":"October"
        },
        {
            "user_Id":1,
            "Topic_Id":1004,
            "Task_name":"JReact",
            "thought_Month":"Novamber"
        },
        {
            "user_Id":1,
            "Topic_Id":1005,
            "Task_name":"MongoDb",
            "thought_Month":"December"
        }
    ]
)
db.companydrives.insertMany(
    [
        {
            "Company_id":001,
            "Company_name":"Amazon",
            "Company_appeared_date": 20,
            "Company_appeared_month":"October",
            "Company_appeared_Year":2020,
            "appeared_for_placement":"Yes"
        },
        {
            "Company_id":002,
            "Company_name":"Apple",
            "Company_appeared_date": 11,
            "Company_appeared_month":"Januray",
            "Company_appeared_Year":2021,
            "appeared_for_placement":"Yes"
        },
        {
            "Company_id":003,
            "Company_name":"Zoho",
            "Company_appeared_date": 25,
            "Company_appeared_month":"October",
            "Company_appeared_Year":2020,
            "appeared_for_placement":"No"
        },
        {
            "Company_id":004,
            "Company_name":"Freshworks",
            "Company_appeared_date": 17,
            "Company_appeared_month":"October",
            "Company_appeared_Year":2021,
            "appeared_for_placement":"Yes"
        },
        {
            "Company_id":005,
            "Company_name":"Ippopay",
            "Company_appeared_date": 30,
            "Company_appeared_month":"October",
            "Company_appeared_Year":2020,
            "appeared_for_placement":"Yes"
        },
    ]
)
db.mentors.insertMany(
    [
        {
            "Mentor_id":1001,
            "Mentor_name":"Sanjay",
            "Handled_students":20
        },
        {
            "Mentor_id":1004,
            "Mentor_name":"Thirupathi",
            "Handled_students":16
        },
        {
            "Mentor_id":1002,
            "Mentor_name":"SaiMohan",
            "Handled_students":11
        },
        {
            "Mentor_id":1005,
            "Mentor_name":"SSathish",
            "Handled_students":19
        },
    ]
)

// Q 1)Find all the topics and tasks which are thought in the month of October
db.topics.aggregate([
    {
        $match:{thought_Month:"October"}
    },{
        $group:{_id:"$Task_name"
    }}
])

// Q2)Find all the company drives which appeared between  and 
db.companydrives.find(
    {
        $and:[{
        Company_appeared_date:{$gte:15,$lte:31},
        },{
        Company_appeared_month:"October"
    },{
        Company_appeared_Year:2020,
    }]}
)


// Q3)Find all the company drives and students who are appeared for_the_placement.
db.users.find({
    appeared_for_placement:"Yes"
})
db.companydrives.find({
    appeared_for_placement:"Yes"
})
  

// Q4)Find thed by the user in codekata
db.codekata.aggregate([
    {
    $lookup:{
        from:"users",
        localField:"user_Id",
        foreignField:"user_Id",
        as:"user_Id"
    }
    }
])
// Q5)Find all the mentors with who has the mentee's count more than 15
db.mentors.find({Handled_students:{$gte:15}})

// Q6)Find the number of users who are absent and task is not submitted  between  and 

// Frontend 1 oct 2020 to 14 oct 2020
//  Backend 15th oct 2020 to 31st oct 2020
db.attendance.find(
        {
          $and:
          [
            {
                Attendance_for_Backend:"Absent",
            },
            {
                Task_submitted_Backend:"No",
            }
          ]
        }
        )
