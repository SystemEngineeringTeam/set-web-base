google.load("feeds", "1");  
google.setOnLoadCallback(function() {  

    var feed = new google.feeds.Feed("http://set1.ie.aitech.ac.jp/?feed=rss2");
    feed.load(function (result){
        
    var template = document.getElementById("blogFeedTemplate");
    
    var container = document.getElementById("blog-section-feed");
    
        
      if (!result.error){
          
          for (var i = 0; i < result.feed.entries.length; i++) {
              
              var card = template.content.cloneNode(true);
              console.log(card);
              
              var tile_e = card.querySelector('.mdl-card__title-text');
              var tile_text = card.querySelector('.mdl-card__supporting-text');
              var card_link = card.querySelector('.mdl-card__actions a');
              
              var entry = result.feed.entries[i];
              var title = entry.title;
              tile_e.textContent = title;
              var link = entry.link;
              card_link.href = link;
              var content = entry.content;
              var contentSnippet = entry.contentSnippet;
              tile_text.textContent = contentSnippet;
              var publishedDate = entry.publishedDate;
              for (var j = 0; j < entry.categories.length; j++) {
                  var categorie = entry.categories[j];
              }
              template.parentNode.appendChild(card);
              console.log(title);
           }
          
        
      }
      
    });
    
});