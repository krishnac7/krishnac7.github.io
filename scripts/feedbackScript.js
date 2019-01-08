$(document).ready(function(){ 
      $('#submit').click(function(e){
          e.preventDefault();
          var rating = $('form').serializeArray()[0].value;
          var feedback = $('form').serializeArray()[1].value;
          const Url ="https://docs.google.com/forms/d/e/1FAIpQLSdQ_rLouDZ3wmjiAMg9npEMEGpN7MBygeFTpFr0YlE7QzUF7g/formResponse?usp=pp_url&entry.1343283815="+rating+"&entry.27308448="+encodeURIComponent(feedback)+"&submit=Submit"
          $.ajax({
              url:Url,
              type:"POST"
             
          })
          
      });
  });

