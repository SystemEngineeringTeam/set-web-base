declare namespace google {

  export function load(
    moduleName:        string,
    moduleVersion:     string,
    optionalSettings?: any
  ): void;
    
    
  export function setOnLoadCallback(
        hoge:        any
  ): void;
}

//var google;
google.load("feeds", "1");  
google.setOnLoadCallback(function() {  

    var feed = new google.feeds.Feed("http://set1.ie.aitech.ac.jp/blog/?feed=rss2");
    feed.setNumEntries(6);
    feed.load(function (result){
        
        document.getElementById("blog-progress").style.display = 'none';
        
        
    var template : HTMLTemplateElement = <HTMLTemplateElement>document.getElementById("blogFeedTemplate");
    
    var container = document.getElementById("blog-section-feed");
    
        
      if (!result.error){
          
          for (var i = 0; i < result.feed.entries.length; i++) {
              
              var card : HTMLElement = <HTMLElement>template.content.cloneNode(true);
              console.log(card);
              
              var tile_e = card.querySelector('.mdl-card__title-text');
              var tile_text = card.querySelector('.mdl-card__supporting-text');
              var card_link : HTMLAnchorElement = <HTMLAnchorElement>card.querySelector('.mdl-card__actions a');
             　var card_img : HTMLImageElement = <HTMLImageElement>card.querySelector('.blog-image');

              
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
              
              //画像の設定
              
              var imgCheck = entry.content.match(/(src="http:){1}[\S_-]+((\.png)|(\.jpg)|(\.JPG))/);
              if(imgCheck){
              card_img.src = imgCheck[0].substr( 5 );
              }
              template.parentNode.appendChild(card);
              console.log(title);
           }
          
        
      }
      
    });
    
});

