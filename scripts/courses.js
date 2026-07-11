const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


// Adding the courses
const courseContainer = document.getElementById('classes');
const numCredits = document.querySelector('#num-credits');
let credits = 0;

credits = 0;
courseContainer.replaceChildren();
courses.forEach(course => {
    const li = document.createElement('li');
    li.textContent = `${course.subject} ${course.number}`;
    if (course.completed == true){
        li.textContent = `✅ ${course.subject} ${course.number}`;
        li.style.background = "#1a2639";
        li.style.color = "white";
        credits += course.credits;
    } else {
        li.textContent = `${course.subject} ${course.number}`;
        credits += course.credits;
        li.style.borderColor = "black";
    }
    courseContainer.appendChild(li);
    numCredits.innerHTML = `The total credits for courses listed below is ${credits}`;
});


// Filtering the course array
let cseCourses = courses.filter(course => course.subject === 'CSE');
let wddCourses = courses.filter(course => course.subject === 'WDD');

// Handle All button
const allButton = document.querySelector('#all');

allButton.addEventListener('click', () => {
    credits = 0;
    courseContainer.replaceChildren();
    courses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = `${course.subject} ${course.number}`;
        if (course.completed == true){
            li.textContent = `✅ ${course.subject} ${course.number}`;
            li.style.background = "#1a2639";
            li.style.color = "white";
            credits += course.credits;
        } else {
            li.textContent = `${course.subject} ${course.number}`;
            credits += course.credits;
            li.style.borderColor = "black";
        }
        courseContainer.appendChild(li);
        numCredits.innerHTML = `The total credits for courses listed below is ${credits}`;
    });
});

// Handle CSE button
const cseButton = document.querySelector('#cse');
cseButton.addEventListener('click', () => {
    credits = 0;
    courseContainer.replaceChildren();
    cseCourses.forEach(cseCourse => {
        const li = document.createElement('li');
        if (cseCourse.completed == true){
            li.textContent = `✅ ${cseCourse.subject} ${cseCourse.number}`;
            li.style.background = "#1a2639";
            li.style.color = "white";
            credits += cseCourse.credits;
        } else {
            li.textContent = `${cseCourse.subject} ${cseCourse.number}`;
            li.style.borderColor = "black";
            credits += cseCourse.credits;
        }
        courseContainer.appendChild(li);
        numCredits.innerHTML = `The total credits for courses listed below is ${credits}`;
    });
});


// Handle WDD button
const wddButton = document.querySelector('#wdd');
wddButton.addEventListener('click', () => {
    credits = 0;
    courseContainer.replaceChildren();
    wddCourses.forEach(wddCourse => {
        const li = document.createElement('li');
        if (wddCourse.completed == true){
            li.textContent = `✅${wddCourse.subject} ${wddCourse.number}`;
            li.style.background = "#1a2639";
            li.style.color = "white";
            credits += wddCourse.credits;
        } else {
            li.textContent = `${wddCourse.subject} ${wddCourse.number}`;
            credits += wddCourse.credits;
            li.style.borderColor = "black";
        }
        courseContainer.appendChild(li);
        numCredits.innerHTML = `The total credits for courses listed below is ${credits}`;
    });
});
