
    let idx;
    let docs = [];
    let $clearBtn = $('<button type="button" class="btn btn-clear"><i class="fas fa-times"></i> Clear results</button>');

    $(function(){
        $.getJSON('./assets/data/index.json', function(json){
            docs = json;

            idx = lunr(function () {
                this.ref('id');
                this.field('title');
                this.field('body');
                this.field('url');
                this.metadataWhitelist = ['position'];

                docs.forEach(function (doc) {
                    this.add(doc);
                }, this);
            });
        }).fail(function(jqxhr, status, err){
            console.log(err);
        });

        let $searchForm = $('#search-form');
        let $searchBox = $('#search');
        $searchForm.on('submit', function(e) {
            e.preventDefault();
    
            lunr_search($searchBox.val());
        });
    });

    function lunr_search(term) {
        //$lunrOutput.empty();
        let $lunrOutput = $('<div id="lunrsearchresults"></div>')
        let $output = $('<ul id="search-results"></ul>');

        if(term) {            
            let results = idx.search(term);
            if(results.length > 0){
                results.forEach(function (result) {
                    let doc = docs[result.ref];
                    if(doc) {
                        let url = doc.url;
                        let title = doc.title;
                        
                        let body;
                        let key = Object.keys(result.matchData.metadata)[0];
                        if(key) {
                            let content = result.matchData.metadata[key].body;
                            if(content) {
                                let pos = content.position[0];
                                body = '&hellip;' + doc.body.substring(pos[0] - 300, pos[0] + pos[1] + 300) + '&hellip;';
                            }
                            else {
                                body = doc.body.substring(0, 300) + '&hellip;';
                            }
                        }
                        else {
                            body = doc.body.substring(0, 300) + '&hellip;';
                        }
                        
                        // Highlight matches in snippet
                        let r = $('<div><div class="body">' + body + '</div></div>').mark(term);
                        $output.append('<li class="lunrsearchresult"><h4 class="title"><a href=".' + url + '">' + title + '</a></h4>' + r.html() + '<a href=".' + url + '" class="url">' + location.origin + url + '</a></li>');
                    }
                });
            } 
            else {
                $output.html('<li class="lunrsearchresult">No results found&hellip;</li>');
            }
        }
        
        $lunrOutput.append($output);

        bootbox.dialog({
            title: 'Search results',
            message: $lunrOutput,
            size: 'xl',
            closeBtn: true
        });
    }