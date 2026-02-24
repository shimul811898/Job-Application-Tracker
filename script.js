let InterviewList = [];
let RejectedList = [];
let currentStatus = 'all';

//harder card 
let Total = document.getElementById("Total");
let Interview = document.getElementById("Interview");
let Rejected = document.getElementById("Rejected");
let allCards = document.getElementById('allCards');

//btn tap
let allBtn = document.getElementById("allBtn");
let interviewBtn = document.getElementById("interviewBtn");
let rejectedBtn = document.getElementById("rejectedBtn");

//parent btn
let btnContainer = document.querySelector('btnContainer');

//empty section
let filteringCards = document.getElementById('filteringCards');
let carbonCards = document.getElementById('carbonCards');

//No job section
let noJobs = document.getElementById('noJobs');


//btn length count 
function count() {

    Total.innerText = allCards.children.length;
    Interview.innerText = InterviewList.length;
    Rejected.innerText = RejectedList.length;
}

count()

//empty section function
function jobEmpty() {
    if (currentStatus === "allBtn") {
        if (allCards.children.length === 0) {
            noJobs.classList.remove("hidden");
        } else {
            noJobs.classList.add("hidden");
        }
    } else if (currentStatus === "interviewBtn") {
        if (InterviewList.length === 0) {
            noJobs.classList.remove("hidden");
        } else {
            noJobs.classList.add("hidden");
        }
    } else if (currentStatus === "rejectedBtn") {
        if (RejectedList.length === 0) {
            noJobs.classList.remove("hidden");
        } else {
            noJobs.classList.add("hidden");
        }
    }
}
jobEmpty()

//toggle 
function toggleStyle(id) {
    allBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');
    interviewBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');
    rejectedBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');

    allBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]');
    interviewBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]');
    rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-[#FFFFFF]');
    let selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove('bg-[#FFFFFF]', 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]', 'text-[#FFFFFF]');

    if (id === 'interviewBtn') {
        allCards.classList.add('hidden');
        carbonCards.classList.add('hidden');
        filteringCards.classList.remove('hidden');
        renderInterview();
    }
    else if (id === "rejectedBtn") {
        allCards.classList.add("hidden");
        filteringCards.classList.add("hidden");
        carbonCards.classList.remove("hidden");
        renderRejected();
    }
    else {
        allCards.classList.remove('hidden');
        filteringCards.classList.add('hidden');
        carbonCards.classList.add("hidden");
        noJobs.classList.add("hidden");
    }

}

//add allCards with EventListener
allCards.addEventListener('click', function (event) {

    //interviewGreen btn connect allCards
    if (event.target.classList.contains('greenBtn')) {
        let parentNode = event.target.parentNode.parentNode;
        console.log(parentNode)

        let cardHeading = parentNode.querySelector('.cardHeading').innerText;
        console.log(cardHeading)
        let profession = parentNode.querySelector('.profession').innerText;
        let remote = parentNode.querySelector('.remote').innerText;
        let status = parentNode.querySelector('.status').innerText;
        let applied = parentNode.querySelector('.applied').innerText;

        parentNode.querySelector('.applied').innerText = 'Interview'

        let cardInfo = {
            cardHeading,
            profession,
            remote,
            status,
            applied: "Interview"
        }

        let interviewExist = InterviewList.find(item => item.cardHeading == cardInfo.cardHeading);

        if (!interviewExist) {
            InterviewList.push(cardInfo)
        }
        RejectedList = RejectedList.filter(
            item => item.cardHeading !== cardInfo.cardHeading
        );
        console.log(RejectedList);

        if (currentStatus == "rejectedBtn") {
            renderRejected();
        }
        count();
        jobEmpty()
    }

    //interviewRed btn connect allCards
    else if (event.target.classList.contains('redBtn')) {
        let parentNode = event.target.parentNode.parentNode;
        console.log(parentNode)

        let cardHeading = parentNode.querySelector('.cardHeading').innerText;
        console.log(cardHeading)
        let profession = parentNode.querySelector('.profession').innerText;
        let remote = parentNode.querySelector('.remote').innerText;
        let status = parentNode.querySelector('.status').innerText;
        let applied = parentNode.querySelector('.applied').innerText;

        parentNode.querySelector('.applied').innerText = 'Rejected'

        let cardInfo = {
            cardHeading,
            profession,
            remote,
            status,
            applied: "Rejected"
        }

        let RejectedExist = RejectedList.find(item => item.cardHeading == cardInfo.cardHeading);


        if (!RejectedExist) {
            RejectedList.push(cardInfo)
        }

        InterviewList = InterviewList.filter(
            item => item.cardHeading !== cardInfo.cardHeading
        );
        console.log(InterviewList);
        if (currentStatus == "interviewBtn") {
            renderInterview();
        }

        count();
        jobEmpty();

    }

    //delete button
    else if (event.target.classList.contains("icon")) {
        let parentNode = event.target.parentNode.parentNode;

        let cardHeading = parentNode.querySelector(".cardHeading").innerText;

        InterviewList = InterviewList.filter(
            (item) => item.cardHeading !== cardHeading,
        );

        RejectedList = RejectedList.filter(
            (item) => item.cardHeading !== cardHeading,
        );
        parentNode.remove();

        count();
        jobEmpty();
    }
})


// Interview tab 
filteringCards.addEventListener("click", function (event) {

    let parentNode = event.target.closest(".applicationCard");
    if (!parentNode) return;

    let cardHeading = parentNode.querySelector('.cardHeading').innerText;
    let profession = parentNode.querySelector('.profession').innerText;
    let remote = parentNode.querySelector('.remote').innerText;
    let status = parentNode.querySelector('.status').innerText;


    if (event.target.classList.contains("redBtn")) {

        parentNode.querySelector('.applied').innerText = "Rejected";

        InterviewList = InterviewList.filter(
            item => item.cardHeading !== cardHeading
        );
        RejectedList.push({
            cardHeading,
            profession,
            remote,
            status,
            applied: "Rejected"
        });

        renderInterview();
        count();
        jobEmpty();
    }
    if (event.target.classList.contains("greenBtn")) {
        return;
    }
});

//Rejected tab
carbonCards.addEventListener("click", function (event) {

    let parentNode = event.target.closest(".applicationCard");
    if (!parentNode) return;

    let cardHeading = parentNode.querySelector('.cardHeading').innerText;
    let profession = parentNode.querySelector('.profession').innerText;
    let remote = parentNode.querySelector('.remote').innerText;
    let status = parentNode.querySelector('.status').innerText;

    if (event.target.classList.contains("greenBtn")) {

        parentNode.querySelector('.applied').innerText = "Interview";


        RejectedList = RejectedList.filter(
            item => item.cardHeading !== cardHeading
        );


        InterviewList.push({
            cardHeading,
            profession,
            remote,
            status,
            applied: "Interview"
        });

        renderRejected();
        count();
        jobEmpty();
    }


    if (event.target.classList.contains("redBtn")) {
        return;
    }
});

//renderInterview
function renderInterview() {
    filteringCards.innerHTML = ''
    for (let interview of InterviewList) {
        console.log(interview);

        let div = document.createElement('div');
        div.innerHTML = `
           <div class="applicationCard bg-[#FFFFFF] rounded-md shadow-sm p-6 mt-4">
            <div class="flex justify-between">
                <div>
                    <h3 class="cardHeading text-[18px] font-semibold"> ${interview.cardHeading}</h3>
                </div>
                <div class="icon rounded-full border p-1 text-[#F1F2F4] hover:scale-110 transition duration-500 ">
                    <i class="fa-regular fa-trash-can "></i>
                </div>
            </div>
            <p class="profession text-[16px] text-[#64748B]">${interview.profession}</p>
            <p class="remote text-[14px] text-[#64748B] pt-5 pb-5">${interview.remote}</p>
            <button class="applied text-black text-center bg-[#EEF4FF] rounded-sm shadow-sm p-2 text[14px]  font-medium">${interview.applied}
               </button>
            <p class="status pt-2">${interview.status}.</p>
            <div class="flex gap-2 pt-5">
                <button
                    class="greenBtn text-[#10B981] text-center bg-[#ffffff] rounded-sm shadow-sm px-3 py-2 text[14px]  font-medium border-[#10B981] border hover:scale-110 transition duration-500 ">interview</button>
                <button
                    class="redBtn text-[#EF4444] text-center bg-[#ffffff] rounded-sm shadow-sm px-3 py-2 text[14px]  font-medium border-[#EF4444] border hover:scale-110 transition duration-500 ">Rejected</button>
            </div>
        </div>
       
        `
        filteringCards.appendChild(div)
    }
    jobEmpty();
}

//renderRejected
function renderRejected() {
    carbonCards.innerHTML = ''
    for (let rejected of RejectedList) {
        console.log(rejected);

        let div = document.createElement('div');
        div.innerHTML = `
           <div class="applicationCard bg-[#FFFFFF] rounded-md shadow-sm p-6 mt-4">
            <div class="flex justify-between">
                <div>
                    <h3 class="cardHeading text-[18px] font-semibold"> ${rejected.cardHeading}</h3>
                </div>
                <div class="icon rounded-full border p-1 text-[#F1F2F4] hover:scale-110 transition duration-500 ">
                    <i class="fa-regular fa-trash-can "></i>
                </div>
            </div>
            <p class="profession text-[16px] text-[#64748B]">${rejected.profession}</p>
            <p class="remote text-[14px] text-[#64748B] pt-5 pb-5">${rejected.remote}</p>
            <button class="applied text-black text-center bg-[#EEF4FF] rounded-sm shadow-sm p-2 text[14px]  font-medium">${rejected.applied}
               </button>
            <p class="status pt-2">${rejected.status}.</p>
            <div class="flex gap-2 pt-5">
                <button
                    class="greenBtn text-[#10B981] text-center bg-[#ffffff] rounded-sm shadow-sm px-3 py-2 text[14px]  font-medium border-[#10B981] border hover:scale-110 transition duration-500 ">interview</button>
                <button
                    class="redBtn text-[#EF4444] text-center bg-[#ffffff] rounded-sm shadow-sm px-3 py-2 text[14px]  font-medium border-[#EF4444] border hover:scale-110 transition duration-500 ">Rejected</button>
            </div>
        </div>
       
        `
        carbonCards.appendChild(div)
    }
    jobEmpty();
}




