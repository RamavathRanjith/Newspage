let availablekeywords=[
    'convocation updates',
    'chemistry department',
    'astrology',
    'mems department',
    'department of physics',
    'maths department',
    'alumini',
    'dristi cps',
    'health center',
    'ek bharat shreshtha bharat',
    'international relations',
    'electrical department',
    'mechanical department',
    'library (LRC)'

];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");


inputBox.onkeyup=function(){
    let result=[];
    let input=inputBox.value;
    if(input.length){
        result=availablekeywords.filter((keyword)=>{return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if(!result.length){
        resultsBox.innerHTML='';
    }
}
function display(result){
    const content=result.map((list)=>{
        return "<li onclick=selectInput(this)>"+list+"</li>";
    });
    resultsBox.innerHTML="<ul>"+content.join('')+"</ul>";
}
function selectInput(list){
    inputBox.value=list.innerHTML;
    resultsBox.innerHTML='';
}
function srch()
{
    var input=document.getElementById("input-box").value;
    if(input == 'chemistry department')
  {
    var res=  window.open("https://chemistry.iiti.ac.in/news-events/", "_self");
   }
   if(input =='convocation updates')
   {
    var res= window.open("https://alumni.iiti.ac.in/campusfeed?cat=1217", "_self");
   }
   if(input =='astrology')
   {
    var res= window.open("https://aase.iiti.ac.in/?page_id=214", "_self");
   }
   if(input =='mems department')
   {
    var res= window.open("http://mems.iiti.ac.in/newsandevents.html", "_self");
   }
   if(input =='department of physics')
   {
    var res= window.open("https://physics.iiti.ac.in/news-and-activities/", "_self");
   }
   if(input =='maths department')
   {
    var res= window.open("https://math.iiti.ac.in/events-all/", "_self");
   }
   if(input =='alumini')
   {
    var res= window.open("https://alumni.iiti.ac.in/events?cat=all&search=%7B%7D", "_self");
   }
   if(input =='dristi cps')
   {
    var res= window.open("https://drishticps.iiti.ac.in/news/", "_self");
   }
   if(input =='health center')
   {
    var res= window.open("http://people.iiti.ac.in/~medical/events.php", "_self");
   }
   if(input =='ek bharat shreshtha bharat')
   {
    var res= window.open("http://ebsb.iiti.ac.in/news.html", "_self");
   }
   if(input =='international relations')
   {
    var res= window.open("https://ir.iiti.ac.in/#/outreach/news", "_self");
   }
   if(input =='electrical department')
   {
    var res= window.open("http://ee.iiti.ac.in/", "_self");
   }
   if(input =='mechanical department')
   {
    var res= window.open("http://me.iiti.ac.in/", "_self");
   }
   if(input =='library (LRC)')
   {
    var res= window.open("http://koha.iiti.ac.in/", "_self");
   }

}
    
